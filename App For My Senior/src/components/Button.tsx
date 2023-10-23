interface IButton {
  variation: string;
  buttonText: string
}

const Button = (props: IButton) => {
  const variationType = props.variation;
  const buttonText = props.buttonText;
  const handleClick = () => {
    const validVariations = ["primary", "secondary", "warning", "danger"];
    if (!validVariations.includes(variationType.toLowerCase())) {
      alert(`An Unknown Button Was Clicked!`);
    } else {
      alert(`${variationType} Button Was Clicked!`);
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`${
          variationType.toLowerCase() === "primary"
            ? "bg-[#0d6efd]"
            : variationType.toLowerCase() === "secondary"
            ? "bg-[#6c757d]"
            : variationType.toLowerCase() === "warning"
            ? "bg-[#ffc107]"
            : variationType.toLowerCase() === "danger"
            ? "bg-[#dc3545]"
            : "bg-gray-300"
        } w-[150px] h-[50px] border-2 border-gray-950 text-2xl m-2 font-bold rounded-lg `}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
