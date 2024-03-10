import CoinStatus from './(ui-components)/CoinStatus';
import parse from 'html-react-parser';

/* eslint-disable react/prop-types */
const CoinCard = ({ coin }) => {
  return (
    <div className='w-[158px] h-[120px] md:w-[252px] md:h-[160px] p-[10px] md:p-4 rounded-[10px] border border-[#E3E3E3] flex flex-col justify- gap-y-2 overflow-hidden'>
      <div className='flex items-center gap-x-2 md:gap-x-4'>
        <span className='w-[16px] h-[16px] md:w-[26px] md:h-[26px] rounded-full overflow-hidden'>
          <img src={coin?.item?.thumb} alt={coin?.item?.name} />
        </span>
        <p className='text-[10px] md:text-[16px] text-ellipsis overflow-clip text-nowrap'>
          {coin?.item?.name}
        </p>
        <CoinStatus
          profit={coin?.item?.data?.price_change_percentage_24h?.btc}
          perc={coin?.item?.data?.price_change_percentage_24h?.btc.toFixed(2)}
        />
      </div>
      <p className='font-medium text-[12px] md:text-[20px]'>
        {parse(coin?.item?.data?.price)}
      </p>

      <div className='w-[126px] h-[38px] md:w-[200px] md:h-[60px] overflow-hidden mx-auto'>
        <img
          src={coin?.item.data.sparkline}
          alt='coinSparkline'
          className='block object-contain object-center'
        />
      </div>
    </div>
  );
};

export default CoinCard;
