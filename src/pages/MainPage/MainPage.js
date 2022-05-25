import css from './MainPage.module.scss'
// Components
import Header from 'components/Header'
import Footer from 'components/Footer'
import RecommendedSlider from 'components/Slider/RecommendedSlider'
import Banner from 'components/Banner'
import Flowers from 'components/Flowers'
import PlantCareSlider from 'components/Slider/PlantCareSlider'
import News from 'components/News'
// Items
import { recommendedSliderItems, flowersItems, plantCareItems } from './utils'
// Images
import flowerImg from 'images/flower.png'

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className={css.content}>
        <RecommendedSlider
          title="Recommended for you"
          items={recommendedSliderItems}
        />
        <div className={css.container}>
          <Banner
            title="Rubber-bearing ficus (elastic)"
            text="Ficus elastica (Ficus elastica), or rubber-bearing ficus..."
            image={flowerImg}
            className={css.banner}
          />
          <Flowers
            className={css.flowers}
            items={flowersItems}
            title="Plants and flowers"
          />
        </div>
        <PlantCareSlider title="Plant care" items={plantCareItems} />
        <div className={css.container}>
          <News title="News" className={css.news} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
