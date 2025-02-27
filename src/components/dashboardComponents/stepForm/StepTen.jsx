import { Link } from "react-router-dom";
import AnnualReturnCharts from "../charts/AnnualReturnCharts";

const StepTen = ({ step, setStep }) => {
    const handlePrevStep = () => {
        setStep(step - 9)
    }
    return (
        <div className="bg-white rounded-xl shadow p-3 md:p-5 lg:p-10">
            <div className="grid 3xl:grid-cols-7 gap-5 lg:gap-8">
                {/* Contents */}
                <div className="3xl:col-span-3 bg-[#F2F4F7] p-5 md:p-10 rounded">
                    <h3 className="font-semibold text-xl md:text-[22px] mb-5 md:mb-7 text-headingTextColor">860 Villa St, Mountain View, California</h3>
                    <div className="grid md:grid-cols-2 gap-5">
                        {/* Left Content */}
                        <div className="space-y-5 md:space-y-8">
                            <div className="">
                                <p className="text-primaryTextColor">Current value</p>
                                <p className="text-headingTextColor font-medium text-lg">$300,000</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Loan balance</p>
                                <p className="text-headingTextColor font-medium text-lg">$100,000</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Annul cashflow</p>
                                <p className="text-headingTextColor font-medium text-lg">$200,000</p>
                            </div>
                            <div className="">
                                <p className="text-[#118D57]">Return on equity</p>
                                <p className="text-[#118D57] font-medium text-lg">$300,000</p>
                            </div>
                            <div className="">
                                <p className="text-[#118D57]">Cash on cash</p>
                                <p className="text-[#118D57] font-medium text-lg">$100,000</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Rent multiplier</p>
                                <p className="text-headingTextColor font-medium text-lg">1.7%</p>
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className="space-y-5 md:space-y-8">
                            <div className="">
                                <p className="text-primaryTextColor">Monthly Rent</p>
                                <p className="text-headingTextColor font-medium text-lg">$20,000</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Equity real estate net worth</p>
                                <p className="text-headingTextColor font-medium text-lg">$20,000</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Annul NOI</p>
                                <p className="text-headingTextColor font-medium text-lg">$30,000</p>
                            </div>
                            <div className="">
                                <p className="text-[#118D57]">Loan to Value</p>
                                <p className="text-[#118D57] font-medium text-lg">$20,000</p>
                            </div>
                            <div className="">
                                <p className="text-[#118D57]">CAP Rate</p>
                                <p className="text-[#118D57] font-medium text-lg">$30,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Charts */}
                <div className="3xl:col-span-4 bg-[#F2F4F7] p-3 md:p-10 rounded">
                    <h3 className="font-semibold text-lg md:text-[22px] mb-5 text-headingTextColor">Current Annual Return Breakdown</h3>
                    <AnnualReturnCharts />
                </div>
            </div>
            <div className="grid 3xl:grid-cols-7 3xl:gap-8">
                <div className="3xl:col-span-3"></div>
                <div className="3xl:col-span-4 md:mx-7">
                    <button onClick={handlePrevStep} className="py-2 md:py-3 mt-6 block w-full rounded-lg text-center font-medium md:text-lg text-[#025397] border border-[#025397] ">Add Next Property</button>
                    <Link to='/dashboard/myPortfolio/projectCashFlow'>
                        <button className="py-2 md:py-3 mt-4 3xl:mt-6 block w-full font-medium rounded-lg border bg-primaryBgColor text-white border-primaryBgColor">View Portfolio</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StepTen;