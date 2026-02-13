import { Link } from 'react-router-dom';
import { Flower2, Heart, Users, BookOpen, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="BYLART is a dedicated platform for Bach Flower Therapy, providing comprehensive resources for emotional well-being and natural healing."
        keywords="bach flower therapy, emotional wellness, natural healing, flower remedies, holistic health"
      />

      <div className="relative h-screen bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-float">
            <Flower2 size={80} className="text-white" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <Flower2 size={60} className="text-white" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float">
            <Flower2 size={100} className="text-white" />
          </div>
          <div className="absolute bottom-40 right-1/3 animate-float-delayed">
            <Flower2 size={70} className="text-white" />
          </div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6 animate-fade-in-up">
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Nurture Your
                  <span className="block text-emerald-200">Emotional Balance</span>
                </h1>
                <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed">
                  Discover the transformative power of Bach Flower Therapy for holistic wellness and inner harmony
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link
                    to="/therapists/find"
                    className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white rounded-full font-semibold text-lg hover:bg-emerald-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Find A Therapist
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block animate-fade-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                  <img
                    src="/41-0-0-0-10000-10000-400.png"
                    alt="Bach Flower Therapy"
                    className="relative w-full h-auto drop-shadow-2xl animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Why Choose Bach Flower Therapy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A natural, gentle approach to emotional well-being that has helped millions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Balance</h3>
              <p className="text-gray-600 leading-relaxed">
                Restore harmony to your emotional state through natural flower essences that address negative feelings and promote positivity.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with certified Bach Flower practitioners who provide personalized treatment plans tailored to your unique needs.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Access a wealth of educational materials, success stories, and expert advice to support your healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Begin Your Journey to Wellness
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Take the first step toward emotional balance and holistic health with Bach Flower Therapy
            </p>
            <Link
              to="/remedies/introduction"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Remedies
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
