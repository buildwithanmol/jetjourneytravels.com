"use server";
import nodemailer from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

export const sendMail = async ({
  email,
  subject,
  body,
}: {
  email: string[];
  subject: string;
  body: string;
}) => {
  try {
    if (!process.env.GMAIL_HOST || !process.env.GMAIL_PASSWORD) {
      throw new Error("Missing email credentials in environment variables.");
    }

    // Create reusable transporter object
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_HOST,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Format the "from" field with a display name
    const senderName = "Jet Journey Web Mail Service";
    const senderEmail = process.env.GMAIL_HOST;

    const mailOptions: Options = {
      from: `"${senderName}" <${senderEmail}>`, // Shows as "Jet Journey Web Mail <email>"
      to: email.join(","), // join ensures multiple recipients handled properly
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          ${body}
          <br /><br />
          <hr style="border: 0; border-top: 1px solid #ddd;" />
          <p style="font-size: 14px; color: #777;">
            Best regards,<br/>
            <strong>${senderName}</strong><br/>
            <a href="https://jetjourneytravels.com" target="_blank" style="color: #007BFF; text-decoration: none;">
              jetjourneytravels.com
            </a>
          </p>
        </div>
      `,
      replyTo: senderEmail, // allows replies directly
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return info;
  } catch (error: any) {
    console.error("❌ Error sending email:", error.message);
    throw error;
  }
};

export default sendMail;
