import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getUserData } from '@/actions/getUserData';
import GoodBye from './GoodBye';

export const metadata: Metadata = {
  title: 'See You Again! | Thank You',
  description: 'Thank you for accepting me to be part of your lovely life. Your presence made it memorable. i have enjoyed every fucking second of it !',
  openGraph: {
    title: 'Age gracefullyy!',
    description: 'Thank you for being a part of my life!',
    type: 'website',
  },
};

export default async function GoodbyePage() {
  const userData = await getUserData();
  
  if (!userData) {
    redirect('/');
  }

  return (
    <GoodBye 
      personName={userData.personName}
    />
  );
}
