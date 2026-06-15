import { Metadata } from 'next';
import Message from './Message';
import { defaultCards } from '@/app/page';

export const metadata: Metadata = {
  title: 'Birthday Messages & Cards',
  description: 'Read heartfelt birthday messages and cards created just for you. Enjoy interactive games including balloon pop and virtual birthday cake!',
  openGraph: {
    title: 'Birthday Messages & Cards',
    description: 'Heartfelt birthday wishes and personalized cards await you',
    type: 'website',
  },
};

export default function MessagesPage() {
  // We removed the security check and hardcoded her age to 20
  const age = 20;

  // We are passing the default beautiful cards into the component
  const displayCards = defaultCards;

  return (
    <Message
      age={age}
      cards={displayCards}
    />
  );
}