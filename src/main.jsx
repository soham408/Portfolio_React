import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx'
import Techskills from './components/Techskills/Techskills.jsx'
import Projects from './components/Projects/Project.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';

import { AnimatePresence } from 'framer-motion';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { useLocation } from 'react-router-dom';


// const locations = useLocation();
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Navbar>
//       <AnimatePresence mode='wait'>
        
//          <Routes location={location} key={locations.pathname}>
//         <Route
//         path='/' element={<Layout />}>
//           <Route 
//           path='' element={<Home />} />
//           <Route path='techskills' element={<Techskills />} />
//           <Route path='projects' element={<Projects />} />
//           <Route path='about' element={<About />} />
//           <Route path='contact' element={<Contact />} />
//           <Route 
//           loader={githubInfoLoader}
//           path='github' 
//           element={<Github />} 
//           />
          
//         </Route>
//          </Routes>
//        </AnimatePresence>
//         </Navbar>
//     )
//   )




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )



const RootComponent = () => {
  const location = useLocation();

  return (
    <div className="App">
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="techskills" element={<Techskills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route loader={githubInfoLoader} path="github" element={<Github />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<RootComponent />} />
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
