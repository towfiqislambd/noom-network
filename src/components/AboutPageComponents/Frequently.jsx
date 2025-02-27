import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Frequently = () => {
  return (
    <div className="bg-gradient-to-r from-[#EFF6FD] to-[#EBF8F7] via-[#EFF6FD] pb-10">
      <div className="container ">
        <div>
          <h1 className="text-black text-center font-grotesk text-2xl xs:text-3xl md:text-[36px] font-bold xl:leading-[54px] tracking-[-0.72px] mb-3 sm:mb-5">
            Frequently asked questions
          </h1>
          <p className="text-[#707070] font-work-sans text-[18px] font-medium leading-[28px] tracking-normal text-center mb-12">
            We&apos;re happy to answer your questions
          </p>
        </div>
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full border-t border-[#34B4B3]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className='text-lg sm:text-xl'>
                What is the process for buying a property through your platform?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we work with trusted financial partners to help buyers
                secure home loans or mortgages at competitive rates. You can
                explore financing options through our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='text-lg sm:text-xl'>
                Do you assist with financing options for property purchases?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we work with trusted financial partners to help buyers
                secure home loans or mortgages at competitive rates. You can
                explore financing options through our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='text-lg sm:text-xl'>
                Are the property listings on your platform verified?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we work with trusted financial partners to help buyers
                secure home loans or mortgages at competitive rates. You can
                explore financing options through our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className='text-lg sm:text-xl'>
                Can I schedule a property tour online?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we work with trusted financial partners to help buyers
                secure home loans or mortgages at competitive rates. You can
                explore financing options through our platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
