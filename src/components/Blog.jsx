import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

BlogCard.propTypes = {
   title: PropTypes.string,
   description: PropTypes.string,
   published: PropTypes.string,
   length: PropTypes.string,
   link: PropTypes.string,
};

Blog.propTypes = {
   articles: PropTypes.array,
};

function BlogCard({ title, description, published, length, link }) {
   return (
      <li className="text-center sm:text-left sm:grid m-3 p-3 border rounded hover:scale-105">
         <h3 className="text-xl font-bold">{title}</h3>
         <span className="text-sm">
            Published {published}&nbsp;&nbsp;{length}
         </span>
         <p className="text-sm">{description}</p>
         <a href={link} target="_blank" rel="noreferrer">
            ... Read more
         </a>
      </li>
   );
}

export default function Blog({ articles }) {
   useEffect(() => {
      window.gtag("event", "blogsPage");
   }, []);

   return (
      <div id="blog" className=" grid grid-cols-1 sm:grid-cols-3">
         <div className="m-3 p-3 border rounded text-center">
            <img
               src="RonProfile.webp"
               width="150"
               height="auto"
               alt="profile picture of Ron"
               className="mx-auto mt-3 rounded-lg"
            />
            <p className="m-3 pb-5">
               Ron Canterbury is President and co-founder of Sarasota Remodeling
               and Design, LLC.. Since moving to Florida over 8 years ago he has
               completed over 1,000 interior remodeling projects of various
               sizes and price points. His company specializes in kitchens and
               bathrooms but also work on all projects from the outside walls in
               including complete rehabs. His attention to detail, finishing
               projects on time, and follow up with Customers is what he strives
               for everyday. As a result his company receives referrals on a
               daily basis from past and current Customers.
            </p>
            <Link
               to="/contact"
               className="font-semibold bg-gray-600 border rounded p-3 animate-pulse hover:bg-white hover:text-black"
            >
               CONTACT RON!
            </Link>
         </div>

         <div className="m-3 sm:col-span-2">
            <h2 className="text-3xl font-bold text-center sm:text-left mt-5">
               Blog articles
            </h2>
            <ul className="">
               {articles.map((article) => (
                  <BlogCard
                     key={article.id}
                     title={article.title}
                     description={article.description}
                     published={article.published}
                     length={article.length}
                     link={article.link}
                  />
               ))}
            </ul>
         </div>
      </div>
   );
}
