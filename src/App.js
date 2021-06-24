import { Suspense } from 'react'
import {Switch, useLocation, Route} from 'react-router-dom'
import { lazy } from 'react/cjs/react.production.min';
import Footer from './components/Footer';
import Main from './components/Main';

const Projekty = lazy( () => import('./components/ImageExamples') )
const Kontakt = lazy( () => import('./components/ContactUs') )
const Oferta = lazy(() =>  import( './components/ThreeCardsOffert' ))
const ONas = lazy(() => import('./components/ONas'))

// const  = lazy( () => import './components/' )
// const = lazy( () => import './components/' )


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <Suspense fallback='ladowanie'>
      <Main/>
            <Switch location={ location || background } >
              <Route exact path='/' children={ <ONas/> } />
              <Route  path='/oferta' children={ <Oferta/> } />
              <Route  path='/projekty' children={ <Projekty/> } />
              <Route  path='/kontakt' children={ <Kontakt/> } />
           </Switch>
           <Footer/>
    </Suspense>
  );
}

export default App;
