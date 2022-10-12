import './App.css';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from './layout/main'
import Topics from "./components/Topics/topics"
import AllQuiz from "./components/quiz/quiz"

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[{
        element:<Topics />,
        path: "/",
        loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
     {
      path:'/:id',
      element: <AllQuiz />,
      loader: async (params) =>fetch(`https://openapi.programming-hero.com/api/quiz/${params.params.id}`),
     },
    ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
