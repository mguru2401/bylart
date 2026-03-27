import { Flower2, Heart, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function Introduction() {
  return (
    <>
      <SEO
        title="Introduction to Bach Flower Remedies"
        description="Learn about Bach Flower Remedies, a natural system of healing discovered by Dr. Edward Bach. Understand how these gentle remedies can restore emotional balance."
        keywords="bach flower remedies introduction, what are bach flowers, dr edward bach, natural emotional healing"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <Flower2 size={64} className="mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Introduction to Bach Flower Remedies
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Discover the gentle, natural approach to emotional well-being
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 animate-fade-in-up">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                What Are Bach Flower Remedies?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Bach flower remedies are a system of natural healing discovered by Dr. Edward Bach in the 1930s. These gentle, safe remedies are made from wildflowers and are designed to address emotional and mental states rather than physical symptoms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Bach believed that emotional well-being is fundamental to physical health. He identified 38 basic negative emotional states and created a remedy for each one, allowing individuals to restore balance and harmony to their lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Emotional Healing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bach flowers work on the emotional and mental levels, addressing the root causes of distress rather than just symptoms.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Natural & Safe</h3>
                <p className="text-gray-700 leading-relaxed">
                  Made from wildflowers, these remedies are completely natural, non-addictive, and safe for all ages.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                How Do They Work?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Bach flower remedies work on the principle that our emotional state affects our physical health. When we experience negative emotions like fear, uncertainty, or despair, our vitality is diminished and we become more susceptible to illness.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Each remedy is prepared from a specific flower and contains the healing energy of that plant. When taken, the remedy helps to balance negative emotions, restoring peace and allowing the body's natural healing mechanisms to work more effectively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                The 38 Bach Flower Remedies
              </h2>
              <p className="text-emerald-100 leading-relaxed mb-6">
                Dr. Bach identified 38 fundamental negative emotional states and created a remedy for each. These remedies are organized into seven groups based on the nature of the emotional imbalance:
              </p>
              <ul className="space-y-2 text-emerald-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fear</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Uncertainty</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Insufficient interest in present circumstances</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Loneliness</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Oversensitivity to influences and ideas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Despondency or despair</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Over-care for the welfare of others</span>
                </li>
              </ul>
              <Link
                to="/remedies/seven-groups"
                className="inline-block mt-8 px-6 py-3 bg-white text-emerald-700 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105"
              >
                Learn About the Seven Groups
              </Link>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Getting Started
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Starting with Bach flower remedies is simple. The first step is to identify your current emotional state. You can then select the appropriate remedies or consult with a qualified practitioner who can help you create a personalized treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/remedies/how-to-use"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  <BookOpen size={20} className="mr-2" />
                  How to Use
                </Link>
                <Link
                  to="/therapists/find"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Find A Practitioner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
