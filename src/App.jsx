import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>       
          <header>
            <NavBar />
          </header>
          
        <Routes>

          <Route path='/'
            element={<ItemListContainer greetings={'Listado de productos'}/>} />
            
          <Route path='/category/:categoryId'
            element={<ItemListContainer />} />

          <Route path="/item/itemId"
            element={<ItemDetailContainer greetings={'Listado de productos filtrados'}/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
