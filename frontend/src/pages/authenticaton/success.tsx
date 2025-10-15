import React from "react";

interface SuccessProps {
  title?: string;
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Success: React.FC<SuccessProps> = ({
  title = "Success!",
  message = "Your action was completed successfully.",
  buttonText = "Continue",
  onButtonClick,
}) => {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-[24px] w-full max-w-md grid place-items-center text-center gap-4 shadow-lg">
      <p className="font-bold text-3xl">{title}</p>
      <p className="font-medium text-[#718096]">{message}</p>
      <button className="button_v1" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Success;
