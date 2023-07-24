// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import Title from './Components/Title'
import UserCard from './Components/UserCard'
import Courses from './Components/Courses'
export default function App() {
  return(
    <div>
      <div>
      <Title />
      </div>
      <div>
        <UserCard name='Dev' avatar='https://dummyimage.com/200x200.jpg/ff4444/ffffff' posts='2' followers='100' address='Shyamnagar'/>
        <Courses />
      </div>
    </div>
  )
}
