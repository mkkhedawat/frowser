import frowser from 'frowser';
import JSON from 'react-json-view';

import './App.css';

function App() {
  const info = frowser.parse();
  return <JSON src={info} />;
}

export default App;
