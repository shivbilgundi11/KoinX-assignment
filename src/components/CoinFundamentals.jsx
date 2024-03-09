import { useContext } from 'react';
import { CryptoData } from '../store/context';
import Range from './(ui-components)/Range';
import { Info } from 'lucide-react';

const CoinFundamentals = () => {
  const [store] = useContext(CryptoData);
  return (
    <div className='bg-white rounded-lg p-5 my-5'>
      <p className='font-semibold text-[24px]'>Performance</p>

      {/* ------Today's-Price-Range------ */}
      <div className='flex items-center justify-between my-6 gap-x-3 lg:gap-x-8'>
        <span>
          <p className='text-sm text-nowrap my-2 text-[#44475b] text-center'>
            {"Today's"} Low
          </p>
          <p className='font-medium text-[#44475b] text-center'>46,930.22</p>
        </span>

        <Range />

        <span>
          <p className='text-sm text-nowrap my-2 text-[#44475b] text-center'>
            {"Today's"} High
          </p>
          <p className='font-medium text-[#44475b] text-center'>49,343.83</p>
        </span>
      </div>

      {/* ------52W-Price-Range------ */}
      <div className='flex items-center justify-between my-6 gap-x-3 lg:gap-x-8'>
        <span>
          <p className='text-sm text-nowrap my-2 text-[#44475b] text-center'>
            52W Low
          </p>
          <p className='font-medium text-[#44475b] text-center'>16,930.22</p>
        </span>

        <Range />

        <span>
          <p className='text-sm text-nowrap my-2 text-[#44475b] text-center'>
            52W High
          </p>
          <p className='font-medium text-[#44475b] text-center'>49,743.83</p>
        </span>
      </div>

      {/* ------Fundamentals------ */}
      <div className='mt-10'>
        <p className='font-semibold text-[24px] inline-flex items-center gap-2'>
          Fundamentals <Info className='text-[#44475b]' />
        </p>

        <div className='my-3 lg:my-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8'>
          <span className='flex flex-wrap justify-between border-b py-5 border-gray'>
            <p className='text-sm font-medium text-gray'>
              {store?.coinBasics?.name} Price
            </p>
            <p className='text-sm font-medium text-[#111827]'>
              {store?.coinPriceUSD?.usd?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </span>
          <span className='flex items-center justify-between border-b py-5 border-gray'>
            <p className='text-sm font-medium text-gray capitalize'>
              USD 24h Change
            </p>
            <p className='text-sm font-medium text-[#111827]'>
              {store?.coinPriceUSD?.usd_24h_change.toFixed(2)}%
            </p>
          </span>
          <span className='flex items-center justify-between border-b py-5 border-gray'>
            <p className='text-sm font-medium text-gray'>USD 24h Vol</p>
            <p className='text-sm font-medium text-[#111827]'>
              {store?.coinPriceUSD?.usd_24h_vol?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </span>
          <span className='flex items-center justify-between border-b py-5 border-gray'>
            <p className='text-sm font-medium text-gray'>Market Cap</p>
            <p className='text-sm font-medium text-[#111827]'>
              {store?.coinPriceUSD?.usd_market_cap?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </span>
          <span className='flex items-center justify-between border-b py-5 border-gray'>
            <p className='text-sm font-medium text-gray'>Market Cap Rank</p>
            <p className='text-sm font-medium text-[#111827]'>
              #{store?.coinBasics?.market_cap_rank}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinFundamentals;
