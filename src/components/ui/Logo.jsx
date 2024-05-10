import data from '../../mock/data.json';

const Logo = () => {
  return (
    <div className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover flex items-center justify-center'>
      <img src={data.logo} alt='imagen del logo' className='w-full ' />
    </div>
  );
};
export default Logo;
