import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
<Routes>
  {/*
  <Route path="주소규칙" element={보여줄 컴포넌트 JSX} /> 
  */}
  <Route path="/" element={<Home />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/profiles/:username" element={<Profile />}></Route>
</Routes>
  );
}

export default App;
