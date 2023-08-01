import NonFiction from "./components/NonFiction";
import Fiction from './components/Fiction'
import styles from './App.module.css'
import {useState} from 'react'
function App() {
  let [heading,setHeading] = useState('Show NonFictional Books')

  let toggleHeading = () => {
    if(heading === 'Show NonFictional Books'){
      setHeading('Show Fictional Books')
    }
    else{
      setHeading('Show NonFictional Books')
    }
  }
  return (
    <div>
      <h1 className={styles.mainHheader}>Mini Book Store</h1>
      <button data-testid="toggle-btn" onClick={toggleHeading} className={styles.btn}>{heading}</button>
      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {heading === 'Show NonFictional Books' ? <NonFiction props ={heading}/> : <Fiction props ={heading} />}
      </div>
    </div>
  );
}

export default App;
