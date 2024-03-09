import { useContext } from 'react';
import GetStartedFrame from '../assets/images/getStartedframe.png';
import Button from './(ui-components)/Button';
import TrendingCoin from './(ui-components)/TrendingCoin';
import { CryptoData } from '../store/context';

const GetStarted = () => {
  const [store] = useContext(CryptoData);

  return (
    <aside className='rounded-lg grid grid-cols-1 justify-center items-center gap-5'>
      {/* ------Get-Started-Banner------ */}
      <div className='bg-primary w-full flex flex-col items-center p-6 md:p-10 rounded-lg'>
        <h2 className=' font-semibold text-[22px] md:text-2xl text-white md:w-[70%] text-center leading-10'>
          Get Started with KoinX for FREE
        </h2>

        <p className='text-sm font-medium leading-6 my-3 md:my-5 w-[60%] xl:w-full text-center md:mx-3 text-[#F2F2F2]'>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>

        <div className='w-full flex items-center justify-center my-4 overflow-hidden'>
          <img src={GetStartedFrame} alt='illustration frame' />
        </div>

        <Button text={'Get Started for FREE'} />
      </div>

      {/* ------Trending-Coins------ */}
      <div className='bg-white rounded-lg p-5'>
        <h3 className='font-semibold text-[24px]'>Trending Coins (24h)</h3>

        <div>
          {store.trendingCoins &&
            store?.trendingCoins.slice(0, 3).map((coin) => {
              return <TrendingCoin key={coin?.item?.id} coin={coin} />;
            })}
        </div>
      </div>
    </aside>
  );
};

export default GetStarted;
