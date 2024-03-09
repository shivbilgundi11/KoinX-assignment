/* eslint-disable react/prop-types */
import Bitcoin from '../../assets/images/bitcoin.png';
import CoinStatus from './CoinStatus';

const TrendingCoin = ({ coin }) => {
  return (
    <div className='my-3 md:my-6 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <span className='w-6 h-6 rounded-full overflow-hidden'>
          <img
            src={coin?.item?.thumb ? coin?.item?.thumb : Bitcoin}
            alt='coinName'
            className='block w-full object-cover object-center'
          />
        </span>

        <h4 className='font-medium'>
          {coin?.item?.name}({coin?.item?.symbol})
        </h4>
      </div>

      <CoinStatus
        profit={coin?.item?.data?.price_change_percentage_24h?.btc}
        perc={coin?.item?.data?.price_change_percentage_24h?.btc.toFixed(2)}
      />
    </div>
  );
};

export default TrendingCoin;
