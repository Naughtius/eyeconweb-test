import css from './RecommendedSlider.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Slider from 'react-slick'
// Components
import CompanyItem from 'components/Items/CompanyItem'

const settings = {
  dots: false,
  infinite: false,
  centerMode: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
}

const RecommendedSlider = ({ items, title, className }) => {
  return (
    <div className={cn(css.slider, className)}>
      <div className={css.slider_title}>{title}</div>
      <div>
        <Slider {...settings}>
          {items?.map((item) => (
            <CompanyItem key={item.id} {...item} className={css.slider_item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

RecommendedSlider.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  className: PropTypes.string,
}

export default RecommendedSlider
