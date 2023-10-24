
const DebouncedInput = () => {
  return (
    <div className="w-[60%] h-screen m-auto text-center">
        <h1 className="text-center text-3xl font-bold">Insert Your Text Below</h1>
        <h3 className="text-center mb-5">Have Your Test Set After 500ms</h3>

        <input type="text" placeholder="Enter Text..." className="p-[15px] border-2"/>
    </div>
  )
}

export default DebouncedInput
