// import props validation
import PropTypes from "prop-types";

Benefit.propTypes = {
   text: PropTypes.string,
};

export default function Benefit({ text }) {
   return (
      <div className="text-center">
         <p className="font-semibold rounded-md px-2 py-1 bg-slate-50 text-black">
            {text}
         </p>
      </div>
   );
}
