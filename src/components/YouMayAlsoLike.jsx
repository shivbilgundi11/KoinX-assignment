import { useContext } from 'react';
import { CryptoData } from '../store/context';
import Responsive from './Carousel';
import CoinCard from './CoinCard';
import Loading from './(ui-components)/Loader';

const YouMayAlsoLike = () => {
  const [store] = useContext(CryptoData);

  if (store.trendingCoins == null) {
    return <Loading />;
  }

  return (
    <section className='bg-white my-5 p-7 rounded-lg'>
      <div className='my-2'>
        <p className='text-[24px] font-semibold py-2'>You May Also Like</p>
        <Responsive coins={store?.trendingCoins} />
      </div>

      <div className='my-2'>
        <p className='text-[24px] py-2 font-semibold'>Trending Coins</p>
        <div className='flex items-center justify-center gap-2 flex-wrap'>
          {store?.trendingCoins &&
            store?.trendingCoins.map((coin) => {
              return <CoinCard coin={coin} key={coin?.item?.id} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default YouMayAlsoLike;
