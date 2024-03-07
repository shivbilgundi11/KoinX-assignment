import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className='w-[100vh] h-[100vh] flex items-center justify-center'>
      <Loader className=' animate-spin transition text-center mx-auto' />;
    </div>
  );
};

export default Loading;
