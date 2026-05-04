import { Hero } from './components/Hero';
import { DailyRitual } from './components/DailyRitual';
import { TwelveWorlds } from './components/TwelveWorlds';
import { TwoModes } from './components/TwoModes';
import { InterestGrowth } from './components/InterestGrowth';
import { Plus } from './components/Plus';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main>
      <Hero />
      <DailyRitual />
      <TwelveWorlds />
      <TwoModes />
      <InterestGrowth />
      <Plus />
      <Footer />
    </main>
  );
}
