import { Info } from 'lucide-react';
import NewsIcon from '../assets/images/fluent_news.png';
import GrowthGraph from '../assets/images/graph-right-grow.png';

const Sentiment = () => {
  return (
    <div className='w-full p-3 lg:p-5 bg-white rounded-lg'>
      <p className='font-semibold text-[24px]'>Sentiment</p>
      <p className='text-[18px] my-2 text-gray font-semibold inline-flex items-center gap-2'>
        Key Events <Info />
      </p>

      <div className='w-full lg:my-5 grid grid-cols-1 md:grid-cols-2 items-center gap-2 lg:gap-3'>
        <div className='bg-[#E8F4FD] p-3 md:p-5 rounded-lg grid grid-cols-6'>
          <div className='w-[44px] h-[44px] mx-auto bg-primary flex items-center justify-center rounded-full overflow-hidden'>
            <img src={NewsIcon} alt='NewsIcon' />
          </div>

          <div className=' col-span-5'>
            <h4 className='text-[14px] font-medium leading-6'>
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </h4>
            <p className='text-[14px] font-medium text-gray leading-6 mt-4'>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>

        <div className='bg-profit p-3 md:p-5 rounded-lg grid grid-cols-6'>
          <div className='w-[44px] h-[44px] mx-auto bg-success flex items-center justify-center rounded-full overflow-hidden'>
            <img src={GrowthGraph} alt='NewsIcon' />
          </div>

          <div className=' col-span-5'>
            <h4 className='text-[14px] font-medium leading-6'>
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </h4>
            <p className='text-[14px] font-medium text-gray leading-6 mt-4'>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
      </div>

      {/* ------Analyst Estimates------ */}
      <div>
        <p className='text-[18px] my-2 font-semibold inline-flex items-center gap-2'>
          Analyst Estimates <Info className='text-gray' />
        </p>

        <div className='flex items-center gap-x-3 md:gap-x-5 my-3'>
          <div className='w-[120px] h-[120px] bg-profit rounded-full flex items-center justify-center'>
            <p className='text-[36px] text-success font-medium'>76</p>
            <p className='font-medium text-success'>%</p>
          </div>

          <div className='flex flex-col gap-y-3 mx-auto sm:mx-0'>
            <div className='flex items-center justify-start gap-2 md:gap-5'>
              <p className='text-sm font-medium text-gray'>Buy</p>
              <span className='w-[139px] md:w-[349px] h-2 rounded-lg bg-[#00b386]'></span>
              <p className='text-sm font-medium text-gray'>76%</p>
            </div>
            <div className='flex items-center gap-2 md:gap-5'>
              <p className='text-sm font-medium text-gray'>Hold</p>
              <span className='w-[33px] h-2 rounded-lg bg-[#c7c8ce]'></span>
              <p className='text-sm font-medium text-gray'>8%</p>
            </div>
            <div className='flex items-center gap-2 md:gap-5'>
              <p className='text-sm font-medium text-gray'>Sell</p>
              <span className='w-[41px] md:w-[66px] h-2 rounded-lg bg-danger'></span>
              <p className='text-sm font-medium text-gray'>16%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
