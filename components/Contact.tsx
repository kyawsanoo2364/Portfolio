"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import { toast } from "sonner";
import { SendEmail } from "@/lib/resend";

const FormSchema = z.object({
  email: z.email(),
  message: z.string().min(5),
});

const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      toast.loading("Sending...", { id: "send-email" });
      await SendEmail(values.email, values.message);
      toast.success(
        "Your message was sent successfully. I will get back to you soon.",
        { id: "send-email" },
      );
      form.reset({
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", { id: "send-email" });
    }
  };

  return (
    <div
      id="contact"
      className="md:mt-20 lg:mt-0 mt-96 w-full h-screen container mx-auto flex items-center flex-col justify-center gap-2 px-4"
    >
      <h3 className="text-3xl font-bold">Get In Touch</h3>
      <p className="text-base text-muted-foreground">
        Please contact me directly at{" "}
        <a href="mailto:skyaw6736@gmail.com" className="underline">
          skyaw6736@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <div className="my-5 w-full max-w-lg">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full py-6"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="h-60 "
                      placeholder="Message"
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="font-semibold w-full cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
