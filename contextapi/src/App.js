// Context API - Similar to Redux
// ==============================================================================================================
//1. It provides a central place to store data/state and share it btw comps wtout having to pass it down as props
//2. Clean and easy way to share state btw components wtout having to pass props down all the time
// ============================================================================================================

// HOOKS
// IT allows us to do a alot of things inside the Functional comps, which could only be done in the class based comps.
// Things like use state and tap into life cycle methods which could only be done in class based comps
// ======================================================================================================
 
// Combining Context and Hooks together gives us a nice to work with shared data inside our app
// It provides a REDUX-LIKE state mgt magic wtout having to install any third party library
import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeUiProvider from './contexts/ThemeUi';

function App() {
  return (
    <div className="App">
      {/* When the context Provider wraps the comps, the comps so wrapped are now attached as 'props' to d Provider */}
      <ThemeUiProvider><Navbar />
        <Booklist /></ThemeUiProvider>

     
    </div>
  );
}

export default App;
