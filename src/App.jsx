import { SkeletonTheme } from 'react-loading-skeleton'
import './App.css'
import Home from './Components/Home/Home'
import { useEffect } from 'react'
import { generateToken, messaging } from './notification_config/firebase'
import { onMessage } from 'firebase/messaging'
import toast, { Toaster } from 'react-hot-toast'

function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      toast(payload.notification.body);
      console.log(payload);
    });
  }, []);

  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className='bg-gradient-to-br from-[#fef9e7] via-[#dbeafe] to-[#96C1EC]'>
          <Home />
        </div>
        <Toaster position='top-right' />
      </SkeletonTheme>
    </>
  )
}

export default App