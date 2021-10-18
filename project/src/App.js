import './App.css';
import './components/Profile/Profile.jsx'
import Profile from './components/Profile/Profile.jsx';

const profile = {
  name: 'Sarah Geraci',
  username: 'Hally255',
  about: 'Student at University of Central Florida',
  likes: 'Video Games, Reading, Art, and Reptiles',
  dislikes: 'Homework, Test, Exams, and Rude People'
}

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
