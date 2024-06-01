import Nav from './components/navbar/nav.jsx';
import DrawerSidebar from './components/leftSidebar/drawerSidebar.jsx';
import AllRoutes from './components/AllRoutes.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from 'react';
import CreateChennel from './pages/Chanel/CreateChennel.jsx';
import { useDispatch } from 'react-redux';
import { fetchAllchanel } from './actions/ChanelUser.js';
import UploadVideo from './pages/UploadVideo/UploadVideo.jsx';
import { getAllvideos } from './actions/Video.js';
import { AlllikeVideo } from './actions/likeVideo.js';




function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllchanel);
    dispatch(getAllvideos);
    dispatch(AlllikeVideo);

  // .then(data => {
  //   // dispatch the data here if fetchAllchanel is successful
  //   console.log('Fetched channel data:', data); // optional for logging
  // })
  // .catch(error => {
  //   // handle errors here if the API call fails
  //   console.error('Error fetching channels:', error);
  // });
 },[dispatch] );
   
  const [togglebar,settogglebar] = useState({display:"none"});

  const toggleDrawer = () =>{
    if(togglebar.display==="none"){
      settogglebar({display:"flex"});
    }
    else{
      settogglebar({display:"none"});
    }
  }
  
  const [Creatchanel,setCreatchanel] = useState(false);
  const [videoUploadPage,setvideoUploadPage] = useState(false);

  return (
    <>
    <Router>
    {
      videoUploadPage && <UploadVideo setvideoUploadPage={setvideoUploadPage}></UploadVideo>
    }
   
    { Creatchanel && <CreateChennel setCreatchanel={setCreatchanel}></CreateChennel> }
     <Nav toggleDrawer = {toggleDrawer} setCreatchanel={setCreatchanel}></Nav>
     <DrawerSidebar toggleDrawer = {toggleDrawer} totoggleDrawerStyle={togglebar}></DrawerSidebar>
     <AllRoutes setCreatchanel={setCreatchanel} setvideoUploadPage={setvideoUploadPage}></AllRoutes>
     </Router>
    </>
  )
}

export default App
