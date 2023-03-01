import logo from './logo.svg';
import './App.css';
import MyModal from './Components/MyModal/MyModal';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './Components/Products';


function App() {
  return (
    <div className="App">
    <div className='d-flex justify-content-end'>
    <div className='d-flex justify-content-center'>
    <MyModal></MyModal>
    <ActionBtn></ActionBtn>
    </div>
    </div>
     <div className='showDB'>
         <div className='showDb2'>
         <Products></Products>
         </div>
     </div>

    
    </div>
  );
}

export default App;
