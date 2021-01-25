import './App.css';
import Knight from '../src/components/Knight'
import Squere from '../src/components/Squere'

function App() {
  return (
    <div className="App">
      <Squere>
        <Knight/>
      </Squere>
    </div>
  );
}

export default App;
