import { Metadata } from 'next';
import GoodBye from './GoodBye';

export const metadata: Metadata = {
  title: 'See You Again! | Thank You',
  description: 'Thank you for celebrating this special birthday with us. Your presence made it memorable. See you at the next celebration!',
  openGraph: {
    title: 'See You Again!',
    description: 'Thank you for celebrating with us!',
    type: 'website',
  },
};

export default function GoodbyePage() {
  // We have removed the security check and redirect.
  // Hardcoding Twila's name so the page loads perfectly.
  return (
    <GoodBye 
      personName="Twila"
    />
  );
}