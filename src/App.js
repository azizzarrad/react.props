import logo from './logo.svg';
import './App.css';
import Dot from './dott';
import Aziz from './components/Aziz';

function App() {
  const fullName="Aziz Zarrad"
  const proffession="Fullstack Web Developer"
  const bio="im considered a fullstack developper expert in front-end and back-end "

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Aziz name={fullName} prof={profession} portfolio={bio} />
        </div>
        <Dot> <img src={logo}/> </Dot>
      </header>
    </div>
  );
}

export default App;
