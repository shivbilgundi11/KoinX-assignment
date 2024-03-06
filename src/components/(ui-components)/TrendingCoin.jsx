import Bitcoin from '../../assets/images/bitcoin.png';
import CoinStatus from './CoinStatus';

const TrendingCoin = () => {
  return (
    <div className='my-3 md:my-6 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <span className='w-6 h-6 overflow-hidden'>
          <img
            src={Bitcoin}
            alt='coinName'
            className='block w-full object-cover object-center'
          />
        </span>

        <h4 className='font-medium'>Ethereum(ETH)</h4>
      </div>

      <CoinStatus />
    </div>
  );
};

export default TrendingCoin;
