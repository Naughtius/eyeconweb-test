import css from './FlowerItem.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'
// Components
import Button from 'components/Button'
// Images
import starIcon from 'icons/star.svg'

const FlowerItem = ({ className, name, btn, rating, image }) => (
  <div className={cn(css.item, className)}>
    <div className={css.item_img}>
      <img src={image} alt={name} />
    </div>
    <div className={css.item_rating}>
      <img src={starIcon} alt="star" />
      <div className={css.item_rating_text}>{rating}</div>
    </div>
    <div className={css.item_info}>
      <div className={css.item_name}>{name}</div>
      <Button variant="green-light" className={css.item_btn}>
        {btn}
      </Button>
    </div>
  </div>
)

FlowerItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  btn: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
}

export default FlowerItem
