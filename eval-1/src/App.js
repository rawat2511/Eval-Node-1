
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddAddress } from './Components/AddAddress';
import { Address } from './Components/Address';

function App() {
  return (
    <div className="App">
      <h1>ADDRESSES</h1>
      <Link to="/addresses/create">ADD ADDRESS</Link>
      <Routes>
        <Route path='/addresses' element={ <Address /> } />
        <Route path='/addresses/create' element={ <AddAddress /> } />
      </Routes>
    </div>
  );
}

export default App;
