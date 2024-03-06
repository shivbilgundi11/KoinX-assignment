import { TrendingDown, TrendingUp } from 'lucide-react';

const CoinStatus = ({ profit, perc }) => {
  return (
    <div
      className={`w-[84px] h-7 rounded-[4px] flex items-center justify-center ${
        profit ? 'bg-profit text-success' : 'bg-loss text-danger'
      }`}
    >
      <p className='flex items-center justify-center gap-1 font-medium'>
        {profit ? <TrendingUp /> : <TrendingDown />} {perc}%
      </p>
    </div>
  );
};

export default CoinStatus;
