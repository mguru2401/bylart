import {
  ArrowRight,
  BookOpen,
  Heart,
  Info,
  ClipboardList,
  Star,
  MessageSquare,
  Book,
  Layers,
} from "lucide-react";
import SEO from "../components/SEO";

const blogSections = [
  {
    id: "intro",
    title: "Introduction to Bach Flower Remedies",
    description:
      "An overview of what Bach Flower remedies are, their history, how they work, and their benefits.",
    icon: <Info className="text-emerald-500" size={32} />,
    count: 5,
  },
  {
    id: "essences",
    title: "Understanding Each Bach Flower Essence",
    description:
      "Properties of each essence, the emotions they address, and situations where they might be beneficial.",
    icon: <Heart className="text-pink-500" size={32} />,
    count: 38,
  },
  {
    id: "how-to-use",
    title: "How to Use Bach Flower Remedies",
    description:
      "Practical guidance on dosage, methods of administration, and tips for daily routines.",
    icon: <ClipboardList className="text-blue-500" size={32} />,
    count: 4,
  },
  {
    id: "success-stories",
    title: "Success Stories",
    description:
      "Real-life testimonials and case studies illustrating the effectiveness of the remedies.",
    icon: <Star className="text-yellow-500" size={32} />,
    count: 12,
  },
  {
    id: "expert-advice",
    title: "Expert Advice and Tips",
    description:
      "Guest posts from therapists offering insights into psychological and emotional issues.",
    icon: <MessageSquare className="text-purple-500" size={32} />,
    count: 8,
  },
  {
    id: "faqs",
    title: "FAQs about Bach Flower Remedies",
    description:
      "Common questions about safety, interactions, and suitability. Linked to our FAQ page.",
    icon: <BookOpen className="text-teal-500" size={32} />,
    count: 1,
  },
  {
    id: "resources",
    title: "Resources and Further Reading",
    description:
      "Links to additional books, articles, and websites to learn more.",
    icon: <Book className="text-orange-500" size={32} />,
    count: 15,
  },
  {
    id: "seven-groups",
    title: "The 7 Bach Flower Groups",
    description:
      "Detailed insights into the seven emotional groups identified by Dr. Bach.",
    icon: <Layers className="text-emerald-600" size={32} />,
    subsections: [
      "Fear",
      "Uncertainty",
      "Lack of interest in present circumstances",
      "Loneliness",
      "Over-sensitivity",
      "Despondency & Despair",
      "Over-care for others welfare",
    ],
    count: 7,
  },
];

export default function Blogs() {
  return (
    <>
      <SEO
        title="Blogs & Resources"
        description="Explore our comprehensive Bach Flower Therapy blog. Learn about essences, usage, success stories, and the 7 Bach Flower groups."
        keywords="bach flower blog, flower remedy sections, bach essences guide, flower therapy success stories"
      />

      <div className="pt-24 pb-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Blog Sections
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Explore our structured resource library to deepen your
              understanding of Bach Flower Therapy.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogSections.map((section, index) => (
              <div
                key={section.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 group border border-emerald-50 hover:border-emerald-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block p-4 bg-emerald-50 rounded-2xl">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {section.description}
                </p>

                {section.subsections && (
                  <ul className="mb-6 space-y-2">
                    {section.subsections.map((sub, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <ArrowRight
                          size={14}
                          className="mr-2 text-emerald-400"
                        />
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {section.count} {section.count === 1 ? "Post" : "Posts"}
                  </span>
                  {section.link ? (
                    <a
                      href={section.link}
                      className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group/link"
                    >
                      View All
                      <ArrowRight
                        size={18}
                        className="ml-2 transform group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  ) : (
                    <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group/link">
                      Explore
                      <ArrowRight
                        size={18}
                        className="ml-2 transform group-hover/link:translate-x-1 transition-transform"
                      />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
