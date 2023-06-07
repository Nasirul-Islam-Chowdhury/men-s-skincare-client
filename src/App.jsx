import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes/Routes'
import 'react-day-picker/dist/style.css';
function App() {

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
        
    </>
  )
}

export default App
