import { Fragment } from 'react';
import { Hero, About } from './components';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Hero />
      <About />
    </Fragment>
  );
};

export default App;
