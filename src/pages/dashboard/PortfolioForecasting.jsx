import AnnualReturnCharts from "@/components/dashboardComponents/charts/AnnualReturnCharts";
import { useState } from "react";

const PortfolioForecasting = () => {
    const [activeBar, setActiveBar] = useState('one');
    return (
        <section className="bg-white shadow-lg rounded-lg p-3 lg:p-10">
            <h3 className="font-semibold text-[22px] mb-5 text-headingTextColor">Portfolio Forecasting</h3>
            <div className="grid lg:grid-cols-12 gap-5 3xl:gap-8">
                <div className="lg:col-span-2 flex flex-col md:flex-row lg:flex-col self-start border rounded border-primaryBgColor">
                    <button onClick={() => setActiveBar('one')} className={`grid border border-primaryBgColor place-items-center font-medium text-headingTextColor w-full h-[50px] md:h-[100px] 3xl:h-[130px] ${activeBar === 'one' && 'bg-primaryBgColor text-white'}`}>
                        <span>Year 1</span>
                    </button>
                    <button onClick={() => setActiveBar('two')} className={`grid place-items-center border border-primaryBgColor font-medium text-headingTextColor w-full h-[50px] md:h-[100px] 3xl:h-[130px] ${activeBar === 'two' && 'bg-primaryBgColor text-white'}`}>
                        <span>Year 2</span>
                    </button>
                    <button onClick={() => setActiveBar('three')} className={`grid place-items-center border border-primaryBgColor font-medium text-headingTextColor w-full h-[50px] md:h-[100px] 3xl:h-[130px] ${activeBar === 'three' && 'bg-primaryBgColor text-white'}`}>
                        <span>Year 3</span>
                    </button>
                    <button onClick={() => setActiveBar('four')} className={`grid place-items-center border border-primaryBgColor font-medium text-headingTextColor w-full h-[50px] md:h-[100px] 3xl:h-[130px] ${activeBar === 'four' && 'bg-primaryBgColor text-white'}`}>
                        <span>Year 4</span>
                    </button>
                    <button onClick={() => setActiveBar('five')} className={`grid place-items-center border border-primaryBgColor font-medium text-headingTextColor w-full h-[50px] md:h-[100px] 3xl:h-[130px] ${activeBar === 'five' && 'bg-primaryBgColor text-white'}`}>
                        <span>Year 30</span>
                    </button>
                </div>
                <div className="lg:col-span-10 grid 3xl:grid-cols-12 gap-10 rounded shadow bg-[#F2F4F7] p-5 md:p-10">
                    <div className="3xl:col-span-5">
                        <h3 className="font-semibold text-[20px] md:text-[22px] mb-3 text-headingTextColor">Forecasting Overview</h3>
                        <div className="grid gap-5 md:grid-cols-2">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <div className="">
                                    <p className="text-headingTextColor font-medium text-lg">
                                        {
                                            activeBar === 'two' ? '1.60 %' : '22.08%'
                                        }
                                    </p>
                                    <p className="text-primaryTextColor">Loan to Value</p>
                                </div>
                                <div className="">
                                    <p className="text-[#118D57] font-medium text-lg">1.60 %</p>
                                    <p className="text-[#118D57]">
                                        {
                                            activeBar === 'three' ? 'Portfolio COC' : 'COC'
                                        }

                                    </p>
                                </div>
                                <div className="">
                                    <p className="text-headingTextColor font-medium text-lg">$20 ,000</p>
                                    <p className="text-primaryTextColor">Projected Equity</p>
                                </div>
                                <div className="">
                                    <p className="text-headingTextColor font-medium text-lg">
                                        {
                                            activeBar === 'four' ? '$20 ,000' : '$60 ,000'
                                        }
                                    </p>
                                    <p className="text-primaryTextColor">Gross Income</p>
                                </div>
                                <div className="">
                                    <p className="text-headingTextColor font-medium text-lg">$20 ,000</p>
                                    <p className="text-primaryTextColor">Annual NOI</p>
                                </div>
                                <div className="">
                                    <p className="text-headingTextColor font-medium text-lg">$20 ,000</p>
                                    <p className="text-primaryTextColor">Projected Cash Flow</p>
                                </div>
                            </div>
                            {/* Right Content */}
                            <div className="space-y-8">
                                <div className="">
                                    <p className="text-headingTextColor font-medium text-lg">$20 ,000</p>
                                    <p className="text-primaryTextColor">Projected Value</p>
                                </div>
                                <div className="">
                                    <p className="text-[#118D57] font-medium text-lg">$20 ,000</p>
                                    <p className="text-[#118D57]">
                                        {
                                            activeBar === 'two' ? 'Cap Rate' : ' Avg.Cap Rate'
                                        }
                                    </p>
                                </div>
                                <div className="">
                                    <p className="text-headingTextColor font-medium text-lg">1.60 %</p>
                                    <p className="text-primaryTextColor">Return On Equity</p>
                                </div>
                                <div className="">
                                    <p className="text-headingTextColor font-medium text-lg">1.60 %</p>
                                    <p className="text-primaryTextColor">Rent Multiplier</p>
                                </div>
                                <div className="">
                                    <p className="text-headingTextColor font-medium text-lg">1.60 %</p>
                                    <p className="text-primaryTextColor">Loan Balance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="3xl:col-span-7">
                        <h3 className="font-semibold text-[20px] md:text-[22px] mb-5 text-headingTextColor">Current Annual Return Breakdown</h3>
                        <AnnualReturnCharts />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioForecasting;