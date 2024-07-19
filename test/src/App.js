
import './App.css';
import Navbar from "./Navbar"
import About from "./Components/About"
import Blog from "./Components/Blog"

import Clientfeedback from "./Components/Clientfeedback";
import Followinsta from "./Components/Followinsta";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Contact from "./pages/Contact"

function App() {
<BrowserRouter>
    <Routes>

        <Route path="/" component={<Contact/>}/>
    </Routes>
</BrowserRouter>


    return (
      <>




<Navbar/>
          <About/>
    <Clientfeedback/>
          <Blog/>
          <Followinsta/>
      </>
  );
}

export default App;
