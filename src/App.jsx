/*import Login from './Login';

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;*/
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Signup from './Signup';
import LoginForm from './login'; 

function App() {
  return (
    <BrowserRouter>     
      <Routes>            
        
        <Route path="/signup" element={<Signup />} />  
        <Route path="/login" element={<LoginForm />} />  
        <Route path="/" element={<Signup />} />          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*import React from "react";
import Signup from "./Pages/signup";

function App() {
  return(
   <div className="App">
    <Signup/>
   </div>
  );

  
}
export default App;
*/

/*import Dashboard from './Admindashboard'; // Ensure path is correct based on your folder structure

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;*/


/*import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
/*import React from "react";
import Vendors from "./Pages/Vendors";

function App() {
  return(
  <div className="App">
    <Vendors/>
  </div>
  );
  
}
export default App;
import Decorators from "./Decorators"

function App() {
  return(
    <div className="App">
      <Decorators/>
    </div>
  );
}
export default App;*/
