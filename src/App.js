import logo from './logo.svg';
import SignUpPage from './Page/SignUpPage';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"


    function App() {
      return (
        <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
        </>
       
      );
    }
export default App;
