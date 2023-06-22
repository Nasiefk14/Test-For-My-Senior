import Navbar from "./components/Navbar";
import ButtonShowcase from "./pages/ButtonShowcase";

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/task-one" element={<ButtonShowcase />}/>
    </Routes>
    </>
  );
}

export default App;
