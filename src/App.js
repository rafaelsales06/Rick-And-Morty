import './styles/Home.css'
import Home from './components/Home';
import {CharactersProvider} from './CharactersContext';


function App() {

  return(
    <div>
      <CharactersProvider>
        <Home/>
      </CharactersProvider>
    </div>
  );
}

export default App;
