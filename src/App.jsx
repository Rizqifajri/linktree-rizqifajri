
import './App.css'
import DeskripsiDiri from './components/DeskripsiDiri'
import FotoDiri from './components/FotoDiri'
import List from './components/List'
import {GrGithub, GrInstagram, GrLinkedinOption} from "react-icons/gr"

function App() {
  
  return (
    <>
    <div className='min-h-screen w-full bg-salt-box-900'>
    <div className='flex-col justify-center items-center flex px-10'>
      <FotoDiri/>
      <DeskripsiDiri/>
      <List/>
    </div>
      
    
    </div>
    
    </>
  )
}

export default App
