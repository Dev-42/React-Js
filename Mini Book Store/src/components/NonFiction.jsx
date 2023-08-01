import { useState } from "react"
import BookCard from './BookCard'
export default function NonFiction() {
  const [books,setBooks] = useState([])

  let booksDisplay = async () => {
    try{
      let res = await fetch('http://localhost:8080/nonfriction')
      let data = await res.json()
      setBooks(data)
      console.log(data)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title' style={{textAlign:'center'}}>Non Friction Books</h1>
      <button onClick={booksDisplay}>Click Me</button>
      <div className="books-container" style={{display:'flex',justifyContent:'space-evenly'}}>
        {/* Display all Non-Fiction books here */}
        {books.map((book,index) => (
          <BookCard key = {index} props = {book} />
        ))}
      </div>
    </div>
  );
}
