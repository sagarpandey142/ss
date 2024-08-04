import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FollowersBox from './FollowerBox'
import TwitterProfileFetcher from './Twitter'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className=' flex gap-5'>
     <FollowersBox/>
     <TwitterProfileFetcher/>
 </div>
  )
}

export default App
