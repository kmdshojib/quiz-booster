import './App.css';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from './layout/main'
import Topics from "./components/Topics/topics"
import AllQuiz from "./components/quiz/quiz"
import Statistics from './components/statistics/statistics'

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
     {
      path:'/statistics',
      element:<Statistics />,
      loader: async () => fetch("https://openapi.programming-hero.com/api/quiz")
     }
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
