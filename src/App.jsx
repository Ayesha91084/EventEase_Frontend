import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './login';
import Signup from './Signup';
import AdminDashboard from './Admindashboard';
import Vendors from './Vendors';

import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Vendors />} />

        <Route path="/admin-dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/decorators" element={
          <ProtectedRoute>
          </ProtectedRoute>
        } />

        <Route path="/vendors" element={
          <ProtectedRoute>
            <Vendors />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


/*import Decorators from "./Decorators";
function App() {
  return(
   <div className="App">
    <Decorators/>
   </div>
  );

  
}
export default App;
import Photographer from './Photographer';
function App(){
  return(
    <div className="App">
      <Photographer/>
    </div>
  )
}
export default App;*/