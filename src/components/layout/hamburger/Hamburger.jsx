import { TbMenu2 } from 'react-icons/tb'
import { RiCloseFill } from 'react-icons/ri'

import styles from './Hamburger.module.scss'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import Menu from './Menu'

  const Hamburger = () => {
    const { isShow, ref, setIsShow } = useOnClickOutside(false)

  return ( 
    <div className = {styles.wrapper} ref = {ref}>
      <button onClick = { () => setIsShow(!isShow)} aria-label = 'Open menu'>
        {isShow ? <RiCloseFill /> : <TbMenu2 color='white'/> }
      </button>
      <Menu isShow = {isShow} setIsShow = {setIsShow}/>
    </div>
    )
  }
  
  export default Hamburger