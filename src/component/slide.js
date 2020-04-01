import React , {Component} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

class Gallery extends Component {
  state = {
    galleryItems: [
        Image = "1.png",
        Image = "2.png",
        Image = "3.jpg"
    ].map((i) => <h2 key={i}>{i}</h2>),
  }

  responsive = {
     200:{ items: 2}, 
    700: { items: 3 },
    800:{items: 4},
    1024: { items: 5 },
  }

  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }

  render() {
    return (
        
      <AliceCarousel
        items={this.state.galleryItems}
        buttonsDisabled={true}
        dotsDisabled={true}
        responsive={this.responsive}
        autoPlayInterval={2000}
        autoPlayDirection="ltl"
        autoPlay={true}
        fadeOutAnimation={true}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        
      >
          <img src="1.png" className="myimgs"></img>
          <img src="2.png" className="myimgs"></img>
          <img src="3.jpg" className="myimgs"></img>
          <img src="4.png" className="myimgs"></img>
          <img src="brand.png" className="myimgs"></img>

      </AliceCarousel>
      
    )
  }
}
export default Gallery;