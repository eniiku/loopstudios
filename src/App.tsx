import { Fragment } from 'react';
import { Hero, About, Creations, Footer } from './components';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Creations />
      <Footer />
    </Fragment>
  );
};

export default App;
