import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

// Custom SVG Icon (replace this with any icon you prefer)
const CustomIconClose = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] ${className}`}
    viewBox="0 0 80 80"
    fill="none"
  >
    <circle cx="40" cy="40" r="40" fill="#2A6EA3" />
    <path
      d="M51 28.9999L29.0455 51.0454M51.0455 50.9999L29 29.0454"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CustomIconOpen = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] ${className}`}
    viewBox="0 0 50 50"
    fill="#FFFFFF"
  >
    <g clipPath="url(#clip0_23_878)">
      <path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" />
      <path
        d="M25 16V34.5"
        stroke="#786F77"
        strokeWidth="1.48"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.5 25H16"
        stroke="#786F77"
        strokeWidth="1.48"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_23_878">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-[#34B4B3]', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            'accordion-trigger grid grid-cols-12 w-full items-center justify-between py-4 transition-all text-left [&[data-state=open]>svg]:rotate-180 text-black font-workSans text-[20px] font-medium leading-[36px]',
            className
          )}
          {...props}
        >
          <div className="col-span-10">{children}</div>
          <div className="col-span-2 justify-self-end">
            <CustomIconOpen className="accordion-open" />
            <CustomIconClose className="accordion-close" />
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-[#786F77] font-workSans text-[16px] font-medium leading-[25.2px]"
      {...props}
    >
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
