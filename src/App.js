import './App.css';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from './layout/main'

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[{
        
      }]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
