import { Chronometer } from './components/Chronometer';
import { Record } from './components/Record';
import { Title } from './components/Title';
import './App.css';

function App() {
  return (
    <div className="App">
        <Title />
        <Chronometer />
        <Record />
    </div>
  );
}

export default App;
