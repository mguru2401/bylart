import { useState } from 'react';
import { Search } from 'lucide-react';
import SEO from '../../components/SEO';

const essences = [
  { name: 'Agrimony', use: 'Mental torture behind a cheerful face', category: 'Oversensitivity' },
  { name: 'Aspen', use: 'Vague unknown fears', category: 'Fear' },
  { name: 'Beech', use: 'Intolerance', category: 'Over-care' },
  { name: 'Centaury', use: 'Weak willed, easily exploited', category: 'Oversensitivity' },
  { name: 'Cerato', use: 'Lack of trust in own decisions', category: 'Uncertainty' },
  { name: 'Cherry Plum', use: 'Fear of losing control', category: 'Fear' },
  { name: 'Chestnut Bud', use: 'Failure to learn from mistakes', category: 'Insufficient Interest' },
  { name: 'Chicory', use: 'Selfish, possessive love', category: 'Over-care' },
  { name: 'Clematis', use: 'Dreaming of the future', category: 'Insufficient Interest' },
  { name: 'Crab Apple', use: 'The cleansing remedy, self-hatred', category: 'Despondency' },
  { name: 'Elm', use: 'Overwhelmed by responsibility', category: 'Despondency' },
  { name: 'Gentian', use: 'Discouragement after setback', category: 'Uncertainty' },
  { name: 'Gorse', use: 'Hopelessness and despair', category: 'Uncertainty' },
  { name: 'Heather', use: 'Self-centeredness, self-concern', category: 'Loneliness' },
  { name: 'Holly', use: 'Hatred, envy, and jealousy', category: 'Oversensitivity' },
  { name: 'Honeysuckle', use: 'Living in the past', category: 'Insufficient Interest' },
  { name: 'Hornbeam', use: 'Procrastination, tiredness', category: 'Uncertainty' },
  { name: 'Impatiens', use: 'Impatience', category: 'Loneliness' },
  { name: 'Larch', use: 'Lack of confidence', category: 'Despondency' },
  { name: 'Mimulus', use: 'Fear of known things', category: 'Fear' },
  { name: 'Mustard', use: 'Deep gloom for no reason', category: 'Insufficient Interest' },
  { name: 'Oak', use: 'Plodding perseverance', category: 'Despondency' },
  { name: 'Olive', use: 'Exhaustion', category: 'Insufficient Interest' },
  { name: 'Pine', use: 'Guilt', category: 'Despondency' },
  { name: 'Red Chestnut', use: 'Over-concern for others', category: 'Fear' },
  { name: 'Rock Rose', use: 'Terror and fright', category: 'Fear' },
  { name: 'Rock Water', use: 'Self-denial, rigidity', category: 'Over-care' },
  { name: 'Scleranthus', use: 'Inability to choose', category: 'Uncertainty' },
  { name: 'Star of Bethlehem', use: 'Shock', category: 'Despondency' },
  { name: 'Sweet Chestnut', use: 'Extreme mental anguish', category: 'Despondency' },
  { name: 'Vervain', use: 'Over-enthusiasm', category: 'Over-care' },
  { name: 'Vine', use: 'Dominance and inflexibility', category: 'Over-care' },
  { name: 'Walnut', use: 'Protection from change', category: 'Oversensitivity' },
  { name: 'Water Violet', use: 'Pride and aloofness', category: 'Loneliness' },
  { name: 'White Chestnut', use: 'Unwanted thoughts', category: 'Insufficient Interest' },
  { name: 'Wild Oat', use: 'Uncertainty over direction', category: 'Uncertainty' },
  { name: 'Wild Rose', use: 'Resignation, apathy', category: 'Insufficient Interest' },
  { name: 'Willow', use: 'Self-pity and resentment', category: 'Despondency' },
];

export default function Essences() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Fear', 'Uncertainty', 'Insufficient Interest', 'Loneliness', 'Oversensitivity', 'Despondency', 'Over-care'];

  const filteredEssences = essences.filter((essence) => {
    const matchesSearch = essence.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         essence.use.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || essence.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Understanding Each Bach Flower Essence"
        description="Explore all 38 Bach Flower Essences and their uses. Find the right remedy for your emotional state and discover their healing properties."
        keywords="bach flower essences, 38 remedies, flower remedy list, emotional healing remedies"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              The 38 Bach Flower Essences
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Discover the perfect remedy for your emotional state
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or emotional state..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEssences.map((essence, index) => (
              <div
                key={essence.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{essence.name}</h3>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    {essence.category}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{essence.use}</p>
              </div>
            ))}
          </div>

          {filteredEssences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No essences found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
