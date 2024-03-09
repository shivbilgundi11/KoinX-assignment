import { ArrowRight } from 'lucide-react';

const Button = ({ text }) => {
  return (
    <button className='bg-white text-black group/item rounded-lg py-2 px-4 inline-flex items-center justify-center gap-2 font-semibold hover:shadow-lg transition duration-300 text-[13px] lg:text-[16px]'>
      {text}{' '}
      <ArrowRight className=' group-hover/item:translate-x-2 transition duration-200' />
    </button>
  );
};

export default Button;
