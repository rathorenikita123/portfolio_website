import React from 'react';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contact';
import Toggle from './components/Toggle/Toggle';

const App = () => {
  return (
    <div>
      <Toggle/>
      <Introduction/>
      <Skills/>
      <About/>
      <Contacts/>
     
    </div>
  );
}

export default App;
