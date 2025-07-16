"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_TOKEN as string);

export const SendEmail = async (senderEmail: string, message: string) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "skyaw6736@gmail.com",
      subject: "Contact You!",
      text: `Message from ${senderEmail}, ${message}`,
    });
  } catch (error) {
    throw error;
  }
};
