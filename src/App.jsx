import { ChevronsRight } from 'lucide-react';
import Navbar from './components/Navbar';
import { useParams } from 'react-router-dom';
import CoinDetails from './components/CoinDetails';
import GetStarted from './components/GetStarted';
import { createContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { baseURL } from './utils/utils';
import Loading from './components/(ui-components)/Loader';

const coinDatas = {
  coinBasics: null,
  coinPriceUSD: null,
  coinPriceINR: null,
  trendingCoins: null,
};

const App = () => {
  const params = useParams();
  const APIData = createContext();
  const [cryptoData, setCryptoData] = useState(coinDatas);
  const [isLoading, setIsLoading] = useState(false);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        //Fetching Coin details like image name etc.
        const { data } = await axios.get(
          `${baseURL}/search?query=${params?.coins}`,
          {
            signal: abortControllerRef.current?.signal,
          },
        );

        if (data.coins.length === 0) {
          alert('Please enter a valid coin id...!');
        }

        setCryptoData((prevData) => ({
          ...prevData,
          coinBasics: data?.coins[0],
        }));

        //Fetching Coin Prices in USD.
        const pricesDataUSD = await axios.get(
          `${baseURL}/simple/price?ids=${data?.coins[0]?.id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=2`,
        );
        setCryptoData((prevData) => ({
          ...prevData,
          coinPriceUSD: pricesDataUSD?.data,
        }));

        //Fetching Coin Prices in USD.
        const pricesDataINR = await axios.get(
          `${baseURL}/simple/price?ids=${data?.coins[0]?.id}&vs_currencies=inr&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=2`,
        );
        setCryptoData((prevData) => ({
          ...prevData,
          coinPriceINR: pricesDataINR?.data,
        }));

        //Fetching Coin Prices in USD.
        const trendingData = await axios.get(`${baseURL}/search/trending`);
        setCryptoData((prevData) => ({
          ...prevData,
          trendingCoins: trendingData?.data,
        }));
      } catch (e) {
        if (e.name === 'AbortError') {
          console.log('Aborted');
          return;
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params]);

  console.log(cryptoData);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <APIData.Provider value={[cryptoData, setCryptoData]}>
        {/* ----Breadcrumbs---- */}
        <div className='md:container md:mx-auto m-2 sm:my-4 p-1'>
          <span className='flex items-center'>
            <p className='text-sm text-gray'>Cryptocurrencies </p>
            <ChevronsRight className='text-[10px] text-gray' />
            <p className='text-black text-sm font-medium capitalize cursor-pointer'>
              {' '}
              {params?.coins}
            </p>
          </span>
        </div>

        <section className='md:container md:mx-auto p-1 grid grid-cols-1 xl:grid-cols-3 gap-5'>
          {/* Column-One-CoinDetails */}
          <CoinDetails />

          {/* Get-Started-With-KoinX */}
          <GetStarted />
        </section>
      </APIData.Provider>
    </>
  );
};

export default App;
