import { useState } from 'react';
import CoinFundamentals from './CoinFundamentals';
import { MessageCircleWarning } from 'lucide-react';

const tabs = [
  { id: 1, name: 'Overview' },
  { id: 2, name: 'Fundamentals' },
  { id: 3, name: 'News Insights' },
  { id: 4, name: 'Sentiments' },
  { id: 5, name: 'Team' },
  { id: 6, name: 'Technicals' },
  { id: 7, name: 'Tokenomics' },
];

const Performance = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <section className='my-4'>
      {/* ----Tabs-Component---- */}
      <div className='w-full h-12 flex items-center justify-between gap-5 border-b-2 border-[#c4c5c8] overflow-auto'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`font-medium text-nowrap ${
              currentTab === tab.id
                ? 'text-primary border-b-4 border-primary leading-[42px]'
                : 'text-gray'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* ----Performance-Component---- */}
      {currentTab == 1 ? (
        <CoinFundamentals />
      ) : (
        <div className='bg-white w-full h-60 mt-6 rounded-lg flex items-center justify-center'>
          <p className='text-gray text-[18px] font-medium inline-flex items-center gap-2'>
            <MessageCircleWarning /> No content for now...
          </p>
        </div>
      )}
    </section>
  );
};

export default Performance;
