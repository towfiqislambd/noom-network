const Feather = ({ feather }) => {
    return (
        <div className="rounded-lg group hover:bg-primaryBgColor border-[#DEF8F7] bg-white px-5 2xl:px-8 py-5 2xl:py-10 text-center space-y-3 border">
            <div className="bg-[#DEF8F7] group-hover:bg-[#fff] rounded-lg grid place-items-center py-7">
                <img src={`${import.meta.env.VITE_SITE_URL}/${feather?.image}`} alt="f1" />
            </div>
            <p className="max-w-[300px] group-hover:text-[#fff] pt-3 mx-auto text-headingTextColor font-semibold text-xl sm:text-2xl">{feather?.title}</p>
            <p className="sm:text-lg 2xl:px-10  group-hover:text-[#fff] text-primaryTextColor">{feather?.description}</p>
        </div>
    );
};

export default Feather;