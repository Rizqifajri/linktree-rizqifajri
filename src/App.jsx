
import './App.css'
import DeskripsiDiri from './components/DeskripsiDiri'
import FotoDiri from './components/FotoDiri'
import List from './components/List'
import ParticleBg from './components/ParticleBg'
import {GrGithub, GrInstagram, GrLinkedinOption} from "react-icons/gr"

function App() {
  
  return (
    <>
    <ParticleBg/>
    <div className='min-h-screen w-full bg-gray-800'>
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
