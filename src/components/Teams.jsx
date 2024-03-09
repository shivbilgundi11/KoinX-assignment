import Profile1 from '../assets/images/jackRyan.png';
import Profile2 from '../assets/images/johnSmith.png';
import Profile3 from '../assets/images/elinaWilliams.png';

const Teams = () => {
  return (
    <section className='bg-white rounded-lg p-5 mt-3 md:mt-5'>
      <p className='text-[24px] font-semibold'>Team</p>

      <p className='font-medium leading-7 mt-2 text-[#3E424A]'>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <div className='flex flex-col gap-y-3 md:gap-y-5 my-4'>
        {/* ---Member-1--- */}
        <div className='bg-[#e8f4fd] p-3 rounded-lg flex flex-col md:flex-row items-center gap-3 md:gap-6'>
          {/* Logo-Name */}
          <div className='flex flex-col gap-y-2'>
            <div className='w-[96px] h-[104px] rounded-lg overflow-hidden'>
              <img src={Profile1} alt='person pic' />
            </div>
            <span>
              <p className='text-[15px] font-semibold text-center text-nowrap'>
                Jack Ryan
              </p>
              <p className='text-[12px] font-medium text-gray text-nowrap text-center'>
                Designation here
              </p>
            </span>
          </div>

          <p className='text-sm leading-6'>
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>

        {/* ---Member-1--- */}
        <div className='bg-[#e8f4fd] p-3 rounded-lg flex flex-col md:flex-row items-center gap-3 md:gap-6'>
          {/* Logo-Name */}
          <div className='flex flex-col gap-y-2'>
            <div className='w-[96px] h-[104px] rounded-lg overflow-hidden'>
              <img src={Profile3} alt='person pic' />
            </div>
            <span>
              <p className='text-[15px] font-semibold text-center text-nowrap'>
                Elina Williams
              </p>
              <p className='text-[12px] font-medium text-gray text-nowrap text-center'>
                Designation here
              </p>
            </span>
          </div>

          <p className='text-sm leading-6'>
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>

        {/* ---Member-1--- */}
        <div className='bg-[#e8f4fd] p-3 rounded-lg flex flex-col md:flex-row items-center gap-3 md:gap-6'>
          {/* Logo-Name */}
          <div className='flex flex-col gap-y-2'>
            <div className='w-[96px] h-[104px] rounded-lg overflow-hidden'>
              <img src={Profile2} alt='person pic' />
            </div>
            <span>
              <p className='text-[15px] font-semibold text-center text-nowrap'>
                John Smith
              </p>
              <p className='text-[12px] font-medium text-gray text-nowrap text-center'>
                Designation here
              </p>
            </span>
          </div>

          <p className='text-sm leading-6'>
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
      </div>
    </section>
  );
};

export default Teams;
