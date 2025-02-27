import { LuDownload } from "react-icons/lu";

const tableData = [
    { id: 1, plan_name: 'Startup plan', amount: 10.00, purchase_date: '2025-02-10', end_date: '25-02-12', status: 'Success' },
    { id: 2, plan_name: 'Startup plan', amount: 20.00, purchase_date: '2024-02-10', end_date: '24-02-12', status: 'Processing' },
    { id: 3, plan_name: 'Startup plan', amount: 10.00, purchase_date: '2025-02-10', end_date: '25-02-12', status: 'Success' },
    { id: 4, plan_name: 'Startup plan', amount: 40.00, purchase_date: '2024-02-10', end_date: '24-02-12', status: 'Success' },
    { id: 5, plan_name: 'Startup plan', amount: 30.00, purchase_date: '2024-02-10', end_date: '24-02-12', status: 'Processing' },
];

const BillingHistory = () => {
    return (
        <div className="overflow-hidden">
            <h3 className="text-2xl font-semibold mb-5">Billing History</h3>
            <div className="overflow-x-auto rounded">
                <table className="min-w-full border rounded">
                    <thead className="bg-[#E6ECFD] font-medium text-primaryTextColor">
                        <tr>
                            <th className="p-3 text-left min-w-[124px]">Plan Name</th>
                            <th className="p-3 text-left">Amount</th>
                            <th className="p-3 text-left min-w-36">Purchase Date</th>
                            <th className="p-3 text-left min-w-28">End Date</th>
                            <th className="p-3 text-left min-w-24">Status</th>
                            <th className="p-3 text-center min-w-16">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data) => (
                            <tr key={data.id} className="hover:bg-[#e6ecfdb0] transition-all duration-300 border-b">
                                <td className="p-3 min-w-[124px]">{data.plan_name}</td>
                                <td className="p-3">${data.amount.toFixed(2)}</td>
                                <td className="p-3 min-w-36">{data.purchase_date}</td>
                                <td className="p-3 min-w-28">{data.end_date}</td>
                                <td className={`p-3 min-w-24 ${data.status === 'Success' ? 'text-[#118D57]' : 'text-[#FEA11F]'}`}>
                                    {data.status}
                                </td>
                                <td className="p-3 min-w-16 flex justify-center">
                                    <LuDownload className="text-xl cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillingHistory;
