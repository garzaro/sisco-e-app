import { useState } from 'react'
import '../App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import {Home, Route} from "lucide-react";
import Dashboard from "./pages/Dashboard.jsx";

function App() {

  return (
    <BrowserRouter>

        <Route>
            <Route path="/" element={<Dashboard />} />
        </Route>
      <Navbar />
    </BrowserRouter>
  )
}

export default App
