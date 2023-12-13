import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './Components/NavBar';
import { Banner }  from './Components/Banner';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;