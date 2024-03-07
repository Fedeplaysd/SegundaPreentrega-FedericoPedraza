import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <h1>Bienvenidos a MundoGamerStore</h1>
        <section>
          <button><Link to={'/category/:celular'}>Celulares</Link></button>
          <button><Link to={'/category/:tablet'}>Consolas de videojuegos</Link></button>
          <button><Link to={'/category/:notebooks'}style={{textDecoration: "none", color: "black"}}>Notebooks Gamer</Link></button>
        </section>
        <CartWidget />
      </nav>
    </>
  )
}

export default NavBar
