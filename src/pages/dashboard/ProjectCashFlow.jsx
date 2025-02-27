import LoanCharts from "@/components/dashboardComponents/charts/LoanCharts";
import NetWorthCharts from "@/components/dashboardComponents/charts/NetWorthCharts";

const ProjectCashFlow = () => {
    return (
        <section className="">
            {/* Projected Monthly Income and Loan part */}
            <div className="grid 3xl:grid-cols-12 gap-5 lg:gap-8 mb-5 lg:mb-10">
                {/* Projected Monthly Income */}
                <div className="3xl:col-span-5 bg-white p-5 lg:p-8 rounded shadow-lg">
                    <h3 className="font-semibold text-lg md:text-[22px] mb-3 text-headingTextColor">Projected Monthly Income</h3>
                    <p className="text-[#4F4F4F] mb-7">This is the estimated income and expenses generated during typical month for this property</p>
                    <div className="grid mb-5 lg:grid-cols-12">
                        <p className="lg:col-span-5 font-medium text-headingTextColor text-xl">Income</p>
                        <div className="lg:col-span-7">
                            <p className="flex justify-between items-center border-b mb-3 pb-2 border-gray-700">
                                <span className="text-primaryTextColor font-medium">Rent</span>
                                <span>$ 20,000</span>
                            </p>
                            <p className="flex pb-2 justify-between items-center border-b border-gray-700">
                                <span className="text-primaryTextColor font-medium">Other Income</span>
                                <span>$ 5,000</span>
                            </p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2">
                        <div className="">
                            <p className="font-medium text-headingTextColor text-xl">Expenses</p>
                        </div>
                        <div className="">
                            <p className="flex justify-between items-center border-b mb-5 pb-2 border-gray-400">
                                <span className="text-primaryTextColor font-medium">Property Tax</span>
                                <span>-$ 20,000</span>
                            </p>
                            <p className="flex justify-between items-center border-b mb-5 pb-2 border-gray-400">
                                <span className="text-primaryTextColor font-medium">Property Insurance</span>
                                <span>-$ 5,000</span>
                            </p>
                            <p className="flex justify-between items-center border-b mb-5 pb-2 border-gray-400">
                                <span className="text-primaryTextColor font-medium">Property Management</span>
                                <span>-$ 5,000</span>
                            </p>
                            <p className="flex justify-between items-center border-b mb-5 pb-2 border-gray-400">
                                <span className="text-primaryTextColor font-medium">Maintenance</span>
                                <span>-$ 5,000</span>
                            </p>
                            <p className="flex justify-between items-center border-b mb-5 pb-2 border-gray-400">
                                <span className="text-primaryTextColor font-medium">Utilities</span>
                                <span>-$ 5,000</span>
                            </p>
                            <p className="flex justify-between items-center border-b mb-5 pb-2 border-gray-400">
                                <span className="text-primaryTextColor font-medium">Other Expenses</span>
                                <span>-$ 15,000</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-3  text-primaryBgColor">
                        <p className="flex justify-between items-center pb-2">
                            <span className="font-medium">Net Operating Income</span>
                            <span>$ 15,000</span>
                        </p>
                        <p className="flex justify-between items-center pb-2">
                            <span className="font-medium">Loan Payment</span>
                            <span>-$ 500</span>
                        </p>
                        <p className="flex justify-between items-center mb-2 pb-2">
                            <span className="font-medium">Loan PMI</span>
                            <span>-$ 200</span>
                        </p>
                    </div>
                    <button className="font-semibold md:text-lg text-white bg-primaryBgColor rounded-lg w-full md:py-3 py-2 flex justify-between items-center px-3">
                        <span>Cash Flow</span>
                        <span>$ 222,000</span>
                    </button>
                </div>
                {/* Loan */}
                <div className="3xl:col-span-7 bg-white px-5 lg:px-28 py-5 lg:py-16 3xl:py-20 rounded shadow-lg">
                    <h3 className="font-semibold text-[22px] mb-3 text-headingTextColor">Loan</h3>
                    <p className="text-[#4F4F4F]">This is a summary of the loan for this property</p>
                    <LoanCharts />
                    <div className="grid md:grid-cols-2 gap-5 md:gap-10 mt-10">
                        {/* Left Content */}
                        <div className="space-y-5 md:space-y-8">
                            <div className="">
                                <p className="text-headingTextColor font-medium text-lg">$300,000</p>
                                <p className="text-primaryTextColor">Initial Loan Balance </p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Total Years</p>
                                <p className="text-headingTextColor font-medium text-lg">30 Years</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Interest Rate</p>
                                <p className="text-headingTextColor font-medium text-lg">2.5%</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Extra Payment</p>
                                <p className="text-headingTextColor font-medium text-lg">$2,000</p>
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className="space-y-5 md:space-y-8">
                            <div className="">
                                <p className="text-headingTextColor font-medium text-lg">$1,000</p>
                                <p className="text-primaryTextColor">Loan Fully Prepaid</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Remaining Years</p>
                                <p className="text-headingTextColor font-medium text-lg">13 Years 5 Months</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">Monthly Payment</p>
                                <p className="text-headingTextColor font-medium text-lg">$5,000</p>
                            </div>
                            <div className="">
                                <p className="text-primaryTextColor">PMI</p>
                                <p className="text-headingTextColor font-medium text-lg">$500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Project Net Worth */}
            <div className="bg-white p-5 lg:px-10 lg:py-8 xl:px-14 xl:py-10 rounded shadow-lg">
                <h3 className="font-semibold text-[22px] mb-5 text-headingTextColor">Project Net Worth</h3>
                <div className="">
                    <NetWorthCharts />
                </div>
            </div>
        </section>
    );
};

export default ProjectCashFlow;