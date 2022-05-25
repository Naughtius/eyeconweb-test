import css from './CompanyItem.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'

const CompanyItem = ({ className, name, image }) => (
  <div className={cn(css.item, className)}>
    <div className={css.item_img}>
      <img src={image} alt={name} />
    </div>
    <div className={css.item_info}>
      <div className={css.item_name}>{name}</div>
    </div>
  </div>
)

CompanyItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
}

export default CompanyItem
