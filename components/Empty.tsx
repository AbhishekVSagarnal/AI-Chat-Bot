import Image from 'next/image';

interface EmptyProps {
  label: string;
}

const Empty: React.FC<EmptyProps> = ({ label }) => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>

      <p className='text-center text-sm text-muted-foreground'>{label}</p>
    </div>
  );
};

export default Empty;
