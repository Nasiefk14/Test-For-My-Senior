import Button from "../components/Button"

const ButtonShowcase = () => {
  return (
    <div className="w-full h-screen pt-[100px] p-4">
        <h1 className="text-center text-3xl font-bold">Here is where you can show buttons using there variation prop</h1>
        <Button variation={"primary"} />
        <Button variation={"secondary"} />
        <Button variation={"Warning"} />
        <Button variation={"danger"} />
    </div>
  )
}

export default ButtonShowcase