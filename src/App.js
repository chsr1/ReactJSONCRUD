import logo from './logo.svg';
import './App.css';
import EmpListing from './emplisting';
import EmpCreate from './empCreate';
import EmpDetail from './empDetail';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import EmpEdit from './empEdit';

function App() {
  return (
    <div className="App">
            <h1>React JS CRUD operation.</h1>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<EmpListing/>}></Route>
          <Route path = '/posts/create' element = {<EmpCreate/>}></Route>
          <Route path = '/posts/edit/:empID' element = {<EmpEdit/>}></Route>
          <Route path = '/posts/detail/:empID' element = {<EmpDetail/>}></Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;


