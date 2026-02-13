import { Book, FileText, Video, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

const books = [
  {
    title: 'The Twelve Healers and Other Remedies',
    author: 'Dr. Edward Bach',
    description: 'The original work by Dr. Bach himself, detailing his discoveries and philosophy behind the flower remedies.',
  },
  {
    title: 'Bach Flower Therapy: Theory and Practice',
    author: 'Mechthild Scheffer',
    description: 'A comprehensive guide to understanding and applying Bach flower remedies in daily life.',
  },
  {
    title: 'The Bach Flower Remedies Step by Step',
    author: 'Judy Howard',
    description: 'A practical guide for beginners, making it easy to select and use remedies effectively.',
  },
];

const articles = [
  'Understanding Emotional Health Through Bach Flowers',
  'The Science Behind Vibrational Medicine',
  'Bach Flowers for Stress Management',
  'Integrating Bach Therapy into Modern Healthcare',
  'Children and Bach Flower Remedies: A Parent\'s Guide',
  'Bach Flowers for Pets: Natural Emotional Support',
];

const resources = [
  {
    icon: Book,
    title: 'Reading List',
    description: 'Curated books and publications about Bach Flower Therapy',
    items: books,
  },
  {
    icon: FileText,
    title: 'Research Articles',
    description: 'Scientific studies and clinical observations',
    items: articles.slice(0, 3),
  },
  {
    icon: Video,
    title: 'Educational Videos',
    description: 'Visual guides and practitioner interviews',
    items: articles.slice(3),
  },
];

export default function Resources() {
  return (
    <>
      <SEO
        title="Resources & Further Reading"
        description="Explore our comprehensive collection of Bach Flower Therapy resources, including books, articles, videos, and educational materials."
        keywords="bach flower resources, flower therapy books, educational materials, bach remedy guides"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <Book size={64} className="mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Resources & Further Reading
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Deepen your knowledge with our curated educational materials
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Recommended Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-emerald-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Book className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                  <p className="text-emerald-700 font-medium mb-3">{book.author}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{book.description}</p>
                  <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200">
                    Learn More
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Research & Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-600 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{article}</h3>
                    <ExternalLink className="text-emerald-600 flex-shrink-0 ml-4" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Online Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bach Centre Official Website</h3>
                <p className="text-gray-700 mb-4">
                  The official resource from the Dr. Edward Bach Centre in the UK, featuring authentic information and practitioner directories.
                </p>
                <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                  Visit Website
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Videos</h3>
                <p className="text-gray-700 mb-4">
                  Watch detailed tutorials, practitioner interviews, and case studies to enhance your understanding of Bach Flower Therapy.
                </p>
                <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                  Watch Now
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Practitioner Training</h3>
                <p className="text-gray-700 mb-4">
                  Interested in becoming a certified Bach Flower practitioner? Explore accredited training programs and certification courses.
                </p>
                <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                  Learn More
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Forum</h3>
                <p className="text-gray-700 mb-4">
                  Join our community of Bach Flower enthusiasts to share experiences, ask questions, and connect with practitioners.
                </p>
                <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                  Join Community
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
