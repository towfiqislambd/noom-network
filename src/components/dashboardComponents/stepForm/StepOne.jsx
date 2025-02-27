import { Link } from "react-router-dom";
import portfolio from "../../../assets/portfolio.png"

const StepOne = ({ step, setStep }) => {
    return (
        <div className="grid xl:grid-cols-2 gap-10 3xl:grid-cols-12">
            <div className="3xl:col-span-7">
                <h2 className="text-2xl md:text-4xl font-semibold mb-16 md:mb-32 text-headingTextColor">Welcome Mosharaf</h2>
                <img src={portfolio} alt="portfolio" className="" />
            </div>
            <div className="3xl:col-span-5 py-7 md:py-10 flex items-center justify-center flex-col bg-white px-5 md:px-7 rounded">
                <h3 className="text-xl xs:text-2xl md:text-3xl font-semibold mb-3 md:mb-5">Request for Approval to Begin Project Discussion</h3>
                <p className="sm:text-lg mb-5 md:mb-10 text-primaryTextColor">I’d like to request your approval to start discussing the details for your real estate property evaluation website. This will ensure we align the design and features with your vision. Please let me know when we can begin!</p>
                <button onClick={() => setStep(step + 1)} className="bg-primaryBgColor transition-all hover:bg-transparent hover:text-primaryBgColor border-2 duration-500 border-primaryBgColor text-white font-medium block w-full rounded-lg py-2 md:py-3 shadow"><Link>Get Started</Link></button>
            </div>
        </div>
    );
};

export default StepOne;