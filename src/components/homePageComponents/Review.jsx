import rating from "../../assets/rating.png"
const Review = ({ review }) => {
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className="bg-white w-full h-full rounded-lg p-5 shadow">
            <div className="flex gap-3 mb-4 items-center">
                <img src={review.user_profile} alt="user_profile" className="w-12 h-12 rounded-full object-cover" />
                <div className="">
                    <h4 className="font-grotesk font-semibold text-xl">{review.username}</h4>
                    <span className="font-grotesk text-headingTextColor">{review.user_role}</span>
                </div>
            </div>
            <p className="mb-2 sm:text-lg text-primaryTextColor">{review.desc}</p>
            <img src={rating} alt="" />
        </div>
    );
};

export default Review;