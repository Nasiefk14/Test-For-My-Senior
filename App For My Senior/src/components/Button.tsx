import { ButtonVariation, IButton } from '../types/index';

const Button = (props: IButton) => {
  const buttonText = props.buttonText;
  const variationType = props.variation || ButtonVariation.Primary;

  const handleClick = () => {
    if (!(variationType in ButtonVariation)) {
      alert(`An Unknown Button Was Clicked!`);
    } else {
      alert(`${variationType} Button Was Clicked!`);
    }
  };

  let buttonClass = "";
  switch (variationType.toLowerCase()) {
    case ButtonVariation.Primary: {
      buttonClass = "bg-[#0d6efd]";
      break;
    }
    case ButtonVariation.Secondary: {
      buttonClass = "bg-[#6c757d]";
      break;
    }
    case ButtonVariation.Warning: {
      buttonClass = "bg-[#ffc107]";
      break;
    }
    case ButtonVariation.Danger: {
      buttonClass = "bg-[#dc3545]";
      break;
    }
    default: {
      buttonClass = "bg-gray-300";
      break;
    }
  }
  buttonClass += " w-[150px] h-[50px] border-2 border-gray-950 text-2xl m-2 font-bold rounded-lg text-white  bg-opacity-100  hover:bg-opacity-80 hover:text-black";

  return (
    <button onClick={handleClick} className={buttonClass}>
      {buttonText}
    </button>
  );
};

export default Button;
