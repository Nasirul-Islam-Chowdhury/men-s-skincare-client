import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes/Routes'
import 'react-day-picker/dist/style.css';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
   <Toaster />
    </>
  )
}

export default App
