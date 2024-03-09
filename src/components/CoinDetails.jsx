import TradingViewWidget from './ChartWidget';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CryptoData } from '../store/context';
import axios from 'axios';
import CoinStatus from './(ui-components)/CoinStatus';
import Loading from './(ui-components)/Loader';

const CoinDetails = () => {
  const { coins } = useParams();
  const [store, setStore] = useContext(CryptoData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCryptoData = async () => {
      setIsLoading(true);
      try {
        // Fetching crypto data
        const searchResponse = await axios.get(
          `https://api.coingecko.com/api/v3/search?query=${coins}`,
        );
        const coinId = searchResponse.data.coins[0].id; // Extracting the id of the first coin

        // // Fetching price in USD
        const priceUSDResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=2
          `,
        );
        const usdPrice = priceUSDResponse?.data[coinId];

        // Fetching price in INR
        const priceINRResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=inr`,
        );
        const inrPrice = priceINRResponse?.data[coinId];

        // Fetching trending coins...
        const trendingCoinsRes = await axios.get(
          `https://api.coingecko.com/api/v3/search/trending
          `,
        );

        setStore((prev) => ({
          ...prev,
          coinBasics: searchResponse?.data?.coins[0],
        }));
        setStore((prev) => ({
          ...prev,
          coinPriceUSD: usdPrice,
        }));
        setStore((prev) => ({
          ...prev,
          coinPriceINR: inrPrice,
        }));
        setStore((prev) => ({
          ...prev,
          trendingCoins: trendingCoinsRes?.data?.coins,
        }));
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCryptoData();
  }, [coins]);

  if (isLoading) {
    return (
      <div className='lg:col-span-2 bg-white rounded-lg p-5'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='bg-white rounded-lg p-5'>
      {/* ------Basic-Coin-Details------ */}
      <div className='flex items-center gap-1 md:gap-2'>
        <span className='w-8 h-8 md:w-9 md:h-9 overflow-hidden'>
          <img
            src={store?.coinBasics?.large}
            alt='Bitcoin'
            className='block object-cover object-center w-full'
          />
        </span>

        <h1 className='text-black font-semibold text-[21px] md:text-[24px]'>
          {store?.coinBasics?.name}
        </h1>

        <p className='text-sm text-[#5d667b] font-semibold'>
          {store?.coinBasics?.symbol}
        </p>

        <div className=' w-20 h-8 md:h-10 rounded-lg bg-[#5d667b] text-white text-center leading-8 md:leading-10'>
          Rank #{store?.coinBasics?.market_cap_rank}
        </div>
      </div>

      {/* ------Coin-Price-&-Status-Details------ */}
      <div className='my-4 md:my-6'>
        <span className='flex gap-3 items-center'>
          <p className='font-semibold text-[28px] md:mr-3'>
            {store?.coinPriceUSD?.usd?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
          {store?.coinPriceUSD?.usd_24h_change < 0 ? (
            <CoinStatus
              profit={true}
              perc={store?.coinPriceUSD?.usd_24h_change.toFixed(2)}
            />
          ) : (
            <CoinStatus
              profit={true}
              perc={store?.coinPriceUSD?.usd_24h_change.toFixed(2)}
            />
          )}
          <p className='text-sm text-[#5d667b] font-medium'>(24H)</p>
        </span>
        <p className='font-medium mt-1'>
          {store?.coinPriceINR?.inr?.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
          })}
        </p>
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
