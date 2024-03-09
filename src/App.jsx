import { ChevronsRight } from 'lucide-react';
import Navbar from './components/Navbar';
import { useParams } from 'react-router-dom';
import GetStarted from './components/GetStarted';
import { CryptoData } from './store/context';
import { useState } from 'react';
import CoinDetails from './components/CoinDetails';
import Performance from './components/Performance';
import Sentiment from './components/Sentiment';
import AboutCoin from './components/AboutCoin';
import Tokenomics from './components/Tokenomics';
import Teams from './components/Teams';

const coinDatas = {
  coinBasics: null,
  coinPriceUSD: null,
  coinPriceINR: null,
};

const App = () => {
  const { coins } = useParams();
  const [store, setStore] = useState(coinDatas);

  return (
    <>
      <Navbar />
      <CryptoData.Provider value={[store, setStore]}>
        {/* ----Breadcrumbs---- */}
        <div className='md:container md:mx-auto m-2 sm:my-4 p-1'>
          <span className='flex items-center'>
            <p className='text-sm text-gray'>Cryptocurrencies </p>
            <ChevronsRight className='text-[10px] text-gray' />
            <p className='text-black text-sm font-medium capitalize cursor-pointer'>
              {' '}
              {coins}
            </p>
          </span>
        </div>
        {/* ----Main-Grid---- */}
        <section className='md:container md:mx-auto p-1 grid grid-cols-1 xl:grid-cols-3 gap-5'>
          {/* Column-One-CoinDetails */}
          <div className='lg:col-span-2'>
            <CoinDetails />
            <Performance />
            <Sentiment />
            <AboutCoin />
            <Tokenomics />
            <Teams />
          </div>

          {/* Get-Started-With-KoinX */}
          <div className='relative'>
            <GetStarted />
          </div>
        </section>
      </CryptoData.Provider>
    </>
  );
};

export default App;
