//import { Link } from 'react-router-dom'
import './Header.css'
import Section from './Tesal5';
import Tesla3 from './Tesla3';
import TeslaX from './TeslaX';
import TeslaY from './TeslaY';
import Tesla from './Tesla';
import { Routes, Route, Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      
      <header >
      
        <div className='header'>
          <Link to={'/'}>          <img src='https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6.png' alt='' height={100} width={150}></img></Link>
          <nav>
            <ul className="menu">
             
            <Link className='link' to={'/tesla5'}>Tesla 5</Link>
            <Link className='link' to={'/tesla3'}>Tesla 3</Link>
            <Link className='link' to={'/teslax'}>Tesla X</Link>
            <Link className='link' to={'/teslay'}>Tesla Y</Link>
            </ul>
          </nav>

        </div>

      </header>
      <Routes>
        <Route exact path='/' element={<Tesla/>}/>
        <Route exact path='/tesla5' element={<Section />} />
        <Route exact path='/tesla3' element={<Tesla3 />} />
        <Route exact path='/teslax' element={<TeslaX />} />
        <Route exact path='/teslay' element={<TeslaY />} />
      </Routes>
    </div>
  )

}
export default Header

