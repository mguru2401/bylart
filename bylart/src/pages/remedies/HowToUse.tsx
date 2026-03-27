import { Droplets, Clock, Info, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';

export default function HowToUse() {
  return (
    <>
      <SEO
        title="How to Use Bach Flower Remedies"
        description="Learn the proper methods for taking Bach Flower Remedies. Step-by-step guide on preparation, dosage, and best practices."
        keywords="how to use bach flowers, bach remedy dosage, taking flower remedies, remedy preparation"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <Droplets size={64} className="mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              How to Use Bach Flower Remedies
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Simple, effective methods for natural emotional healing
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 animate-fade-in-up">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Selecting Your Remedies
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The first step is to identify your current emotional state. Consider how you're feeling right now and what negative emotions are affecting you. You can select up to six or seven remedies at once, though many people find success with fewer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Info className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Stock Bottles</h3>
                <p className="text-gray-700 leading-relaxed">
                  Remedies come in stock bottles from the manufacturer. These are concentrated and need to be diluted before use.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Treatment Bottles</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create your personal treatment bottle by diluting stock remedies in water for daily use.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Preparation Methods
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Method 1: Treatment Bottle</h3>
                  <ol className="space-y-3 text-emerald-100">
                    <li className="flex items-start">
                      <span className="font-bold mr-3">1.</span>
                      <span>Take a clean 30ml dropper bottle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-3">2.</span>
                      <span>Fill with spring water or filtered water</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-3">3.</span>
                      <span>Add 2 drops from each selected stock bottle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-3">4.</span>
                      <span>Add a teaspoon of brandy as preservative (optional)</span>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Method 2: Direct from Stock</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    In urgent situations, you can take 2 drops from the stock bottle directly on your tongue or diluted in a glass of water.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Clock size={32} className="text-emerald-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                  Dosage & Frequency
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Dosage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Take 4 drops from your treatment bottle, four times daily. The usual times are: morning upon waking, midday, late afternoon, and bedtime.
                  </p>
                </div>
                <div className="bg-teal-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Crisis Dosage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In emergency situations, take 4 drops as often as needed, even every few minutes until you feel calmer.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Continue taking the remedies until you feel a positive change in your emotional state. This can be anywhere from a few days to several weeks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="text-yellow-600 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Bach remedies are safe for all ages, including children, pregnant women, and pets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>They have no side effects and don't interact with medications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>There is no danger of overdose</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>If you select the wrong remedy, it simply won't have any effect</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Store bottles away from direct sunlight and strong electromagnetic fields</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
