import PieChart from '../assets/images/pieChart.png';

const Tokenomics = () => {
  return (
    <section className='bg-white rounded-lg p-5 mt-3 md:mt-5'>
      <p className='text-[24px] font-semibold'>Tokenomics</p>

      <p className='text-[20px] font-semibold my-3 md:my-6'>
        Initial Distribution
      </p>

      <div className='flex items-center gap-x-6'>
        <div>
          <img src={PieChart} alt='Graph' />
        </div>

        <div>
          <div className='flex items-center gap-x-2 mb-4'>
            <span className='inline-block w-3 h-3 rounded-full bg-primary'></span>
            <p className='leading-5'>Crowdsale investors: 80%</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <span className='inline-block w-3 h-3 rounded-full bg-warning'></span>
            <p className='leading-5'>Foundation: 20%</p>
          </div>
        </div>
      </div>

      <p className='font-medium leading-7 mt-3 text-[#3E424A]'>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </section>
  );
};

export default Tokenomics;
