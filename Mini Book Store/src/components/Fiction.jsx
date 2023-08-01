import {useState} from 'react'
import BookCard from './BookCard';
export default function Fiction() {
  const [books,setBooks] = useState([])

  let booksDisplay = async () => {
    try{
      let res = await fetch('http://localhost:8000/fiction')
      let data = await res.json();
      setBooks(data)
      console.log(data)
  }
  catch(e){
    console.log(e);
  }
}
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title' style={{textAlign:'center'}}>Fictional Books</h1>
      <button onClick={booksDisplay}>Click Here!!!</button>

      <div className="books-container" style={{display:'flex',justifyContent:'space-evenly'}}>
        {/* Map all Fictional Books here */}
        {books.map((book,index) => (
          <BookCard key = {index} props = {book} />
        ))}
      </div>
    </div>
  );
}
