import logo from './github.png';
import Header from './Components/Header/Header';
import Profile from './Containers/Profile';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile/>
    </div>
  );
}

export default App;
