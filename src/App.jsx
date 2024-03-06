import { ChevronsRight } from 'lucide-react';
import Navbar from './components/Navbar';
import { useParams } from 'react-router-dom';
import CoinDetails from './components/CoinDetails';
import GetStarted from './components/GetStarted';

const App = () => {
  const params = useParams();

  return (
    <>
      <Navbar />

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
    </>
  );
};

export default App;
