import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [hasCaptchaToken, setHasCaptchaToken] = useState(false);

   // const SECRET_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // testing
   const SECRET_KEY = "6LcaoNkjAAAAAOFAEh-K5p62Rh3T1V_zzb9lJ1wK"; // prod

   const captchaRef = useRef(null);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const formDataObj = Object.fromEntries(new FormData(e.target).entries());

      // data validation
      const fullNameRegX =
         /([A-Z]+([']|[.])?([A-Z,a-z,.]*))\s(([A-Z]|['])+[A-Z,a-z]*)([-\s](([A-Z]|['])+[A-Z,a-z]*)*)?/g;
      // /([A-Z]+([']|[\.])?([A-Z,a-z,\.]*))\s(([A-Z]|['])+[A-Z,a-z]*)([-\s](([A-Z]|['])+[A-Z,a-z]*)*)?/g;

      if (fullNameRegX.test(formDataObj.name)) {
         // setError("");
         if (formDataObj.message.length > 3) {
            // setError("");
            if (hasCaptchaToken) {
               const token = captchaRef.current.getValue(); // returns token from ReCaptcha component

               captchaRef.current.reset();

               const raw = JSON.stringify({
                  ...formDataObj,
                  "g-recaptcha-response": token,
               });

               const options = {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: raw,
               };

               try {
                  const response = await fetch(
                     "https://ydvvjbdup4.execute-api.us-east-1.amazonaws.com/Prod",
                     options
                  );

                  if (response.ok) {
                     // show success message
                     setSuccess("Your message was sent!");
                     setError("");

                     // reset form
                     setFullName("");
                     setEmail("");
                     setMessage("");
                     setHasCaptchaToken(false);

                     // const data = await response.json(); // the data is a message Id string, good for nothing
                  } else {
                     // show error message
                     setError(
                        "Sorry, something went wrong trying to send your message. The administrator has been informed. Please try again at a later time."
                     );
                     console.log(response);
                  }
               } catch (error) {
                  setError(
                     "Sorry, something went wrong trying to send your message. The administrator has been informed. Please try again at a later time."
                  );
               }
            } else {
               // the recaptcha was not checked
               setError("Please check the recaptcha box.");
            }
         } else {
            setError("Please enter a valid message.");
         }
      } else {
         setError("Please enter a valid full name.");
      }
   };

   function handleOnChange(value) {
      setHasCaptchaToken(true);
      setError("");
   }

   useEffect(() => {
      window.gtag("event", "contactPage");
   }, []);

   return (
      <div
         id="contact"
         className="grid grid-cols-1 content-start justify-items-center"
      >
         <h2 className="text-3xl font-bold text-center mt-5">
            Drop us a line!
         </h2>
         <p className="m-2 border p-5 rounded">
            Call:&nbsp;&nbsp;<a href="tel:9413130263">(941)313-0263</a>
         </p>
         <p className="m-2 border p-5 rounded ">
            Email:&nbsp;&nbsp;
            <a href="mailto:info@sarasotaremodeling.com">
               info@sarasotaremodeling.com
            </a>
         </p>

         <div className="m-2 p-5 border rounded">
            <p className="">Message:</p>

            {/* <!-- Contact form --> */}
            <form className="px-5" id="contact-us-form" onSubmit={handleSubmit}>
               {success.length > 0 && (
                  <h3 className="text-green-500  text-center font-bold mb-5">
                     {success}
                  </h3>
               )}
               {error.length > 0 && (
                  <h3 className="text-red-500 text-center font-bold mb-5">
                     {error}
                  </h3>
               )}

               <label htmlFor="name" className="block my-3">
                  <span className="block text-sm font-medium">
                     Your Full Name
                  </span>
                  <input
                     type="text"
                     className="text-black pl-3"
                     id="name"
                     name="name"
                     placeholder="Enter your full name"
                     autoComplete="name"
                     value={fullName}
                     onChange={(e) => setFullName(e.target.value)}
                  />
               </label>
               <label className="block my-3">
                  <span className="block text-sm font-medium">Your Email</span>
                  <input
                     type="email"
                     className="peer text-black pl-3 pr-9"
                     name="email"
                     id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <p id="emailHelp" className="text-xs italic">
                     We&apos;ll never share your email with anyone else.
                  </p>
                  <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                     Please provide a valid email address.
                  </p>
               </label>
               <label htmlFor="message" className="my-3">
                  <span className="block text-sm font-medium">
                     Your message
                  </span>
                  <textarea
                     className="text-black pl-3 pr-12"
                     id="message"
                     name="message"
                     rows="4"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
               </label>
               <div className="my-3">
                  <ReCAPTCHA
                     sitekey={SECRET_KEY}
                     ref={captchaRef}
                     onChange={handleOnChange}
                  />
               </div>
               <div className="mb-24">
                  <button
                     type="submit"
                     id="submitBtn"
                     className="rounded bg-white text-black font-bold py-2 px-4 my-3 hover:text-white hover:bg-gray-700 animate-pulse"
                     hidden={!hasCaptchaToken ? "hidden" : ""}
                  >
                     Send Message!
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
