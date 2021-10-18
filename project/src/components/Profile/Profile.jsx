import './Profile.css';

export default function Profile() {
    const profile = {
        name: 'Sarah Geraci',
        username: 'Hally255',
        about: 'Student at University of Central Florida',
        likes: 'Video Games, Reading, Art, and Reptiles',
        dislikes: 'Homework, Test, Exams, and Rude People',
      }

        return(
            <div className="userDiv">
                <h1>{profile.username}</h1>
                <h3>{profile.name}</h3><br />
                <h3>About Me:</h3>
                <p>{profile.about}</p><br />
                <h3>Likes:</h3>
                <p>{profile.likes}</p><br />
                <h3>Dislikes:</h3>
                <p>{profile.dislikes}</p>
            </div>
        )
}