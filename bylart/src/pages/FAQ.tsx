import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

const faqs = [
  {
    question: "What are Bach flower remedies and how do they work?",
    answer:
      "Bach flower remedies are a form of alternative therapy developed in the 1930s by Dr. Edward Bach, a British physician and homeopath. These remedies are made from dilutions of flower essences, each corresponding to a specific emotional state or characteristic. Dr. Bach believed that imbalances in emotional states could lead to physical illness and that by addressing these emotional imbalances, one could promote healing and overall well-being. The system consists of 38 individual remedies. Some of the most well-known include Rescue Remedy, Mimulus for fear, Cherry Plum for irrational thoughts, and Rock Rose for terror or panic. They are typically taken orally in a diluted form. While scientific evidence is limited, many report positive experiences managing stress, anxiety, and depression.",
  },
  {
    question: "What conditions can Bach flower therapy help with?",
    answer:
      "While not intended to treat medical illnesses, Bach flower remedies help rebalance emotional states. Common conditions include: Stress (Rock Rose, Elm, Oak), Anxiety (Mimulus, Aspen, Red Chestnut), Depression (Mustard, Gentian, Sweet Chestnut), Fear and Phobias, Emotional Trauma (Star of Bethlehem, Walnut), Low Self-Esteem (Larch, Cerato, Pine), Relationship Issues (Chicory, Holly, Beech), Sleep Disturbances (White Chestnut, Agrimony), Focus and Concentration (Clematis, Wild Rose), and Life Transitions (Walnut, Honeysuckle).",
  },
  {
    question: "How do I choose the right Bach flower remedy for my needs?",
    answer:
      "Choosing involves: 1) Self-Reflection on emotions and patterns. 2) Identifying Key Emotions you want to address. 3) Reviewing Bach Flower Remedies to match symptoms. 4) Considering Combinations (up to 6-7). 5) Seeking Guidance from a practitioner if needed. 6) Starting with a Few Remedies and observing effects over time.",
  },
  {
    question: "Are Bach flower remedies safe for everyone, including children and pets?",
    answer:
      "Yes, they are generally safe, non-toxic, and have no known side effects. They are commonly used with children for issues like exam stress or fears, and with pets for calming anxiety or separation issues. While rare, monitor for individual sensitivities. It's always advisable to consult with a healthcare professional before starting, especially if pregnant, nursing, or on medication.",
  },
  {
    question: "How long does it take for Bach flower remedies to show results?",
    answer:
      "Immediate relief can occur in acute situations. For deeper emotional issues, gradual progress over days or weeks is more common. Consistency is key; it's recommended to take the remedies regularly for 3-4 weeks to assess effectiveness. Individual variability exists based on overall health and mindset.",
  },
  {
    question: "Can Bach flower therapy be used alongside other treatments or medications?",
    answer:
      "Yes, they can generally be used alongside conventional treatments. They are natural and don't interfere with the action of medications as they don't contain pharmacologically active substances. They provide supportive care for emotional well-being which can complement physical health treatments.",
  },
  {
    question: "Do Bach flower remedies have any side effects?",
    answer:
      "They are considered safe and gentle with minimal reported side effects. Some individuals may experience temporary emotional release as they address deep-seated issues, which is seen as part of the healing process. They are non-toxic and well-tolerated across all ages.",
  },
  {
    question: "Can I make my own Bach flower remedies at home?",
    answer:
      "While technically possible, it requires specialized knowledge and adherence to Dr. Bach's specific principles: selecting flowers at peak potency, sunlight infusion in spring water, preservation with brandy, and precise dilution. Most individuals are encouraged to purchase from reputable suppliers to ensure quality, consistency, and potency.",
  },
  {
    question: "Are Bach flower remedies compatible with dietary restrictions or allergies?",
    answer:
      "Yes. They do not contain gluten, dairy, nuts, or animal products, making them vegan/vegetarian friendly and suitable for those with common allergies. They are naturally sugar-free. Note: they contain a minimal amount of alcohol (brandy) as a preservative, which may be a consideration for some.",
  },
  {
    question: "What is the difference between Bach flower therapy and other forms of alternative medicine?",
    answer:
      "Bach flower therapy focuses specifically on emotional healing rather than physical symptoms. It uses simple, gentle flower dilutions and emphasizes individualized treatment based on the person's unique emotional profile. It's a non-invasive, energetic form of support.",
  },
  {
    question: "How do I know if Bach flower therapy is right for me?",
    answer:
      "If you are seeking support for emotional imbalances (stress, anxiety, fear), prefer holistic/natural approaches, or want personalized treatment that considers the mind-body connection, it may be a good fit. It's safe, non-invasive, and can be easily integrated with other health routines.",
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
