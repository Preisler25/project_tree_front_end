import { RouterProvider } from 'react-router';
import './App.css';
import { createBrowserRouter } from '@curi/react-dom';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <div>404</div>,
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: '/:day',
          element: <MainContainer />,
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
