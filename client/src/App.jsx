import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';


export default function App() {
  return  <BrowserRouter >
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/profile"element={<Profile/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/singn-up"element={<SignUp/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
    </Routes>
  </BrowserRouter>;
  
}
