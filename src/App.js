import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.scss';
import{Home} from "./components/Home.jsx"
import Header from "./components/Header/Header"
import Signup from "./components/Signup.jsx"
import Login from "./components/Login.jsx"
function App() {
  return <Router>
    <Header/>
  <Routes>
    <Route path = "/register" element={<Signup/>}/>
    <Route path = "/login" element= {<Login/>} />
    <Route path = "/" element = {<Home/>} />
    </Routes>
    </Router>
}


export default App;
