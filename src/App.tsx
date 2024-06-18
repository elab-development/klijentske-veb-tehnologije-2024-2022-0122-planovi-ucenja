import './App.css';
import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  let router = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={ <NavBar/>}>
        
      </Route>
    ])
  );

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  );
}

export default App
