import { useState } from 'react';
import { Route, Router } from 'react-router';
import './App.css';
import { LoadingScreen } from './component/LoadingScreen';
import { Navbar } from './component/section/Navbar';
import { Mobilmenu } from './component/Mobilmenu';
import { Home } from './component/section/Home'
import { About } from './component/section/About'
import { Project } from './component/section/Project'
import { Conttact } from './component/section/Contact';

function App() {
  // const [isloading, setisloading] = useState(false);
  const [menuopen, setmenuopen] = useState(false);

  return (
    <>
      {/* {!isloading && <LoadingScreen oncomplete={() => setisloading(true)} />} */}

      <div className={`min-h-screen transition=opacity duration-700`}>
        <Navbar menuopen={menuopen} setmenuopen={setmenuopen} />

        <Mobilmenu menuopen={menuopen} setmenuopen={setmenuopen} />

        <Home />
        <About />
        <Project />
        <Conttact />

      </div>

    </>
  );
}

export default App;
