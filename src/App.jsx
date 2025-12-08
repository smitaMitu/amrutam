
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './components/Routes'
import { ProductProvider } from './components/Context/Context'
function App() {

  return (
    <>
    <ProductProvider>
      <RouterProvider router={routes} >

      </RouterProvider>  
      </ProductProvider>
    </>
  )
}

export default App
