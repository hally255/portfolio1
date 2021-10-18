import './Profile.css';

export default function Profile() {
    const profile = {
        name: 'Sarah Geraci',
        username: 'Hally255',
        about: 'Student at University of Central Florida',
        likes: 'Video Games, Reading, Art, and Reptiles',
        dislikes: 'Homework, Test, Exams, and Rude People'
      }

        return(
            <div>
                <div className="imgDiv">
                    <img src="me.png" alt="user" />
                </div>
                <h1>{profile.username}</h1>
                <h3>{profile.name}</h3>
                <h3>{profile.about}</h3>
            </div>
        )
}