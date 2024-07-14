import { FaArrowLeft } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import styles from './Header.module.scss'
import Hamburger from '../hamburger/Hamburger'

const Header = ({ backLink = '/' }) => {

    const { pathname } = useLocation()
    const navigate = useNavigate()

    const { isAuth } = useAuth()

    return (
     <header className = {styles.header}>
        { isAuth && (
          <>
            {pathname === '/' && isAuth ? (
              <button 
                aria-label = 'Go to profile'
                onClick = {() => {
                navigate('/profile')
                }}
              >
                <FaRegUser fill='#fff' fontSize={22}/>
              </button>
            ) : (
              <button 
                aria-label='Go back'
                onClick = {() => {
                  navigate(isAuth ? backLink : '/auth')
                }}
              >
              <FaArrowLeft fill='#fff' fontSize={22}/>
              </button>
            )}
          <Hamburger />
        </>
      )}
    </header>
  )
}
  


  export default Header