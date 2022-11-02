import { Fragment } from 'react';
import { Hero, About, Creations } from './components';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Creations />
    </Fragment>
  );
};

export default App;
