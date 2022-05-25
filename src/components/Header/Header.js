import { useCallback, useState } from 'react'
import css from './Header.module.scss'
// Images
import logoIcon from 'icons/logo.svg'
import searchIcon from 'icons/search.svg'
import burgerIcon from 'icons/burger.svg'
// Components
import MobileMenu from 'components/MobileMenu'

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)

  const changeActiveMobileMenu = useCallback(() => {
    setIsMobileMenu(!isMobileMenu)
  }, [isMobileMenu])

  return (
    <header className={css.header}>
      <div className={css.header_logo}>
        <img src={logoIcon} alt="logo" />
      </div>
      <div className={css.header_right}>
        <div className={css.header_search}>
          <img src={searchIcon} alt="search" />
        </div>
        <div className={css.header_language}>РТ</div>
        <div className={css.header_burger} onClick={changeActiveMobileMenu}>
          <img src={burgerIcon} alt="burger" />
        </div>
      </div>
      <MobileMenu active={isMobileMenu} changeActive={changeActiveMobileMenu} />
    </header>
  )
}

export default Header
