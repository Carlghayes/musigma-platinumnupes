import Hero from '@/components/hero';
import RecentEvents from '@/components/recent-events';
import Values from '@/components/values';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Values />
      <RecentEvents />
    </div>
  );
}