import { Link } from 'react-router-dom';

const coinIds = ['bitcoin', 'trx', 'xrp'];

const Coins = () => {
  return (
    <>
      <h1 className='text-center text-warning mt-7'>
        Please Click on one coin link...
      </h1>
      <div className='flex items-center justify-center gap-4'>
        <Link
          className='text-[22px] font-medium py-4'
          to={`/coins/${coinIds[0]}`}
        >
          Bitcoin
        </Link>
        <Link
          className='text-[22px] font-medium py-4'
          to={`/coins/${coinIds[1]}`}
        >
          Tron
        </Link>
        <Link
          className='text-[22px] font-medium py-4'
          to={`/coins/${coinIds[2]}`}
        >
          Ripple
        </Link>
      </div>
    </>
  );
};

export default Coins;
