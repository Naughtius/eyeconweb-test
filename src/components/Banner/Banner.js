import css from './Banner.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Banner = ({ className, title, text, image }) => {
  return (
    <div className={cn(css.banner, className)}>
      <div className={css.banner_info}>
        <div className={css.banner_title}>{title}</div>
        <div className={css.banner_text}>{text}</div>
      </div>
      <div className={css.banner_img}>
        <img src={image} alt="img" />
      </div>
    </div>
  )
}

Banner.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

export default Banner
