import { Metadata } from 'next';
import HappyBirthday from './HappyBirthday';

export const metadata: Metadata = {
  title: 'Happy 20th Birthday Twila! 🎉',
  description: 'It\'s time to celebrate!',
  openGraph: {
    title: 'Happy 20th Birthday Twila! 🎉',
    description: 'Celebrate your special day with fun and excitement!',
    type: 'website',
  },
};

export default function CelebratePage() {
  // We have removed the 'getUserData()' check and the redirect.
  // It will now load instantly and permanently display her name.
  return (
    <HappyBirthday 
      personName="Twila"
    />
  );
}