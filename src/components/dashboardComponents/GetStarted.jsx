import { Link } from "react-router-dom";
import portfolio from "../../assets/portfolio.png"

const GetStarted = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            <div className="grid-cols-2">
                <h2>Welcome Mosharaf</h2>
                <img src={portfolio} alt="portfolio" />
            </div>
            <div className="grid-cols-1">
                <h3 className="">Request for Approval to Begin Project Discussion</h3>
                <p className="">I’d like to request your approval to start discussing the details for your real estate property evaluation website. This will ensure we align the design and features with your vision. Please let me know when we can begin!</p>
                <button className=""><Link>Get Started</Link></button>
            </div>
        </div>
    );
};

export default GetStarted;