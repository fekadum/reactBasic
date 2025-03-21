import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import { MainContent } from './components/mainContent';
import { Footer } from './components/shared';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
      {/* <h1>mukera</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App
