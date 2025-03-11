import { FaStar } from "react-icons/fa";

const Review = ({ review }) => {
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className="bg-white w-full h-full rounded-lg p-5 shadow">
            <div className="flex gap-3 mb-4 items-center">
                <img src={`${import.meta.env.VITE_SITE_URL}/${review?.image}`} alt="user_profile" className="w-12 h-12 rounded-full object-cover" />
                <div className="">
                    <h4 className="font-grotesk font-semibold text-xl">{review?.name}</h4>
                    <span className="font-grotesk text-headingTextColor">{review?.designation}</span>
                </div>
            </div>
            <p className="mb-2 sm:text-lg text-primaryTextColor">{review?.message}</p>
            <div className="flex gap-1 items-center flex-wrap">
                {Array.from({ length: review?.reting || 0 }, (_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                ))}
            </div>
        </div>
    );
};

export default Review;