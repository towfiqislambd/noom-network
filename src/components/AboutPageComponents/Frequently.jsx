import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useFaqInfo } from '@/hooks/cms.queries';

const Frequently = () => {
  const { data: faqData } = useFaqInfo();
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
            {faqData?.map((item) => (
              <AccordionItem key={item?.id} value={`item-${item?.id}`}>
                <AccordionTrigger className="text-lg sm:text-xl">
                  {item?.question}
                </AccordionTrigger>
                <AccordionContent>${item?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
