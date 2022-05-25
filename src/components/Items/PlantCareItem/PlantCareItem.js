import css from './PlantCareItem.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'
// Components
import Button from 'components/Button'

const PlantCareItem = ({ className, title, text, image, btn }) => (
  <div className={cn(css.item, className)}>
    <div className={css.item_img}>
      <img src={image} alt={title} />
    </div>
    <div className={css.item_info}>
      <div className={css.item_title}>{title}</div>
      <div className={css.item_text}>{text}</div>
      <Button>{btn}</Button>
    </div>
  </div>
)

PlantCareItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  btn: PropTypes.string,
}

export default PlantCareItem
