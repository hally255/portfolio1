import './App.css';
import Profile from './components/Profile/Profile.jsx';
import './components/Profile/me.png'
import Feed from './components/Feed/Feed';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="App">
      <Profile />
      <Feed />
      <Comments />
    </div>
  );
}

export default App;
