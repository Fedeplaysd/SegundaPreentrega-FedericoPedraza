import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <h1>Bienvenidos a MundoGamerStore</h1>
        <section>
          <Link to={'/category/celular'}>Celulares</Link>
          <Link to={'/category/tablet'}>Consolas de videojuegos</Link>
          <Link to={'/category/notebooks'}>Notebooks Gamer</Link>
        </section>
        <CartWidget />
      </nav>
    </>
  )
}

export default NavBar
