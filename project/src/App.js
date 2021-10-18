import './App.css';
import Profile from './components/Profile/Profile.jsx';
import './components/Profile/me.png'
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="App">
      <Profile />
      <Feed />
    </div>
  );
}

export default App;
