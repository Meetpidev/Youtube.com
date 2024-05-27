import Nav from './components/navbar/nav.jsx';
import DrawerSidebar from './components/leftSidebar/drawerSidebar.jsx';
import AllRoutes from './components/AllRoutes.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';

function App() {
   
  const [togglebar,settogglebar] = useState({display:"none"});

  const toggleDrawer = () =>{
    if(togglebar.display==="none"){
      settogglebar({display:"flex"});
    }
    else{
      settogglebar({display:"none"});
    }
  }

  return (
    <>
    <Router>
     <Nav toggleDrawer = {toggleDrawer}></Nav>
     <DrawerSidebar toggleDrawer = {toggleDrawer} totoggleDrawerStyle={togglebar}></DrawerSidebar>
     <AllRoutes></AllRoutes>
     </Router>
    </>
  )
}

export default App
