import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.scss';
import{Home} from "./components/Home.jsx"
import Header from "./components/Header/Header"
function App() {
  return <Router>
    <Header/>
  <Routes>
    <Route path = "/" element = {<Home/>} />
    </Routes>
    </Router>
}


export default App;
