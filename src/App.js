import NewUser from './NewUser';
import Homepage from './Homepage';
import Login from './Login';
import Notes from './Notes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/create' element={<NewUser/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/notes' element={<Notes/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
