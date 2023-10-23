import { IButton } from "../interfaces/interfaces";

const Button = (props: IButton) => {
  const validVariations = ["primary", "secondary", "warning", "danger"];
  const variationType = props.variation || "primary";
  const buttonText = props.buttonText;

  const handleClick = () => {
    if (!validVariations.includes(variationType.toLowerCase())) {
      alert(`An Unknown Button Was Clicked!`);
    } else {
      alert(`${variationType} Button Was Clicked!`);
    }
  };

  const buttonClass = `${
    variationType.toLowerCase() === "primary"
      ? "bg-[#0d6efd] bg-opacity-80  hover:bg-opacity-100 hover:text-white"
      : variationType.toLowerCase() === "secondary"
      ? "bg-[#6c757d] bg-opacity-80  hover:bg-opacity-100 hover:text-white"
      : variationType.toLowerCase() === "warning"
      ? "bg-[#ffc107] bg-opacity-80  hover:bg-opacity-100 hover:text-white"
      : variationType.toLowerCase() === "danger"
      ? "bg-[#dc3545] bg-opacity-80  hover:bg-opacity-100 hover:text-white"
      : "bg-gray-300"
  } w-[150px] h-[50px] border-2 border-gray-950 text-2xl m-2 font-bold rounded-lg text-black`;

  return (
    <button onClick={handleClick} className={buttonClass}>
      {buttonText}
    </button>
  );
};

export default Button;
