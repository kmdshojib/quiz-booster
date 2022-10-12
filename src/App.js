import './App.css';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from './layout/main'
import Topics from "./components/Topics/topics"
import AllQuiz from "./components/quiz/quiz"
import Statistics from './components/statistics/statistics'
import Blog from './components/blog/blog'
import NotFoud from './components/404/notfound';

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
     },
     {
      path:'/blog',
      element: <Blog />
     }
    ]
  },
  {
      path:"*",
      element: <NotFoud />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
