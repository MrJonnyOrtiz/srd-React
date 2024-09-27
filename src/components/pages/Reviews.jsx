import { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ReactPaginate from "react-paginate";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import PropTypes from "prop-types";

import Loading from "../ui/Loading";

const numToWord = (n) => {
   const singleDigitWords = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
   ];
   return n >= 0 && n < 10 ? singleDigitWords[n] : n;
};

const dateKey = (timestamp) => {
   const createdDate = new Date(timestamp);
   const createdYear = createdDate.getFullYear();
   let createdMonth = createdDate.getMonth() + 1;
   let createdDay = createdDate.getDate();
   createdMonth = createdMonth < 10 ? `0${createdMonth}` : createdMonth;
   createdDay = createdDay < 10 ? `0${createdDay}` : createdDay;
   return `${createdYear}${createdMonth}${createdDay}`;
};

function PaginationButtons({ totalPages, currentPage, handleCurrentPage }) {
   const handlePageClick = ({ selected }) => {
      handleCurrentPage(selected + 1);
   };

   return (
      <nav
         aria-label="Pagination"
         className="flex items-center justify-center gap-3"
      >
         <ReactPaginate
            onPageChange={handlePageClick}
            pageCount={totalPages}
            pageRangeDisplayed={3}
            breakLabel={<span className="mx-2 text-gray-400">...</span>}
            nextLabel={
               <button
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 ${
                     currentPage < totalPages
                        ? "transition-colors duration-300 hover:bg-white hover:text-black"
                        : "cursor-not-allowed"
                  }`}
                  disabled={currentPage >= totalPages}
               >
                  <HiChevronRight />
                  <span className="sr-only">Next Page</span>
               </button>
            }
            previousLabel={
               <button
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 ${
                     currentPage > 1
                        ? "transition-colors duration-300 hover:bg-white hover:text-black"
                        : "cursor-not-allowed"
                  }`}
                  disabled={currentPage <= 1}
               >
                  <HiChevronLeft />
                  <span className="sr-only">Previous Page</span>
               </button>
            }
            pageClassName="mx-1"
            pageLinkClassName="block w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-white hover:text-black transition-colors duration-300"
            activeClassName="bg-gray-300 rounded-lg text-black font-bold"
            disabledClassName="cursor-not-allowed text-gray-400"
            breakClassName="mx-1 text-gray-500"
            containerClassName="flex items-center"
         />
      </nav>
   );
}

PaginationButtons.propTypes = {
   totalPages: PropTypes.number.isRequired,
   currentPage: PropTypes.number.isRequired,
   handleCurrentPage: PropTypes.func.isRequired,
};

function ReviewCard({ remodelArea, fName, lInit, review, stars, timestamp }) {
   const getStars = (rating) => {
      const starVal = parseInt(rating, 10);
      return "⭐️".repeat(starVal);
   };
   const reviewDate = dateKey(timestamp);

   return (
      <li
         data-sort-date={reviewDate}
         className="m-3 p-2 bg-white text-black rounded shadow-lg transition-transform duration-300 hover:bg-gray-500 hover:text-white hover:-translate-y-1 hover:scale-105 flex-auto max-w-xs overflow-auto sm:h-64 sm:max-w-sm md:h-96"
      >
         <div className="grid gap-2 px-6 py-4">
            <div className="font-bold text-xl text-center">
               {remodelArea.toUpperCase()}
            </div>
            <p className="text-center font-bold">
               {`${fName} ${lInit.trim() !== "." ? `${lInit}.` : ""} ${getStars(
                  stars
               )} ${stars}`}
            </p>
            <p className="italic">{review}</p>
            <p className="text-center">
               {`${reviewDate?.slice(-4, -2)}/${reviewDate?.slice(
                  -2
               )}/${reviewDate?.slice(0, 4)}`}
            </p>
         </div>
      </li>
   );
}

ReviewCard.propTypes = {
   remodelArea: PropTypes.string,
   fName: PropTypes.string,
   lInit: PropTypes.string,
   review: PropTypes.string,
   stars: PropTypes.string,
   timestamp: PropTypes.string,
};

function AverageStars({ reviews, starsFilter }) {
   const calculateAverageStars = (reviews) => {
      const totalStars = reviews.reduce(
         (acc, current) => acc + parseInt(current.stars),
         0
      );
      return (totalStars / reviews.length).toFixed(1);
   };

   const filterReviewsByStars = (reviews, starsFilter) => {
      return reviews.filter((review) => review.stars === starsFilter);
   };

   const renderAverageStarsMessage = () => {
      if (starsFilter) {
         const filteredReviews = filterReviewsByStars(reviews, starsFilter);
         if (filteredReviews.length > 0) {
            const averageStars = calculateAverageStars(filteredReviews);
            return `${averageStars} average stars based on ${
               filteredReviews.length
            } ${numToWord(starsFilter)}-Star reviews`;
         } else {
            return `There are no ${numToWord(starsFilter)}-Star reviews.`;
         }
      } else {
         if (reviews.length > 0) {
            const averageStars = calculateAverageStars(reviews);
            return `${averageStars} average stars based on ${reviews.length} total reviews`;
         } else {
            return "There are no reviews.";
         }
      }
   };

   return (
      <h3 className="text-center text-xl">{renderAverageStarsMessage()}</h3>
   );
}

// PropTypes validation for the component
AverageStars.propTypes = {
   reviews: PropTypes.arrayOf(
      PropTypes.shape({
         stars: PropTypes.string.isRequired,
      })
   ).isRequired,
   starsFilter: PropTypes.string.isRequired,
};

export default function Reviews({ galleries }) {
   const [reviews, setReviews] = useState([]);
   const [remodelArea, setRemodelArea] = useState("");
   const [fName, setFName] = useState("");
   const [lInit, setLInit] = useState("");
   const [review, setReview] = useState("");
   const [stars, setStars] = useState("");
   const [isFormShowing, setIsFormShowing] = useState(false);
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");
   const [hasCaptchaToken, setHasCaptchaToken] = useState(false);
   const [isSortByNewest, setIsSortByNewest] = useState(true);
   const [starsFilter, setStarsFilter] = useState("");
   const [currentPage, setCurrentPage] = useState(1);

   // get PAGE_SIZE from environment variables and convert to integer
   const PAGE_SIZE = parseInt(import.meta.env.VITE_PAGE_SIZE, 10);
   const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
   const captchaRef = useRef(null);

   useEffect(() => {
      const fetchReviews = async () => {
         try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}`);
            if (response.ok) {
               const reviewsData = await response.json();
               setReviews(reviewsData);
            } else {
               console.error(
                  "Error fetching reviews:",
                  response.status,
                  response.statusText
               );
            }
         } catch (error) {
            console.error("Error fetching reviews:", error);
         }
      };

      fetchReviews();
   }, []);

   useEffect(() => {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem("cookieConsent") === "true";

      if (isConsentGiven && window.gtag) {
         window.gtag("event", "reviewsPage");
      }
   }, []);

   const postReview = async (e) => {
      e.preventDefault();

      const formDataObj = Object.fromEntries(new FormData(e.target).entries());

      try {
         const fNameRegX = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;

         if (formDataObj.remodelArea.length === 0) {
            setError("Please select a valid remodel area");
            return;
         }

         if (!fNameRegX.test(formDataObj.fName)) {
            setError("Please enter a valid first name");
            return;
         }

         if (formDataObj.lInit.trim().length !== 1) {
            setError("Please enter the first initial of your last name");
            return;
         }

         if (formDataObj.review.length <= 3) {
            setError("Please enter a valid review");
            return;
         }

         if (formDataObj.stars.length === 0) {
            setError("Please select a valid rating");
            return;
         }

         if (!hasCaptchaToken) {
            setError("Please check the captcha.");
            return;
         }

         const raw = JSON.stringify(formDataObj);

         const requestOptions = {
            method: "POST",
            body: raw,
         };

         const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}`,
            requestOptions
         );

         if (response.ok) {
            const newReview = await response.json();
            setSuccess("Thank you for your review!");
            setReviews((prevReviews) => [...prevReviews, newReview]);
            setRemodelArea("");
            setFName("");
            setLInit("");
            setReview("");
            setStars("");
            setHasCaptchaToken(false);
            setError("");
            captchaRef.current.reset();
         } else {
            setError(`Error: ${response.status} ${response.statusText}`);
         }
      } catch (error) {
         setError(`Error: ${error.message}`);
      }
   };

   const handleChange = () => {
      setHasCaptchaToken(true);
      setError("");
   };

   const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
   };

   const filteredReviews = reviews.filter((review) => {
      if (!starsFilter) return true;
      return review.stars === starsFilter;
   });

   const sortedReviews = filteredReviews.sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return isSortByNewest ? dateB - dateA : dateA - dateB;
   });

   const totalPages = Math.ceil(sortedReviews.length / PAGE_SIZE);
   const startIndex = (currentPage - 1) * PAGE_SIZE;
   const paginatedReviews = sortedReviews.slice(
      startIndex,
      startIndex + PAGE_SIZE
   );

   if (reviews?.length === 0) return <Loading />;

   return (
      <div id="reviews" className="grid gap-3 px-5">
         <h2 className="text-3xl font-bold text-center">Reviews</h2>

         <AverageStars reviews={sortedReviews} starsFilter={starsFilter} />

         {/* write review */}
         <section className="flex justify-end">
            <button
               className="rounded-lg -my-2 px-2 py-1 bg-gray-700 text-white transition-transform duration-300 text-xs md:text-sm hover:scale-105 hover:bg-white hover:text-black"
               onClick={() => setIsFormShowing(!isFormShowing)}
            >
               {isFormShowing ? "Cancel" : "Write a Review"}
            </button>
         </section>

         {/* review form */}
         {isFormShowing && (
            <section className="flex justify-center ">
               <form
                  onSubmit={postReview}
                  className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-black"
               >
                  <div className="mb-4">
                     <label
                        htmlFor="remodelArea"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Remodel Area:
                     </label>
                     <select
                        id="remodelArea"
                        name="remodelArea"
                        className="block w-full p-2 border rounded border-gray-600 my-2 text-black"
                        value={remodelArea}
                        onChange={(e) => setRemodelArea(e.target.value)}
                     >
                        <option value="">Select an Area</option>
                        {[
                           ...galleries.map((gallery) => (
                              <option
                                 className="text-black"
                                 key={gallery.id}
                                 value={gallery.galleryName}
                              >
                                 {gallery.galleryName}
                              </option>
                           )),
                           <option key="Whole House" value="Whole House">
                              Whole House
                           </option>,
                        ]}
                     </select>
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="fName"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        First Name:
                     </label>
                     <input
                        type="text"
                        id="fName"
                        name="fName"
                        className="block w-full p-2 border rounded"
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="lInit"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Last Initial:
                     </label>
                     <input
                        type="text"
                        id="lInit"
                        name="lInit"
                        className="block w-full p-2 border rounded"
                        value={lInit}
                        onChange={(e) => setLInit(e.target.value)}
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="review"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Review:
                     </label>
                     <textarea
                        id="review"
                        name="review"
                        className="block w-full p-2 border rounded"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                     ></textarea>
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="stars"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Rating:
                     </label>
                     <select
                        id="stars"
                        name="stars"
                        className="block w-full p-2 border rounded"
                        value={stars}
                        onChange={(e) => setStars(e.target.value)}
                        required
                     >
                        <option value="">Select a Rating</option>
                        {[1, 2, 3, 4, 5].map((star) => (
                           <option key={star} value={star}>
                              {numToWord(star)}
                           </option>
                        ))}
                     </select>
                  </div>
                  <div className="mb-4">
                     <ReCAPTCHA
                        ref={captchaRef}
                        sitekey={SECRET_KEY}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="flex justify-center">
                     <button
                        type="submit"
                        className="bg-gray-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black border-2"
                     >
                        Submit
                     </button>
                  </div>
               </form>
            </section>
         )}

         {/* user feedback after form submission */}
         {success && (
            <p className="flex items-center justify-center  p-2 bg-green-100 text-green-700 border border-green-400 rounded">
               {success}
            </p>
         )}
         {error && (
            <p className="flex items-center justify-center  p-2 bg-red-100 text-red-700 border border-red-400 rounded">
               {error}
            </p>
         )}

         {/* sort and filter buttons */}
         <div className="flex items-center justify-center gap-3 md:gap-7">
            {/* sort */}
            <section className="flex justify-center ">
               <button
                  className="rounded-lg p-3 bg-gray-700 text-white transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black"
                  onClick={() => setIsSortByNewest(!isSortByNewest)}
               >
                  {isSortByNewest ? "Sort by Oldest" : "Sort by Newest"}
               </button>
            </section>

            {/* filter */}
            <section className="flex justify-center ">
               <select
                  className="rounded-lg p-3 bg-myLightBlue text-black transition-transform duration-300 hover:scale-105 hover:bg-myYellow hover:text-myBlueGreen"
                  onChange={(e) => setStarsFilter(e.target.value)}
               >
                  <option value="">Filter by Stars</option>
                  {[1, 2, 3, 4, 5].map((star) => (
                     <option key={star} value={star}>
                        {numToWord(star)} {star === 1 ? "Star" : "Stars"}
                     </option>
                  ))}
               </select>
            </section>
         </div>

         {/* reviews list */}
         <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {paginatedReviews?.map((review) => (
               <ReviewCard key={review.id} {...review} />
            ))}
         </ul>

         {/* pagination buttons */}
         <div className="">
            <PaginationButtons
               totalPages={totalPages}
               currentPage={currentPage}
               handleCurrentPage={handlePageChange}
            />
         </div>
      </div>
   );
}

Reviews.propTypes = {
   galleries: PropTypes.arrayOf(
      PropTypes.shape({
         galleryArea: PropTypes.string,
      })
   ),
};
