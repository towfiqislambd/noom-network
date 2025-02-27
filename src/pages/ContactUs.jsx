import GetInTouch from "@/components/contactPageComponents/GetInTouch";
import SendMessageFrom from "@/components/contactPageComponents/SendMessageFrom";

const ContactUs = () => {
    return (
        <section id="contactUs" className="pb-20">
            <div className="container max-w-[1200px]">
                <GetInTouch />
                <SendMessageFrom />
            </div>
        </section>
    );
};

export default ContactUs;