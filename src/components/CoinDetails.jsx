import CoinLogo from '../assets/images/bitcoin.png';
import CoinStatus from './(ui-components)/CoinStatus';
import TradingViewWidget from './ChartWidget';

const CoinDetails = () => {
  return (
    <div className='lg:col-span-2 bg-white rounded-lg p-5'>
      {/* ------Basic-Coin-Details------ */}
      <div className='flex items-center gap-1 md:gap-2'>
        <span className='w-8 h-8 md:w-9 md:h-9 overflow-hidden'>
          <img
            src={CoinLogo}
            alt='Bitcoin'
            className='block object-cover object-center w-full'
          />
        </span>

        <h1 className='text-black font-semibold text-[21px] md:text-[24px]'>
          Bitcoin
        </h1>

        <p className='text-sm text-[#5d667b] font-semibold'>BTC</p>

        <div className=' w-20 h-8 md:h-10 rounded-lg bg-[#5d667b] text-white text-center leading-8 md:leading-10'>
          Rank #1
        </div>
      </div>

      {/* ------Coin-Price-&-Status-Details------ */}
      <div className='my-4 md:my-6'>
        <span className='flex gap-3 items-center'>
          <p className='font-semibold text-[28px] md:mr-3'>$46,953.04</p>
          <CoinStatus profit={false} perc={2.5} />
          <p className='text-sm text-[#5d667b] font-medium'>(24H)</p>
        </span>
        <p className='font-medium mt-1'>₹ 39,42,343</p>
      </div>

      <hr className='text-gray-light-bg font-medium' />
      <hr className='text-gray-light-bg font-medium' />

      <div className='mt-6 w-full overflow-hidden overflow-x-auto flex justify-center'>
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default CoinDetails;
