import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function RequestPhotoShoot() {
   const {
      register,
      getValues,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const onSubmit = async (data) => {
      // Logic to send email with data, using a backend or email service
      try {
         const response = await fetch(
            `${import.meta.env.VITE_PHOTO_EMAILER_BASE_URL}/pics`,
            {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(data),
            }
         );

         if (response.ok) {
            toast.success("Request was submitted!");
            reset();
         } else {
            throw new Error("Failed to send request");
         }
      } catch (error) {
         console.error("Error:", error);
         toast.error("Failed to submit request.");
      }
   };

   return (
      <div className="container mx-auto max-w-lg p-6 bg-white shadow-md rounded-md mt-6 text-black">
         <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Request a Remodel Photo Shoot
         </h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
               <label
                  htmlFor="requestedBy"
                  className="block text-sm font-medium text-gray-700"
               >
                  Requested by:
               </label>
               <input
                  type="text"
                  id="requestedBy"
                  {...register("requestedBy", {
                     required: "This field is required",
                     minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                     },
                     pattern: {
                        value: /^[a-zA-Z\s-]+$/,
                        message: "Please enter a valid name",
                     },
                  })}
                  placeholder="Your full name"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  aria-invalid={errors.requestedBy ? "true" : "false"}
               />
               {errors.requestedBy && (
                  <p className="text-red-600 text-sm mt-1">
                     {errors.requestedBy.message}
                  </p>
               )}
            </div>

            <div className="mb-4">
               <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
               >
                  Remodel work to shoot:
               </label>
               <textarea
                  id="description"
                  {...register("description", {
                     required: "This field is required",
                     minLength: {
                        value: 5,
                        message: "Description must be at least 5 characters",
                     },
                     pattern: {
                        value: /^[a-zA-Z0-9\s.,!?-]+$/,
                        message: "Please enter a valid description",
                     },
                  })}
                  placeholder="Briefly describe the remodel"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  aria-invalid={errors.description ? "true" : "false"}
               />
               {errors.description && (
                  <p className="text-red-600 text-sm mt-1">
                     {errors.description.message}
                  </p>
               )}
            </div>

            <div className="mb-4">
               <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
               >
                  Address of the remodel:
               </label>
               <textarea
                  id="address"
                  {...register("address", {
                     required: "This field is required",
                     minLength: {
                        value: 10,
                        message: "Address must be at least 10 characters",
                     },
                     pattern: {
                        value: /^[a-zA-Z0-9\s.,!?-]+$/,
                        message: "Please enter a valid address",
                     },
                  })}
                  placeholder="123 Main St, City, Zip"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  aria-invalid={errors.address ? "true" : "false"}
               />
               {errors.address && (
                  <p className="text-red-600 text-sm mt-1">
                     {errors.address.message}
                  </p>
               )}
            </div>

            <div className="mb-4">
               <label
                  htmlFor="completionDate"
                  className="block text-sm font-medium text-gray-700"
               >
                  Date remodel completed:
               </label>
               <input
                  type="date"
                  id="completionDate"
                  {...register("completionDate", {
                     required: "This field is required",
                     validate: (value) => {
                        // validate that the value is a valid date
                        if (isNaN(new Date(value).getTime())) {
                           return "Please enter a valid date.";
                        }
                     },
                  })}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  aria-invalid={errors.completionDate ? "true" : "false"}
               />
               {errors.completionDate && (
                  <p className="text-red-600 text-sm mt-1">
                     {errors.completionDate.message}
                  </p>
               )}
            </div>

            <div className="mb-4">
               <label
                  htmlFor="availableDate"
                  className="block text-sm font-medium text-gray-700"
               >
                  Date location is available:
               </label>
               <input
                  type="date"
                  id="availableDate"
                  {...register("availableDate", {
                     required: "This field is required",
                     validate: (value) => {
                        const completionDate = new Date(
                           getValues("completionDate")
                        );
                        // guard clause to ensure a completion date was entered
                        if (isNaN(completionDate.getTime())) {
                           return "Please enter a completion date.";
                        }
                        // if the completion date is in the future, then allow the available date to be equal to or greater than the completion date but if the completion date is in the past, then the available date must be in the future
                        const availableDate = new Date(value);
                        const today = new Date();
                        if (completionDate > today) {
                           return (
                              availableDate >= completionDate ||
                              "Available date cannot be before the completion date"
                           );
                        } else {
                           return (
                              availableDate > today ||
                              "Available date must be at least 24 hours from today"
                           );
                        }
                     },
                  })}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  aria-invalid={errors.availableDate ? "true" : "false"}
               />
               {errors.availableDate && (
                  <p className="text-red-600 text-sm mt-1">
                     {errors.availableDate.message}
                  </p>
               )}
            </div>

            <button
               type="submit"
               className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
               Submit Request
            </button>
         </form>
      </div>
   );
}
