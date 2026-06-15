import { Metadata } from 'next';
import HappyBirthday from './HappyBirthday';

export const metadata: Metadata = {
  title: 'Happy 20th Birthday Twilaaaaaaaa! 🎉',
  description: 'It\'s time to celebrate!',
  openGraph: {
    title: 'Happy 20th Birthday Twilaaaaaaa! 🎉',
    description: 'Celebrate your special day !',
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