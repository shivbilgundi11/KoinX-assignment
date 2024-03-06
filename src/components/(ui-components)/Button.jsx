import { ArrowRight } from 'lucide-react';

const Button = ({ text }) => {
  return (
    <button className='bg-white group/item rounded-lg py-3 px-6 inline-flex items-center justify-center gap-2 font-semibold hover:shadow-lg transition duration-300 text-[13px] lg:text-[16px]'>
      {text}{' '}
      <ArrowRight className=' group-hover/item:translate-x-2 transition duration-200' />
    </button>
  );
};

export default Button;
