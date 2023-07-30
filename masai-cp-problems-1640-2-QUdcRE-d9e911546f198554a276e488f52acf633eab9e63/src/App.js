import "./App.css";
// import data from db.json
import {useState} from 'react'
import UserDetails from "./components/UserDetails";
function App() {
 let [users,setUsers] = useState([])
 const[order,setOrder]=useState("")
 const[sort, setSort]= useState("first_name")
  console.log(order)
 
 let usersDisplay = async(order,sort) => {
  try{
    let res = await fetch(`http://localhost:8080/users?_sort=${sort}&_order=${order}`)
    let data = await res.json()
    setUsers(data)
    console.log(data)
  }catch(e){
    console.log(e)
  }
 }

 const handlesort=()=>{
  setOrder("asc")
usersDisplay(order,sort);
}

const handledes=()=>{
  setOrder("desc")
usersDisplay(order,sort);
}

  return (
    <div className="App" data-testid = 'app'>
      <button onClick={usersDisplay}>Click</button>
      <button  data-testid = 'sort-asc-btn' onClick={handlesort}>Sort by Asc</button>
      <button  data-testid = 'sort-desc-btn' onClick={handledes}>Sort by Desc</button>
      {/*  map through the users data and pass props to the Userdetails component */}
      {users.map((user)=>(
        <UserDetails key = {user.id} props= {user}/>
      ))}

    </div>
  );
}

export default App;
