import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

const faqs = [
  {
    question: 'What are Bach Flower Remedies?',
    answer: 'Bach Flower Remedies are a natural system of healing discovered by Dr. Edward Bach in the 1930s. They are made from wildflowers and are designed to address emotional and mental states rather than physical symptoms. There are 38 remedies, each targeting a specific negative emotional state.',
  },
  {
    question: 'Are Bach Flower Remedies safe?',
    answer: 'Yes, Bach flower remedies are completely safe for everyone, including children, pregnant women, elderly people, and even pets. They have no side effects, are non-addictive, and don\'t interact with any medications. There is no danger of overdose, and if you select the wrong remedy, it simply won\'t have any effect.',
  },
  {
    question: 'How long does it take for remedies to work?',
    answer: 'The time varies from person to person. Some people notice positive changes within hours or days, while others may take several weeks. The key is consistency - taking your remedies regularly as recommended. Acute emotional states typically respond more quickly than long-standing patterns.',
  },
  {
    question: 'Can I take Bach Flower Remedies with other medications?',
    answer: 'Yes, Bach flower remedies are completely safe to use alongside conventional medications and other forms of treatment. They work on an emotional/energetic level and don\'t interfere with pharmaceutical drugs. However, always inform your healthcare provider about any complementary therapies you\'re using.',
  },
  {
    question: 'How do I choose the right remedy?',
    answer: 'The key is honest self-reflection about your current emotional state. Focus on how you feel emotionally rather than physical symptoms. You can select up to 6-7 remedies at once, though often fewer work better. Consider consulting the remedy descriptions or working with a qualified practitioner for personalized guidance.',
  },
  {
    question: 'What is Rescue Remedy?',
    answer: 'Rescue Remedy is a pre-mixed combination of five Bach flower remedies: Rock Rose, Impatiens, Clematis, Star of Bethlehem, and Cherry Plum. It\'s designed for emergency situations and moments of acute stress, providing immediate emotional support during crises.',
  },
  {
    question: 'Can children take Bach Flower Remedies?',
    answer: 'Absolutely! Bach flower remedies are particularly suitable for children as they are gentle, natural, and have no side effects. Many parents find them helpful for common childhood emotional challenges like exam stress, fear of the dark, sibling rivalry, or dealing with change.',
  },
  {
    question: 'How should I take the remedies?',
    answer: 'The standard method is to take 4 drops from a treatment bottle, four times daily - typically morning, midday, late afternoon, and bedtime. Place the drops directly on your tongue or dilute in water. In crisis situations, you can take drops more frequently, even every few minutes.',
  },
  {
    question: 'Do Bach Flower Remedies expire?',
    answer: 'Stock bottles from manufacturers typically have a long shelf life if stored properly. Treatment bottles you prepare yourself should be used within 3 weeks if made with water only, or up to 3 months if preserved with brandy. Store away from direct sunlight and electromagnetic fields.',
  },
  {
    question: 'Can I use Bach Flowers for my pets?',
    answer: 'Yes! Animals respond wonderfully to Bach flower remedies. They can help with anxiety, fear, behavioral issues, and transitions. Add drops to their water bowl or directly to their mouth. Since animals are very sensitive to energy, they often respond more quickly than humans.',
  },
  {
    question: 'Is there any scientific evidence for Bach Flower Remedies?',
    answer: 'While conventional scientific studies have shown mixed results, millions of people worldwide report positive experiences with Bach flowers. They work on a vibrational/energetic level that may not be fully captured by conventional research methods. Many qualified healthcare professionals incorporate them into holistic treatment plans.',
  },
  {
    question: 'What if I choose the wrong remedy?',
    answer: 'Don\'t worry! If you select a remedy that doesn\'t match your emotional state, it simply won\'t have any effect - positive or negative. There\'s no harm in experimenting, and many people refine their selection as they become more attuned to their emotional needs.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about Bach Flower Remedies. Learn about safety, usage, effectiveness, and more."
        keywords="bach flower faq, flower remedy questions, bach therapy answers, remedy safety"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Everything you need to know about Bach Flower Therapy
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-emerald-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-emerald-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-emerald-600 flex-shrink-0" size={24} />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Still Have Questions?
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              Our qualified practitioners are here to help guide you on your healing journey
            </p>
            <a
              href="/therapists/find"
              className="inline-block px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Connect with a Practitioner
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
