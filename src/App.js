import React from 'react';

import Home from './pages/home'

import AppProvider from './hooks'

import GlobalStyles from './styles/global'

function App() {
  return (
   <div>
    <AppProvider>
      <Home/>
    </AppProvider>
    <GlobalStyles/>
   </div>
  );
}

export default App;
