import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

//CSS import
import './App.css';

//Components import
import DailyPointPage from './Pages/dailyPointPage';
import LoginPage from './Pages/loginPage';


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
        path: "home",
        element: <DailyPointPage />,
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
