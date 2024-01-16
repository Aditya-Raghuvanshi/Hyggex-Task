import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Transfer from './components/Transfer';
import FlashCard from './components/FlashCard';
import Math from './components/Math';
import Relation from './components/Relation';
import Home from './components/Home';
import Middle from './components/Middle';
import Footer from './components/Footer';

function AppLayout() {
  return  <RouterProvider router={AppRouter}/>
  
}

const App=()=> {
  return (
    <div className="">
      <Navbar/>
      <Transfer/>
      <Outlet/>
      <Middle/>
      <Footer/>
    </div>
  );

}

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/flash",
        element:<FlashCard/>,
      },
      {
        path:"/math",
        element:<Math/>,
      },
      {
        path:"/relation",
        element:<Relation/>,
      }
    ]
  },
]);

export default AppLayout;
