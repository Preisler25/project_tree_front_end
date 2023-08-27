import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

//CSS import
import './App.css';

//Components import
import DailyPointPage from './Pages/dailyPointPage';


const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <div>404</div>,
      children: [
        {
          path: '',
          element: <DailyPointPage />,
        },
        {
          //login required
          path: 'home',
          element: <DailyPointPage />,
        },
      ]
    }
  ]
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
