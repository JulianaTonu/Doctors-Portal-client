
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/Router';

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto ">
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
