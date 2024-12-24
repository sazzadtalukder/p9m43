
import {  useState } from 'react'
import './App.css'
import Board from './Components/Board/Board'
import Datas from './Components/Datas/Datas'

function App() {
 
  const [wantCook, setWantCook] = useState([]);

    const handleCook = (cookData)=> {
      const newData = [...wantCook, cookData];
      setWantCook(newData); 
  }
  return (
    <>
    <div className='max-w-6xl mx-auto flex gap-5'>
        <Datas className='w-2/3' handleCook={handleCook}></Datas>
        <Board className='w-1/3' wantCook={wantCook}></Board>
    </div>
     
    </>
  )
}

export default App
