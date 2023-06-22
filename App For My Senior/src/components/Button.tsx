interface IButton {
  variation: string;
}

const Button = (props: IButton) => {
    const variation = props.variation;
    const firstLetter = variation.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = variation.slice(1)
    const updatedProp = firstLetterCap + remainingLetters
  const handleClick = () => {
    if (updatedProp === undefined) {
      alert(`An Unknown Button Was Clicked!`);
    } else {
      alert(`${updatedProp} Button Was Clicked!`);
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`${
          props.variation.toLowerCase() === "primary"
            ? "bg-[#0d6efd]"
            : "bg-gray-300"
        }
        ${
          props.variation.toLowerCase() === "secondary"
            ? "bg-[#6c757d]"
            : "bg-gray-300"
        }
        ${
          props.variation.toLowerCase() === "warning"
            ? "bg-[#ffc107]"
            : "bg-gray-300"
        }
        ${
          props.variation.toLowerCase() === "danger"
            ? "bg-[#dc3545]"
            : "bg-gray-300"
        }
         bg-blue-300 w-[150px] h-[50px] border-2 border-gray-950 text-2xl m-2 font-bold rounded-lg `}
      >
        Our Button!
      </button>
    </>
  );
};

export default Button;
