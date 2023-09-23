import React, {useState,useEffect} from 'react';
import BookList from './component/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const query = 'harry potter';

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.items || []))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
      <h1>Harry Potter Books</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
