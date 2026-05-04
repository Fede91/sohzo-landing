export type CategoryId =
  | 'arts'
  | 'culture'
  | 'economy'
  | 'health'
  | 'history'
  | 'nature'
  | 'philosophy'
  | 'politics'
  | 'psychology'
  | 'science'
  | 'society'
  | 'technology';

export type Category = {
  id: CategoryId;
  index: string;
  name: string;
  whisper: string;
  samples: string[];
  hex: string;
  cssVar: string;
  emoji: string;
};

export const categories: Category[] = [
  {
    id: 'arts',
    index: '01',
    name: 'Arts',
    whisper: 'Painters, photographers, the look of looking.',
    samples: ['The unfinished sketches of Leonardo', 'How Hilma af Klint hid her own genius', 'Sfumato, in three breaths'],
    hex: '#c0436b',
    cssVar: '--color-arts',
    emoji: '🎨',
  },
  {
    id: 'culture',
    index: '02',
    name: 'Culture',
    whisper: 'Stories the world tells itself.',
    samples: ['Why we still read Calvino', 'The lost art of letter-writing', 'Tea ceremonies as software'],
    hex: '#d18345',
    cssVar: '--color-culture',
    emoji: '🎭',
  },
  {
    id: 'economy',
    index: '03',
    name: 'Economy',
    whisper: 'How value moves and who decides.',
    samples: ['What a tulip taught us', 'The strange logic of luxury', 'Bartering, recurring interest'],
    hex: '#3f8a6c',
    cssVar: '--color-economy',
    emoji: '💼',
  },
  {
    id: 'health',
    index: '04',
    name: 'Health',
    whisper: 'The body considered closely.',
    samples: ['Why your gut keeps a clock', 'The science of slow breathing', 'A short history of sleep'],
    hex: '#dc6f5b',
    cssVar: '--color-health',
    emoji: '🌿',
  },
  {
    id: 'history',
    index: '05',
    name: 'History',
    whisper: 'Yesterday, returned with new questions.',
    samples: ['The library that burned twice', 'A Tuesday in Pompeii', 'Forgotten women of cartography'],
    hex: '#7a5a3a',
    cssVar: '--color-history',
    emoji: '📜',
  },
  {
    id: 'nature',
    index: '06',
    name: 'Nature',
    whisper: 'Wild, patient, and impossibly precise.',
    samples: ['How trees talk underground', 'The mathematics of starlings', 'Ten kinds of fog'],
    hex: '#5a9c4c',
    cssVar: '--color-nature',
    emoji: '🌱',
  },
  {
    id: 'philosophy',
    index: '07',
    name: 'Philosophy',
    whisper: "The questions that don't close.",
    samples: ['Stoicism for the morning commute', 'Why Wittgenstein liked silence', 'A short defense of doubt'],
    hex: '#4d3a8c',
    cssVar: '--color-philosophy',
    emoji: '🔮',
  },
  {
    id: 'politics',
    index: '08',
    name: 'Politics',
    whisper: 'The architecture of belonging.',
    samples: ['How a constitution gets old', 'Cities as small republics', 'The Athenian lottery, revisited'],
    hex: '#b94a3a',
    cssVar: '--color-politics',
    emoji: '🏛️',
  },
  {
    id: 'psychology',
    index: '09',
    name: 'Psychology',
    whisper: 'The mind looking at itself.',
    samples: ['What boredom is for', 'The illusion of split attention', 'Memory, edited nightly'],
    hex: '#7d4ba1',
    cssVar: '--color-psychology',
    emoji: '🧠',
  },
  {
    id: 'science',
    index: '10',
    name: 'Science',
    whisper: 'Method, wonder, and the slow chase.',
    samples: ['Why ice is stranger than water', 'The first map of the brainstem', 'A neutrino, missing'],
    hex: '#3f6cc7',
    cssVar: '--color-science',
    emoji: '🔭',
  },
  {
    id: 'society',
    index: '11',
    name: 'Society',
    whisper: 'How strangers become a we.',
    samples: ['The third place, after work', 'Walkability as moral act', 'Why we tip'],
    hex: '#3a8e8a',
    cssVar: '--color-society',
    emoji: '🏙️',
  },
  {
    id: 'technology',
    index: '12',
    name: 'Technology',
    whisper: 'Tools that change the toolmaker.',
    samples: ['What the typewriter did to prose', 'A brief life of the cursor', 'The new patience of LLMs'],
    hex: '#3a78d6',
    cssVar: '--color-technology',
    emoji: '⚡',
  },
];

export const findCategory = (id: CategoryId) =>
  categories.find((c) => c.id === id)!;
