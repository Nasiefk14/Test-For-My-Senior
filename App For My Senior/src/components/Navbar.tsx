import task from '../assets/tasks.png'

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#cee0f3] ">
        <div className="logo">
          <img src={task} alt="None" className="w-24" />
        </div>
        <ul className="flex">
          <li className="hover:text-[#5CDB95] w-26 m-5 text-1xl">
            <a href={`/task-one`}>Task 1</a>
          </li>
          <li className="hover:text-[#5CDB95] w-26 m-5 text-1xl">
            <a href={`/task-2`}>Task 2</a>
          </li>
          <li className="hover:text-[#5CDB95] w-26 m-5 text-1xl">
            <a href={`/task-3`}>Task 3</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
