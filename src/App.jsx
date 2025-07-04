import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoadingScreen } from './component/LoadingScreen';
import { Navbar } from './component/section/Navbar';
import { Mobilmenu } from './component/Mobilmenu';
import {Home} from './component/section/Home'
import {About} from './component/section/About'
import {Project} from './component/section/Project'
import { Conttact } from './component/section/Contact';


function App() {
  const [isloading, setisloading] = useState(false);
  const [menuopen, setmenuopen] = useState(false);

  return (
   <>

{!isloading && <LoadingScreen oncomplete={()=> setisloading(true)}/>
  }

<div className={`min-h-screen transition=opacity duration-700 ${isloading ? "opacity-100": "opacity-0"} bg-black text-gray-100 `}>
 <Navbar menuopen={menuopen} setmenuopen={setmenuopen}/>

<Mobilmenu menuopen={menuopen} setmenuopen={setmenuopen}/>
   
   <Routes>

  
     <Route path='/Home' element={<Home />}/>
     <Route path='/About' element={<About />}/>
       <Route path='/project' element={<Project />}/>
       <Route path='/Conttact' element={<Conttact />}/>
    </Routes>

  
 </div>
    
      </>
  );
}

export default App;
