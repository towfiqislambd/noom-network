import p1 from "../../assets/icons/p1.png"
import p2 from "../../assets/icons/p2.png"

const PriceBox = () => {
    return (
        <>
            <h3 className="text-2xl font-semibold mb-3">Billing & Subscription </h3>
            <p className="text-primaryTextColor">Keep track of your subscription details, update your billing information and control your account payment</p>
            <div className="flex flex-col lg:flex-row gap-5 mt-10 items-center justify-center mb-14">
                <div className="w-full space-y-3 border rounded-xl p-4 md:p-6 bg-white border-primaryBgColor">
                    <span className="font-medium text-xl">Starter Plan</span>
                    <p className="flex items-center pb-3">
                        <span className="text-3xl font-semibold">$5.00</span>
                        <span className="text-sm text-primaryTextColor">/monthly</span>
                    </p>
                    <button className="block hover:bg-primaryBgColor duration-300 hover:text-white border-gray-400 font-medium w-full py-2 md:py-3 border rounded-lg shadow-sm">Subscribe</button>
                    <ul className="space-y-4 pt-3">
                        <li className="flex items-center gap-2">
                            <img src={p1} alt="p1" />
                            <span className="text-primaryTextColor text-base">Limited Property Listings</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={p1} alt="p1" />
                            <span className="text-primaryTextColor text-base">Basic Search Filters</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={p1} alt="p1" />
                            <span className="text-primaryTextColor text-base">View Property Insights</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={p1} alt="p1" />
                            <span className="text-primaryTextColor text-base">Contact Support</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full space-y-3 border rounded-xl p-4 md:p-6 bg-primaryBgColor text-white border-primaryBgColor">
                    <span className="font-medium text-xl">Standard Plan</span>
                    <p className="flex items-center pb-3">
                        <span className="text-3xl font-semibold">$50.00</span>
                        <span className="text-sm text-[#EBEBEB]">/yearly</span>
                    </p>
                    <button className="block border-gray-400 bg-white text-gray-800 font-semibold w-full py-2 md:py-3 border rounded-lg shadow-sm">Subscribe</button>
                    <ul className="space-y-4 pt-3">
                        <li className="flex items-center gap-2">
                            <img src={p2} alt="p1" />
                            <span className="text-[#EBEBEB] text-base">Limited Property Listings</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={p2} alt="p1" />
                            <span className="text-[#EBEBEB] text-base">Basic Search Filters</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={p2} alt="p1" />
                            <span className="text-[#EBEBEB] text-base">View Property Insights</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={p2} alt="p1" />
                            <span className="text-[#EBEBEB] text-base">Contact Support</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PriceBox;