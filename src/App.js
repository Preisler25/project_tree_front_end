import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

//CSS import
import './App.css';

//Components import
import Navbar from './components/navbar';



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navbar days={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']} />,
      errorElement: <div>404</div>,
      children: [
        {
          path: '',
          element: <div>405</div>,
        },
        {
          path: ':day',
          element: <div>406</div>,
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
