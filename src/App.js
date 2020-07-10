import React from 'react';
import Navigation from './components/Navigation';
import AuthContextProvider from './components/contexts/AuthContext';

function App() {
  return (
  <AuthContextProvider>
    <Navigation/>
    <div className="container">
      <h1> HOLA CINTA NEGRAA :3 </h1>
    </div>
  </AuthContextProvider>
  );
}

export default App;
