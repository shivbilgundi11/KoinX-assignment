import CalcProfit from '../assets/images/calculateProfit.png';
import CalcLiability from '../assets/images/calculateLiability.png';
import Button from './(ui-components)/Button';

const AboutCoin = () => {
  return (
    <section className='bg-white rounded-lg p-5 mt-3 md:mt-5'>
      <p className='text-[24px] font-semibold'>About Bitcoin</p>

      <div className='my-3 w-full py-2 border-b-2 border-b-gray-light-bg'>
        <h5 className='text-[18px] font-bold '>What is Bitcoin?</h5>
        <p className='font-medium leading-7 mt-2 text-[#3E424A]'>
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>

      <div className='my-3 w-full py-2 border-b-2 border-b-gray-light-bg'>
        <h5 className='text-[18px] font-bold '>Lorem ipsum dolor sit amet</h5>
        <p className='font-medium leading-7 mt-2 text-[#3E424A]'>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
          <br />
          <br />
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
          <br />
          <br />
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>

      <div className='my-3 w-full py-2'>
        <h5 className='text-[18px] font-bold leading-7'>
          Already Holding Bitcoin?
        </h5>

        <div className='w-full flex gap-3 items-center flex-wrap md:gap-5 my-3'>
          <div className='w-[388px] bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-lg p-2 flex gap-4 items-center text-white'>
            <div>
              <img src={CalcProfit} alt='CalcProfitImage' />
            </div>

            <div>
              <p className='text-[20] mb-2 font-bold leading-7'>
                Calculate your <br />
                Profits
              </p>
              <Button text={'Check Now'} />
            </div>
          </div>

          <div className='w-[388px] bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-lg p-2 flex gap-4 items-center text-white'>
            <div>
              <img src={CalcLiability} alt='CalcLiability' />
            </div>

            <div>
              <p className='text-[20] mb-2 font-bold leading-7'>
                Calculate your tax <br />
                liability
              </p>
              <Button text={'Check Now'} />
            </div>
          </div>
        </div>

        <p className='font-medium text-[#3E424A] leading-7 mt-2'>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
    </section>
  );
};

export default AboutCoin;
