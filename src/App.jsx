import { useState } from 'react'

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LandingPage from './component/LandingPage';

import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  )
}

export default App
