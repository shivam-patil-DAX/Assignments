import './App.css';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import {BrowserRouter as Router , Route, Routes,Link} from  'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>List of blogs</h1>
        <Routes>
          <Route path='/' element={<Blogs />}></Route>
          <Route path='/addblog' element={<AddBlog />}></Route>
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;