import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider }from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import AppLayout from './component/Layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import CountryDetails from './component/Layout/CountryDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'country',
        element: <Country/>
      },
      {
        path: 'country/:id',
        element: <CountryDetails  />
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  }
])
function App() {
  return (
   <RouterProvider router={router}>
      
   </RouterProvider>
  );
}

export default App;
