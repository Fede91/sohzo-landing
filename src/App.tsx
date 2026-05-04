import { Hero } from './components/Hero';
import { DailyRitual } from './components/DailyRitual';
import { TwelveWorlds } from './components/TwelveWorlds';
import { Threshold } from './components/Threshold';
import { TwoModes } from './components/TwoModes';
import { InterestGrowth } from './components/InterestGrowth';
import { Plus } from './components/Plus';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main>
      {/* Discovery zone — morning paper, open and bright */}
      <Hero />
      <DailyRitual />
      <TwelveWorlds />

      {/* The crossing — hard cut, editorial sentence, chapter break */}
      <Threshold />

      {/* Introspective zone — dark, focused, analytical */}
      <div className="dark-zone">
        <TwoModes />
        <InterestGrowth />
        <Plus />
        <Footer />
      </div>
    </main>
  );
}
