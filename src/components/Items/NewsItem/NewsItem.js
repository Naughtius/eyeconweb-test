import css from './NewsItem.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'
// Images
import eyeIcon from 'icons/eye.svg'

const NewsItem = ({ className, title, date, views, image }) => (
  <div className={cn(css.item, className)}>
    <div className={css.item_img}>
      <img src={image} alt={title} />
    </div>
    <div className={css.item_info}>
      <div className={css.item_title}>{title}</div>
      <div className={css.item_bottom}>
        <div className={css.item_date}>{date}</div>
        <div className={css.item_views}>
          <img src={eyeIcon} alt="eye" />
          <div className={css.item_views_text}>{views}</div>
        </div>
      </div>
    </div>
  </div>
)

NewsItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  views: PropTypes.string,
  image: PropTypes.string,
}

export default NewsItem
