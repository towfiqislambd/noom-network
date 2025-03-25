import { useState } from 'react';
import StepOne from '@/components/dashboardComponents/stepForm/StepOne';
import StepThree from '@/components/dashboardComponents/stepForm/StepThree';
import StepTwo from '@/components/dashboardComponents/stepForm/StepTwo';
import StepSix from '@/components/dashboardComponents/stepForm/StepSix';
import StepSeven from '@/components/dashboardComponents/stepForm/StepSeven';
import StepEight from '@/components/dashboardComponents/stepForm/StepEight';
import StepNine from '@/components/dashboardComponents/stepForm/StepNine';
import StepTen from '@/components/dashboardComponents/stepForm/StepTen';
import StepFive from '@/components/dashboardComponents/stepForm/StepFive';

const MyPortfolio = () => {
  const [step, setStep] = useState(2);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allFormData, setAllFormData] = useState({});

  console.log(allFormData);
  //   console.log(Object.keys(allFormData).length);

  const renderStep = () => {
    if (step === 2) {
      return <StepOne step={step} setStep={setStep} />;
    }
    if (step === 3) {
      return (
        <StepTwo
          allFormData={allFormData}
          setAllFormData={setAllFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    if (step === 4) {
      return (
        <StepThree
          allFormData={allFormData}
          setAllFormData={setAllFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    // if (step === 5) {
    //   return (
    //     <StepFour
    //       allFormData={allFormData}
    //       setAllFormData={setAllFormData}
    //       step={step}
    //       setStep={setStep}
    //     />
    //   );
    // }
    if (step === 5) {
      return (
        <StepFive
          allFormData={allFormData}
          setAllFormData={setAllFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    if (step === 6) {
      return (
        <StepSix
          allFormData={allFormData}
          setAllFormData={setAllFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    if (step === 7) {
      return (
        <StepSeven
          allFormData={allFormData}
          setAllFormData={setAllFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    if (step === 8) {
      return (
        <StepEight
          allFormData={allFormData}
          setAllFormData={setAllFormData}
          step={step}
          totalIncome={totalIncome}
          setTotalIncome={setTotalIncome}
          setStep={setStep}
        />
      );
    }
    if (step === 9) {
      return (
        <StepNine
          totalIncome={totalIncome}
          allFormData={allFormData}
          setAllFormData={setAllFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    if (step === 10) {
      return <StepTen step={step} setStep={setStep} />;
    }
  };

  return <div className="h-full">{renderStep()}</div>;
};

export default MyPortfolio;
