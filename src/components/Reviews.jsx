import { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Loading from "./Loading";
import PropTypes from "prop-types";

ReviewCard.propTypes = {
   remodelArea: PropTypes.string,
   fName: PropTypes.string,
   lInit: PropTypes.string,
   review: PropTypes.string,
   stars: PropTypes.string,
   reviewDate: PropTypes.string,
};

Reviews.propTypes = {
   galleries: PropTypes.array,
};

function ReviewCard({ remodelArea, fName, lInit, review, stars, reviewDate }) {
   const getStars = (rating) => {
      const starVal = parseInt(rating, 10);
      let output = [];
      for (var i = starVal; i >= 1; i--) output.push("⭐️");
      return output.join("");
   };

   return (
      <li
         data-sortdate={reviewDate}
         className="m-3 p-2  bg-white text-black rounded  shadow-lg transition ease-in-out delay-150 hover:bg-gray-500 hover:text-white duration-300  hover:-translate-y-1 hover:scale-105 flex-auto max-w-xs overflow-auto sm:h-64  sm:max-w-sm md:h-96 md:overflow-auto"
      >
         <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">
               {remodelArea.toUpperCase()}
            </div>
            <p className="text-center font-bold">
               {fName +
                  " " +
                  (lInit.length > 0 &&
                     (lInit.trim() !== "." ? lInit + "." : ""))}
               &nbsp;
               {getStars(stars) + " " + stars}
            </p>
            <p className="italic">{review}</p>
            <p className="text-center">
               {reviewDate.slice(-4, -2) +
                  "/" +
                  reviewDate.slice(-2) +
                  "/" +
                  reviewDate.slice(0, 4)}
            </p>
         </div>
      </li>
   );
}

function numToWord(n) {
   if (n < 0) return false;
   let word;
   const single_digit = [
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
   // const double_digit = [
   //    "Ten",
   //    "Eleven",
   //    "Twelve",
   //    "Thirteen",
   //    "Fourteen",
   //    "Fifteen",
   //    "Sixteen",
   //    "Seventeen",
   //    "Eighteen",
   //    "Nineteen",
   // ];
   // const below_hundred = [
   //    "Twenty",
   //    "Thirty",
   //    "Forty",
   //    "Fifty",
   //    "Sixty",
   //    "Seventy",
   //    "Eighty",
   //    "Ninety",
   // ];
   if (n === 0) return "Zero";
   function translate(n) {
      word = "";
      if (n < 10) {
         word = single_digit[n] + " ";
         // } else if (n < 20) {
         //    word = double_digit[n - 10] + " ";
         // } else if (n < 100) {
         //    const rem = translate(n % 10);
         //    word = below_hundred[(n - (n % 10)) / 10 - 2] + " " + rem;
         // } else if (n < 1000) {
         //    word =
         //       single_digit[Math.trunc(n / 100)] +
         //       " Hundred " +
         //       translate(n % 100);
         // } else if (n < 1000000) {
         //    word =
         //       translate(parseInt(n / 1000)).trim() +
         //       " Thousand " +
         //       translate(n % 1000);
         // } else if (n < 1000000000) {
         //    word =
         //       translate(parseInt(n / 1000000)).trim() +
         //       " Million " +
         //       translate(n % 1000000);
         // } else {
         //    word =
         //       translate(parseInt(n / 1000000000)).trim() +
         //       " Billion " +
         //       translate(n % 1000000000);
      }
      return word;
   }
   const result = translate(n);
   return result.trim();
}

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

   useEffect(() => {
      getReviews();
   }, []);

   useEffect(() => {
      window.gtag("event", "reviewsPage");
   }, []);

   async function getReviews() {
      const BASE_URL =
         "https://x0iujbvnqb.execute-api.us-east-1.amazonaws.com/Prod";

      try {
         const response = await fetch(`${BASE_URL}`);

         if (response.ok) {
            const reviewsData = await response.json();
            setReviews(reviewsData);
         } else {
            console.log("Error");
         }
      } catch (error) {
         console.log("error: ", error);
      }
   }

   const postReview = async (e) => {
      e.preventDefault();

      const BASE_URL =
         "https://x0iujbvnqb.execute-api.us-east-1.amazonaws.com/Prod";

      const formDataObj = Object.fromEntries(new FormData(e.target).entries());

      // post review
      try {
         const fNameRegX = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;

         if (formDataObj.remodelArea.length > 0) {
            if (fNameRegX.test(formDataObj.fName)) {
               if (formDataObj.lInit.trim().length === 1) {
                  if (formDataObj.review.length > 3) {
                     if (formDataObj.stars.length > 0) {
                        if (hasCaptchaToken) {
                           const raw = JSON.stringify(formDataObj);

                           const requestOptions = {
                              method: "POST",
                              body: raw,
                           };

                           const response = await fetch(
                              `${BASE_URL}`,
                              requestOptions
                           );

                           if (response.ok) {
                              const newReview = await response.json();
                              setSuccess("Thank you for your review!");
                              setReviews((reviews) => [...reviews, newReview]);
                              setRemodelArea("");
                              setFName("");
                              setLInit("");
                              setReview("");
                              setStars("");
                              setHasCaptchaToken(false);
                              setError("");
                              captchaRef.current.reset();
                           } else {
                              setError(
                                 `Error: ${response.status} ${response.statusText}`
                              );
                           }
                        } else {
                           setError("Please check the captcha.");
                        }
                     } else {
                        setError("Please select a valid rating");
                     }
                  } else {
                     setError("Please enter a valid review");
                  }
               } else {
                  setError("Please enter the first initial of your last name");
               }
            } else {
               setError("Please enter a valid first name");
            }
         } else {
            setError("Please select a valid remodel area");
         }
      } catch (error) {
         setError("error: ", error);
      }
   };

   function handleChange(value) {
      setHasCaptchaToken(true);
      setError("");
   }

   const dateKey = (timestamp) => {
      const createdDate = new Date(timestamp);
      const createdYear = createdDate.getFullYear();
      let createdMonth = createdDate.getMonth() + 1;
      let createdDay = createdDate.getDate();
      if (createdMonth < 10) {
         createdMonth = "0" + createdMonth;
      }
      if (createdDay < 10) {
         createdDay = "0" + createdDay;
      }
      return createdYear + "" + createdMonth + "" + createdDay;
   };

   const SECRET_KEY = "6LcVb6snAAAAAJ3J7ji2Fg2Vw7Pyu9oYTRoMMvB2";

   const captchaRef = useRef(null);

   // is loading
   if (reviews.length === 0) return <Loading />;

   return (
      <div id="reviews" className="grid px-5">
         <h2 className="text-3xl font-bold text-center mt-5">Reviews</h2>

         {/* show a summary of the reviews  */}
         <h3 className="text-center text-xl font-bold">
            {starsFilter.length > 0
               ? reviews.filter((stars) => stars.stars === starsFilter).length >
                 0
                  ? `${(
                       reviews
                          .filter((stars) => stars.stars === starsFilter)
                          .reduce(
                             (accumulator, current) =>
                                accumulator + parseInt(current.stars),
                             0
                          ) /
                       reviews.filter((stars) => stars.stars === starsFilter)
                          .length
                    ).toFixed(1)} average stars based on ${
                       reviews.filter((stars) => stars.stars === starsFilter)
                          .length
                    } ${numToWord(starsFilter)}-Star reviews`
                  : `There are no ${numToWord(starsFilter)}-Star reviews.`
               : reviews.length > 0
               ? `${(
                    reviews.reduce(
                       (accumulator, current) =>
                          accumulator + parseInt(current.stars),
                       0
                    ) / reviews.length
                 ).toFixed(1)} average stars based on ${
                    reviews.length
                 } total reviews`
               : "There are no reviews."}
         </h3>

         {/* show filters */}
         <div className="mt-5 mx-auto">
            <div className="flex flex-row justify-center">
               <div className="mr-5">
                  <button
                     className=" border p-2 rounded mx-auto"
                     onClick={() => {
                        setIsSortByNewest((newest) => !newest);
                     }}
                  >
                     Sort by {isSortByNewest ? "Oldest" : "Newest"}
                  </button>
               </div>
               <div>
                  <span className="font-bold">Ratings:&nbsp;&nbsp;</span>
                  <select
                     className="text-black p-2"
                     name="starsFilter"
                     id="starsFilter"
                     value={starsFilter}
                     onChange={(e) => {
                        setStarsFilter(e.target.value);
                     }}
                  >
                     <option value="">All</option>
                     <option value="5">5 stars</option>
                     <option value="4">4 stars</option>
                     <option value="3">3 stars</option>
                     <option value="2">2 stars</option>
                     <option value="1">1 star</option>
                  </select>
               </div>
            </div>
         </div>

         {/* add a button to write/cancel a review */}
         <div className="overflow-hidden">
            {!isFormShowing ? (
               <button
                  className="underline text-white  p-3 mt-5 mx-auto float-right"
                  onClick={() => {
                     setSuccess("");
                     setError("");
                     setRemodelArea("");
                     setFName("");
                     setLInit("");
                     setLInit("");
                     setReview("");
                     setStars("");
                     setHasCaptchaToken(false);
                     setIsFormShowing((showing) => !showing);
                  }}
               >
                  Write a review
               </button>
            ) : (
               <button
                  className="underline text-white  p-3 mt-5 mx-auto float-right"
                  onClick={() => {
                     setIsFormShowing((showing) => !showing);
                     setRemodelArea("");
                     setFName("");
                     setLInit("");
                     setLInit("");
                     setReview("");
                     setStars("");
                     setSuccess("");
                     setError("");
                     setHasCaptchaToken(false);
                  }}
               >
                  Cancel review
               </button>
            )}
         </div>

         {/* form to post a review */}
         {isFormShowing && (
            <div className="mt-5 mx-auto">
               <form className="flex flex-col px-5 " onSubmit={postReview}>
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

                  <label className="font-bold text-lg">Remodeled area</label>
                  <select
                     name="remodelArea"
                     id="remodelArea"
                     value={remodelArea}
                     onChange={(e) => setRemodelArea(e.target.value)}
                     className="border-2 border-gray-600 p-2 my-2 text-black"
                  >
                     <option value="">&darr; Select a remodeled area</option>
                     {
                        // populate the select with the gallery names
                        [
                           ...galleries.map((gallery) => (
                              <option
                                 value={gallery.galleryName}
                                 key={gallery.id}
                              >
                                 {gallery.galleryName}
                              </option>
                           )),
                           <option value="Whole house" key="Whole house">
                              Whole house
                           </option>,
                        ]
                     }
                  </select>
                  <label className="font-bold text-lg">First name</label>
                  <input
                     type="text"
                     name="fName"
                     id="fName"
                     value={fName}
                     onChange={(e) => setFName(e.target.value)}
                     className="border-2 border-gray-600 p-2 my-2 text-black"
                  />
                  <label className="font-bold text-lg">Last initial</label>
                  <input
                     type="text"
                     name="lInit"
                     id="lInit"
                     value={lInit}
                     onChange={(e) => setLInit(e.target.value)}
                     className="border-2 border-gray-600 p-2 my-2 text-black"
                  />
                  <label className="font-bold text-lg">Review</label>
                  <textarea
                     name="review"
                     id="review"
                     value={review}
                     onChange={(e) => setReview(e.target.value)}
                     className="border-2 border-gray-600 p-2 my-2 text-black"
                  ></textarea>
                  <label className="font-bold text-lg">Stars</label>

                  <select
                     name="stars"
                     id="stars"
                     value={stars}
                     onChange={(e) => setStars(e.target.value)}
                     className="border-2 border-gray-600 p-2 my-2 text-black"
                  >
                     <option value="">&darr; Select star rating</option>
                     <option value="5">5</option>
                     <option value="4">4</option>
                     <option value="3">3</option>
                     <option value="2">2</option>
                     <option value="1">1</option>
                  </select>

                  <div className="my-3">
                     <ReCAPTCHA
                        sitekey={SECRET_KEY}
                        ref={captchaRef}
                        onChange={handleChange}
                     />
                  </div>

                  <div className="overflow-hidden">
                     <button
                        className="rounded bg-white text-black font-bold py-2 px-4 my-5 mx-auto float-right hover:text-white hover:bg-gray-700 animate-pulse"
                        hidden={!hasCaptchaToken ? "hidden" : ""}
                     >
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         )}

         {/* display reviews */}
         <ul className="flex flex-wrap items-center justify-center">
            {starsFilter === ""
               ? isSortByNewest
                  ? reviews
                       .map((review) => (
                          <ReviewCard
                             remodelArea={review.remodelArea}
                             fName={review.fName}
                             lInit={review.lInit}
                             review={review.review}
                             stars={review.stars}
                             reviewDate={dateKey(review.timestamp)}
                             key={review.id}
                          />
                       ))
                       .sort((a, b) => b.props.reviewDate - a.props.reviewDate)
                  : reviews
                       .map((review) => (
                          <ReviewCard
                             remodelArea={review.remodelArea}
                             fName={review.fName}
                             lInit={review.lInit}
                             review={review.review}
                             stars={review.stars}
                             reviewDate={dateKey(review.timestamp)}
                             key={review.id}
                          />
                       ))
                       .sort((a, b) => a.props.reviewDate - b.props.reviewDate)
               : isSortByNewest
               ? reviews
                    .map((review) => (
                       <ReviewCard
                          remodelArea={review.remodelArea}
                          fName={review.fName}
                          lInit={review.lInit}
                          review={review.review}
                          stars={review.stars}
                          reviewDate={dateKey(review.timestamp)}
                          key={review.id}
                       />
                    ))
                    .sort((a, b) => b.props.reviewDate - a.props.reviewDate)
                    .filter((stars) => stars.props.stars === starsFilter)
               : reviews
                    .map((review) => (
                       <ReviewCard
                          remodelArea={review.remodelArea}
                          fName={review.fName}
                          lInit={review.lInit}
                          review={review.review}
                          stars={review.stars}
                          reviewDate={dateKey(review.timestamp)}
                          key={review.id}
                       />
                    ))
                    .sort((a, b) => a.props.reviewDate - b.props.reviewDate)
                    .filter((stars) => stars.props.stars === starsFilter)}
         </ul>
      </div>
   );
}
