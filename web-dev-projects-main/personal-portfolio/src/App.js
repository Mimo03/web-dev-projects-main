import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Upload from './pages/Upload';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="*" element={<div>Hello</div>} />
      </Routes>
    </BrowserRouter>
  );
}