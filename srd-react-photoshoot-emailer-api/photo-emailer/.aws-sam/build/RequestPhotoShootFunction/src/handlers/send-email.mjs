// Import AWS SDK for SES
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize SES client
const sesClient = new SESClient({ region: process.env.REGION });

// Get the SES sender and receiver emails from environment variables
const senderEmail = process.env.SES_SENDER_EMAIL;
const receiverEmail = process.env.SES_RECEIVER_EMAIL;

/**
 * Lambda handler to send form data via email with SES.
 */
export const sendEmailHandler = async (event) => {
   if (event.httpMethod !== "POST") {
      throw new Error(
         `sendEmailHandler only accepts POST method, you tried: ${event.httpMethod} method.`
      );
   }

   console.info("Received event:", event);

   // Parse form data from request body
   const body = JSON.parse(event.body);
   const { requestedBy, description, address, completionDate, availableDate } =
      body;

   // Construct the email content
   const emailParams = {
      Source: senderEmail,
      Destination: {
         ToAddresses: [receiverEmail],
      },
      Message: {
         Subject: { Data: "New Remodel Photo Shoot Request" },
         Body: {
            Text: {
               Data: `A new remodel photo shoot request was submitted:\n
                    - Requested by: ${requestedBy}\n
                    - Description: ${description}\n
                    - Address: ${address}\n
                    - Date remodel completed: ${completionDate}\n
                    - Date location is available: ${availableDate}`,
            },
         },
      },
   };

   try {
      // Send the email using SES
      const data = await sesClient.send(new SendEmailCommand(emailParams));
      console.log("Success - email sent", data);

      const response = {
         statusCode: 200,
         headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({ message: "Email sent successfully!" }),
      };
      return response;
   } catch (error) {
      console.error("Error sending email:", error);
      const response = {
         statusCode: 500,
         headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({ error: "Failed to send email" }),
      };
      return response;
   }
};
