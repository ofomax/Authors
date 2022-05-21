import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Views/Dashboard';
import AddPage from './Views/AddPage';
import EditPage from './Views/EditPage';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/add" element={<AddPage />}></Route>
          <Route path="/edit/:id" element={<EditPage/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
