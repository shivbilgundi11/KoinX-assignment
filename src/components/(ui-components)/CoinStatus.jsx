/* eslint-disable react/prop-types */
import { ChevronDown, ChevronUp } from 'lucide-react';

const CoinStatus = ({ profit, perc }) => {
  return (
    <div
      className={`w-[84px] h-7 rounded-[4px] flex items-center justify-center ${
        profit ? 'bg-profit text-success' : 'bg-loss text-danger'
      }`}
    >
      <p className='flex text-[10px] sm:text-[12px] text-nowrap md:text-[15px] items-center justify-center gap-1 font-medium'>
        {profit ? <ChevronUp /> : <ChevronDown />} {perc}%
      </p>
    </div>
  );
};

export default CoinStatus;
