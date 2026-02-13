import { Lightbulb, BookOpen, Heart, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const tips = [
  {
    icon: Heart,
    title: 'Listen to Your Emotions',
    content: 'The key to selecting the right Bach flower remedy is honest self-reflection. Take time to identify your true emotional state rather than the symptoms. For example, if you\'re experiencing insomnia, ask yourself what emotions are keeping you awake rather than just treating the sleeplessness.',
  },
  {
    icon: Sparkles,
    title: 'Less is Often More',
    content: 'While you can combine up to six or seven remedies, often fewer work better. Start with 2-3 remedies that address your most pressing emotional states. You can always adjust your selection as your emotional landscape changes.',
  },
  {
    icon: BookOpen,
    title: 'Be Patient and Consistent',
    content: 'Bach flower remedies work gently and naturally. While some people notice changes quickly, for others it may take several weeks. The key is consistency - take your remedies regularly as recommended, typically four times daily.',
  },
  {
    icon: Lightbulb,
    title: 'Adjust as You Heal',
    content: 'Your emotional needs change as you heal. What worked initially may need adjustment. If you notice a shift in your emotional state or if certain remedies no longer seem relevant, reassess your selection. Healing is a journey, not a destination.',
  },
];

const dosAndDonts = {
  dos: [
    'Trust your intuition when selecting remedies',
    'Keep a journal to track your emotional changes',
    'Take remedies consistently for best results',
    'Store your treatment bottle away from strong electromagnetic fields',
    'Consult with a qualified practitioner for complex situations',
    'Be honest about your emotional state',
    'Give remedies time to work',
  ],
  donts: [
    'Don\'t overthink your selection',
    'Don\'t expect instant miracles',
    'Don\'t mix too many remedies at once',
    'Don\'t stop taking remedies too quickly',
    'Don\'t ignore persistent emotional issues',
    'Don\'t use remedies as a substitute for professional mental health care when needed',
    'Don\'t store remedies in direct sunlight',
  ],
};

export default function ExpertAdvice() {
  return (
    <>
      <SEO
        title="Expert Advice & Tips"
        description="Professional guidance on using Bach Flower Remedies effectively. Learn best practices, tips, and expert recommendations for optimal results."
        keywords="bach flower advice, remedy tips, expert guidance, flower therapy best practices"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <Lightbulb size={64} className="mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Expert Advice & Tips
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Professional guidance for getting the most from Bach Flower Therapy
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{tip.content}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Do's
              </h2>
              <ul className="space-y-3">
                {dosAndDonts.dos.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Don'ts
              </h2>
              <ul className="space-y-3">
                {dosAndDonts.donts.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Need Personalized Guidance?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            While Bach flower remedies are safe to self-select, working with a qualified practitioner can help you achieve optimal results, especially for complex or long-standing emotional issues.
          </p>
          <a
            href="/therapists/find"
            className="inline-block px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Find A Practitioner
          </a>
        </div>
      </section>
    </>
  );
}
