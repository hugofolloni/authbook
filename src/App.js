import NewUser from './NewUser';
import Homepage from './Homepage';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/create' element={<NewUser/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
