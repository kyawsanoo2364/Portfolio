"use client";

import { MenuItems } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const checkScrolling = () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrolling);

    return () => {
      window.removeEventListener("scroll", checkScrolling);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "hidden lg:flex w-full py-5 container mx-auto px-4 items-center justify-between flex-row fixed top-0 right-0 left-0 z-100 ",
          isScroll && "backdrop-blur-md ",
        )}
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            K.S
          </h1>
        </div>
        <ul
          className={cn(
            "flex items-center flex-row gap-6  px-6 py-2  ",
            !isScroll &&
              "rounded-full border border-muted shadow-sm  dark:shadow-white",
          )}
        >
          {MenuItems.map(({ label, href }, index) => (
            <li key={"menuItem" + index}>
              <a className="font-semibold " href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant={"outline"} asChild>
            <a href="#contact" className="flex items-center gap-4">
              Contact{" "}
              <span>
                <ArrowRight />
              </span>
            </a>
          </Button>
        </div>
      </nav>
      {/** Mobile Navbar */}
      <nav
        className={cn(
          "lg:hidden py-4 px-4 flex container mx-auto items-center justify-between z-100",
          isScroll && "backdrop-blur-md ",
        )}
      >
        <div>
          <h1 className="text-3xl  font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            K.S
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant={"outline"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-xl text-muted-foreground">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <ul className="px-6 py-2 mt-2 space-y-10">
                {MenuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      onClick={() => setIsSheetOpen((prev) => !prev)}
                      className="text-lg font-semibold"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
