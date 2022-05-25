import { useCallback } from 'react'
import css from './MobileMenu.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'
// Images
import userIcon from 'icons/user.svg'
// Utils
import { menu } from './utils'

const MobileMenu = ({ active, changeActive }) => {
  const menuItemHandler = useCallback(
    (href) => {
      changeActive()
      const section = document.querySelector(href)
      section.scrollIntoView({ behavior: 'smooth' })
    },
    [changeActive]
  )

  return (
    <div className={cn(css.mobile, active && css.active)}>
      <div className={css.mobile_login}>
        <img src={userIcon} alt="user" />
        <div className={css.mobile_login_text}>Sign Up or Log in</div>
      </div>
      <div className={css.mobile_menu}>
        {menu?.map((item) => (
          <div
            key={item.id}
            className={css.mobile_menu_item}
            onClick={() => menuItemHandler(item.href)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  active: PropTypes.bool,
  changeActive: PropTypes.func,
}

export default MobileMenu
