import './App.css';
import Announcements from './pages/announcements/Announcements';
import Blogs from './pages/blogs/Blogs';
import Cart from './pages/cart/Cart';
import Courses from './pages/courses/Courses';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Mentor from './pages/mentor/Mentor';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mentor' element={<Mentor/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/announcements' element={<Announcements/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
