import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding the 38 Bach Flower Remedies',
    excerpt: 'A comprehensive guide to all 38 Bach flower remedies and their unique healing properties for emotional wellness.',
    author: 'Dr. Sarah Mitchell',
    date: 'February 5, 2024',
    category: 'Education',
    image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'How to Choose the Right Flower Remedy',
    excerpt: 'Learn the process of selecting the most appropriate Bach flower remedies for your emotional state and personal needs.',
    author: 'Emma Thompson',
    date: 'January 28, 2024',
    category: 'Guides',
    image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Bach Flowers for Stress and Anxiety',
    excerpt: 'Discover which Bach flower essences are most effective for managing stress, anxiety, and overwhelming emotions.',
    author: 'Dr. James Wilson',
    date: 'January 20, 2024',
    category: 'Wellness',
    image: 'https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'The Science Behind Flower Therapy',
    excerpt: 'Exploring the research and scientific understanding of how Bach flower remedies work on an energetic level.',
    author: 'Dr. Sarah Mitchell',
    date: 'January 15, 2024',
    category: 'Research',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Bach Flowers for Children',
    excerpt: 'Safe and effective ways to use Bach flower remedies to support children emotional development and well-being.',
    author: 'Emma Thompson',
    date: 'January 8, 2024',
    category: 'Family',
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Rescue Remedy: Your Emergency Essential',
    excerpt: 'Everything you need to know about the famous Rescue Remedy blend and how to use it in crisis situations.',
    author: 'Dr. James Wilson',
    date: 'December 30, 2023',
    category: 'Products',
    image: 'https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Blogs() {
  return (
    <>
      <SEO
        title="Blogs & News"
        description="Read the latest articles, guides, and news about Bach Flower Therapy. Expert insights on emotional wellness and natural healing."
        keywords="bach flower blog, flower therapy articles, emotional wellness news, natural healing guides"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Blogs & News
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Expert insights and latest updates on Bach Flower Therapy
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 group">
                    Read More
                    <ArrowRight
                      size={18}
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
