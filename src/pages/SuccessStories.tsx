import { Quote, Star } from 'lucide-react';
import SEO from '../components/SEO';

const stories = [
  {
    name: 'Sarah M.',
    location: 'London, UK',
    story: 'I struggled with anxiety for years, and traditional treatments only provided temporary relief. A friend recommended Bach Flower Therapy, and I was skeptical at first. After working with a qualified practitioner who created a personalized blend for me, I noticed changes within weeks. The constant worry that plagued me began to lift, and I felt more grounded. Six months later, I can honestly say Bach flowers transformed my relationship with anxiety.',
    remedy: 'Mimulus, Aspen, White Chestnut',
    rating: 5,
  },
  {
    name: 'Michael T.',
    location: 'New York, USA',
    story: 'As a high-pressure executive, burnout was becoming my reality. I felt exhausted all the time, yet couldn\'t switch off my racing mind. My therapist suggested Bach flower remedies alongside our regular sessions. The combination of Olive for exhaustion and White Chestnut for my overthinking mind worked wonders. I sleep better now, have more energy, and feel like myself again.',
    remedy: 'Olive, White Chestnut, Oak',
    rating: 5,
  },
  {
    name: 'Emma L.',
    location: 'Sydney, Australia',
    story: 'After a difficult breakup, I was consumed by grief and couldn\'t move forward. Star of Bethlehem for the shock and Honeysuckle for letting go of the past helped me heal in ways I didn\'t think possible. Bach flowers didn\'t erase my pain, but they gave me the emotional strength to process it healthily. I\'m now in a much better place and recommend this therapy to anyone going through heartbreak.',
    remedy: 'Star of Bethlehem, Honeysuckle, Willow',
    rating: 5,
  },
  {
    name: 'David K.',
    location: 'Toronto, Canada',
    story: 'My teenage daughter was struggling with exam stress and lack of confidence. We tried Bach flowers as a gentle, natural option. Larch for her confidence and Elm for feeling overwhelmed made a remarkable difference. She approached her exams with a calmer mindset and achieved results beyond her expectations. As a parent, I\'m grateful for this safe, effective solution.',
    remedy: 'Larch, Elm, Mimulus',
    rating: 5,
  },
  {
    name: 'Rachel P.',
    location: 'Dublin, Ireland',
    story: 'Chronic indecision was holding me back in every area of my life. I couldn\'t make even simple choices without agonizing over them. Scleranthus was the remedy that changed everything for me. Combined with Cerato for trusting my own judgment, I finally feel decisive and confident. Bach Flower Therapy gave me back my ability to trust myself.',
    remedy: 'Scleranthus, Cerato, Wild Oat',
    rating: 5,
  },
  {
    name: 'James W.',
    location: 'Melbourne, Australia',
    story: 'Years of carrying guilt and self-blame were weighing me down. Pine remedy addressed my tendency to blame myself for everything, while Crab Apple helped with feeling better about myself. The transformation wasn\'t overnight, but after consistent use for three months, I noticed I was kinder to myself. I now understand that self-compassion is just as important as compassion for others.',
    remedy: 'Pine, Crab Apple, Willow',
    rating: 5,
  },
];

export default function SuccessStories() {
  return (
    <>
      <SEO
        title="Success Stories"
        description="Read real success stories from people who transformed their emotional well-being with Bach Flower Therapy. Inspiring testimonials and experiences."
        keywords="bach flower success stories, testimonials, flower remedy reviews, healing experiences"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Real experiences from people who found healing through Bach Flower Therapy
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start mb-6">
                  <Quote className="text-emerald-600 flex-shrink-0 mr-4" size={32} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
                    <p className="text-gray-500 text-sm">{story.location}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{story.story}"
                </p>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Remedies Used:</p>
                  <p className="text-emerald-700 font-medium">{story.remedy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              These stories represent just a few of the countless individuals who have found relief and balance through Bach Flower Therapy. Your success story could be next.
            </p>
            <a
              href="/therapists/find"
              className="inline-block px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Find A Therapist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
