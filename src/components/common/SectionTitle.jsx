const SectionTitle = ({ sectionTitle, sectionDesc, sectionParent, sectionDescClass, sectionTitleClass }) => {
    return (
        <div className={`text-center mb-10 sm:mb-16 ${sectionParent}`}>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl mx-auto font-semibold text-headingTextColor mb-5 ${sectionTitleClass}`}>{sectionTitle}</h2>
            <p className={`max-w-[564px] xs:text-lg text-[#101828] mx-auto ${sectionDescClass}`}>{sectionDesc}</p>
        </div>
    );
};

export default SectionTitle;