import Review from "./Review";

const Testimonial = ({ data }) => {
  return (
    <section id="testimonial" className="pb-20">
      <div className="container">
        <div className="mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-headingTextColor mb-2 ${sectionTitleClass">
            What Our Clients Say
          </h2>
          <p className="max-w-[400px] xs:text-lg text-[#101828] ${sectionDescClass}">
            Real Experiences, Real Success: Hear from Our Satisfied Clients
          </p>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-center">
          {data?.map(review => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
