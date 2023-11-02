
import { Link } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'

import './Header.css'

const Header = () => {
  return (
    <header className='header center'>
      <Link to='/'>
      <h3>MAT.</h3>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
