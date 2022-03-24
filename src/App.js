import './App.css';
import Intro from './Components/Intro';
import Navigation from './Components/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* // Navigation */}
      <Navigation />
      {/* // main image & intro text */}
      <Intro />
      {/* //pricing plans */}
    </>
  );
}

export default App;
