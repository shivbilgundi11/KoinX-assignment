import { ChevronsRight } from 'lucide-react';
import Navbar from './components/Navbar';
import { useParams } from 'react-router-dom';

const App = () => {
  const params = useParams();

  return (
    <>
      <Navbar />

      {/* ----Breadcrumbs---- */}
      <div className='container mx-auto m-4 p-1'>
        <span className='flex items-center'>
          <p className='text-sm text-gray'>Cryptocurrencies </p>
          <ChevronsRight className='text-[10px] text-gray' />
          <p className='text-black text-sm font-medium capitalize cursor-pointer'>
            {' '}
            {params?.coins}
          </p>
        </span>
      </div>
    </>
  );
};

export default App;
