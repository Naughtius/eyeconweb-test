import css from './Flowers.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'
// Components
import FlowerItem from 'components/Items/FlowerItem'

const Flowers = ({ className, title, items }) => {
  return (
    <section className={cn(css.flowers, className)} id="plants-and-flowers">
      <div className={css.flowers_top}>
        <div className={css.flowers_title}>{title}</div>
        <div className={css.flowers_link}>See all</div>
      </div>
      <div className={css.flowers_items}>
        {items?.map((item) => (
          <FlowerItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

Flowers.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Flowers
