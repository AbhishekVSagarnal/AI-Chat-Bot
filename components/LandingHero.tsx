'use client';

import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className='space-y-5 py-36 text-center font-bold text-white'>
      <div className='space-y-5 text-4xl font-extrabold md:text-6xl lg:text-7xl'>
        <h1>INTELLIGENT CHATBOT for</h1>
        <br></br>
        <div className='text-md bg-gradient-to-r from-[#9076fc] to-[#61cfeb] bg-clip-text text-transparent'>
          <TypewriterComponent
            options={{
              loop: true,
              autoStart: true,
              strings: [
                'Chat with AI',
                'Code Generation',
                'Photo Generation',
                'Video Generation',
                'Music Generation',
              ],
            }}
          />
        </div>
      </div>
      <div className='px-8 text-sm font-light text-zinc-400 sm:text-center md:text-xl lg:px-28'>
        <br></br>
      </div>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant='premium'
            className='rounded-full p-4 md:p-6 md:text-lg'
          >
            Start Generating
          </Button>
        </Link>
      </div>
      <div className='text-xm font-normal text-zinc-400 md:text-sm'>
        Explore More!!!

      </div>
    </div>
  );
};

export default LandingHero;
