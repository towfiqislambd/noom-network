import Review from "./Review";
const testimonials = [
    {
        id: 1,
        user_profile: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "John Doe",
        user_role: "Digital Marketer",
        desc: "This platform has completely transformed our marketing strategy. Highly recommended!"
    },
    {
        id: 2,
        user_profile: "https://randomuser.me/api/portraits/women/2.jpg",
        username: "Sarah Smith",
        user_role: "Project Manager",
        desc: "Managing projects has never been easier. The tools provided are simply top-notch."
    },
    {
        id: 3,
        user_profile: "https://randomuser.me/api/portraits/men/3.jpg",
        username: "Michael Johnson",
        user_role: "Software Engineer",
        desc: "A fantastic experience! The UX and workflow automation make my job so much easier."
    },
    {
        id: 4,
        user_profile: "https://randomuser.me/api/portraits/women/4.jpg",
        username: "Emily Davis",
        user_role: "Content Creator",
        desc: "I love how intuitive the platform is. It helps me create engaging content effortlessly!"
    },
    {
        id: 5,
        user_profile: "https://randomuser.me/api/portraits/men/5.jpg",
        username: "David Martinez",
        user_role: "Entrepreneur",
        desc: "This tool has been a game-changer for my startup. Excellent customer support as well!"
    },
    {
        id: 6,
        user_profile: "https://randomuser.me/api/portraits/women/6.jpg",
        username: "Sophia Wilson",
        user_role: "UX Designer",
        desc: "The design and usability of this platform are outstanding. I can’t recommend it enough!"
    },
    {
        id: 7,
        user_profile: "https://randomuser.me/api/portraits/men/7.jpg",
        username: "James Brown",
        user_role: "SEO Specialist",
        desc: "The analytics and SEO tools here are fantastic. I’ve seen a huge improvement in rankings."
    },
    {
        id: 8,
        user_profile: "https://randomuser.me/api/portraits/women/8.jpg",
        username: "Olivia White",
        user_role: "Freelance Writer",
        desc: "A must-have for freelancers! It keeps everything organized and efficient."
    }
];


const Testimonial = () => {
    return (
        <section id="testimonial" className="pb-20">
            <div className="container">
                <div className='mb-10 lg:mb-16'>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-headingTextColor mb-2 ${sectionTitleClass'>What Our Clients Say</h2>
                    <p className='max-w-[400px] xs:text-lg text-[#101828] ${sectionDescClass}'>Real Experiences, Real Success: Hear from Our Satisfied Clients</p>
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-center">
                    {
                        testimonials.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;