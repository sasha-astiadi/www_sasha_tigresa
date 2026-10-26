import Image from 'next/image';

const Booktear = ({ className }) => {
  return (
    <div className={`hidden md:block lg:block w-full bg-transparent ${className || ''}`}>
      <Image
        unoptimized
        src="/images/booktear.png"
        alt="Page divider" 
        width={1080} 
        height={180}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Booktear;
