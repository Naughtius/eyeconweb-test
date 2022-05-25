import css from './PlantCareSlider.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Slider from 'react-slick'
// Components
import PlantCareItem from 'components/Items/PlantCareItem'

const settings = {
  dots: false,
  infinite: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
}

const PlantCareSlider = ({ items, title, className }) => {
  return (
    <section className={cn(css.slider, className)} id="plant-care">
      <div className={css.slider_top}>
        <div className={css.slider_title}>{title}</div>
        <div className={css.slider_link}>See all</div>
      </div>
      <div>
        <Slider {...settings}>
          {items?.map((item) => (
            <PlantCareItem
              key={item.id}
              {...item}
              className={css.slider_item}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}

PlantCareSlider.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  className: PropTypes.string,
}

export default PlantCareSlider
