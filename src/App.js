import logo from './logo.svg';
import './App.css';
import MyModal from './Components/MyModal/MyModal';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './Components/Products';
import Login from './Components/Login/Login';
import { Button } from 'bootstrap';


function App() {
  return (
    <div className="App">
     <MyModal></MyModal>
     <div className='showDB'>
         <div className='showDb2'>
          
      
         {/* <Login></Login> */}


        
           <Products></Products>
         </div>
     </div>
    </div>
  );
}

export default App;
