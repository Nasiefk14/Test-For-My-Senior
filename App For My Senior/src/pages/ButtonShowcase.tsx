import Button from "../components/Button"

const ButtonShowcase = () => {
  return (
    <div className="w-[60%] h-screen m-auto pt-[100px] text-center">
        <h1 className="text-center text-3xl font-bold mb-5">Here is where you can show buttons using there variation prop</h1>
        <Button variation={"primary"} buttonText={"Primary"}/>
        <Button buttonText={"Test"}/>
        <Button variation={"Warning"} buttonText={"Warning"}  />
        <Button variation={"danger"} buttonText={"Danger"} />
    </div>
  )
}

export default ButtonShowcase