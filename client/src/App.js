import { Chronometer } from './components/Chronometer';
import { Record } from './components/Record';
import { Title } from './components/Title';
import './App.css';
import "antd/dist/antd.css";

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
