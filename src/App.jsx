import './App.css'
import Homepage from './Pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Router basename='/Hackathon-2025'>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </Router>
  )
}

export default App
