import sendMail from "@/lib/actions/mail";

export default async () => {
    await sendMail({
        email: ["developwithanmol@gmail.com"],
        subject: "Service Request - Jet Journey Travels LLC",
        body: "A new request for travel service is initiated by @developwithanmol@gmail.com. Please contact him/her for more details.",
    });
    return <div>Test Page</div>;
}