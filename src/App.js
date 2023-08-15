import { RouterProvider } from 'react-router';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>403</div>,
      errorElement: <div>404</div>,
      children: [
        {
          path: '/',
          element: <div>405</div>,
        },
        {
          path: '/:day',
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
