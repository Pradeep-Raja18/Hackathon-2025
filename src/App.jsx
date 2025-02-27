import './App.css'
import Homepage from './Pages/Homepage'
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </HashRouter>
  )
}

export default App
