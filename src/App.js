import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import io from 'socket.io-client';

//CSS import
import './App.css';

//Components import
import SignUpPage from './Pages/signUpPage';
import DailyPointPage from './Pages/dailyPointPage';
import LoginPage from './Pages/loginPage';

const socket = io('http://localhost:2506');

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>404</div>,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        //login required
        path: "admin",
        children: [
          {
            path: "",
            element: <div>Admin</div>,
          },
          {
            path: "projects",
            element: <div>Projects</div>,
          },
          {
            path: "points",
            element: <DailyPointPage socket={socket}/>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
