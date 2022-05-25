import css from './Footer.module.scss'
// Images
import icon18 from 'icons/18+.svg'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer_18}>
        <img src={icon18} alt="18+" />
      </div>
      <div className={css.footer_text}>
        Our website is intended for informational purposes only and is not an
        advertisement. © 2018 - 2021
      </div>
    </footer>
  )
}

export default Footer
