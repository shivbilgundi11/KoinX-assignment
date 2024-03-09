/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import CoinCard from './CoinCard';

function Responsive({ coins }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3.9,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {coins &&
          coins.map((coin) => {
            return <CoinCard coin={coin} key={coin?.item?.id} />;
          })}
      </Slider>
    </div>
  );
}

export default Responsive;
