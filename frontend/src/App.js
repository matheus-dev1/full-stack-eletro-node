import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { lazy } from 'react';

// Implementando code splitting e lazy loading:

const Header = lazy( () => import('./code-splitting/Header'));
const Footer = lazy( () => import('./code-splitting/Footer'));
const Routes = lazy( () => import('./code-splitting/routes'));

function App() {
  return (
    <>
      <Router>
        
      <Suspense fallback={<p>Aguarde...</p>}>
        <Header />
        </Suspense>

        <Suspense fallback={<p>Carregando...</p>}>
        <Routes />
        </Suspense>

        <Suspense fallback={<p>Aguarde...</p>}>
        <Footer />
        </Suspense>

      </Router>
      
    </>
  );
}

export default App;