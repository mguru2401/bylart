import { Award, BookOpen, Heart, Users, Flower, Flower2 } from "lucide-react";
import SEO from "../../components/SEO";

export default function AboutTherapists() {
  return (
    <>
      <SEO
        title="About Our Therapists"
        description="Learn about our certified Bach Flower Therapy practitioners. Discover their qualifications, expertise, and commitment to your emotional wellness."
        keywords="bach flower practitioners, certified therapists, qualified counselors, therapy credentials"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <Users size={64} className="mx-auto mb-6 animate-float" />
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              About Our Therapists
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Compassionate experts dedicated to your emotional well-being
            </p>
          </div>
        </div>
      </div>

      <section className="relative py-20 bg-white overflow-hidden">
        {/* Floating Flower Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20 animate-float">
            <Flower size={100} className="text-emerald-400" />
          </div>
          <div className="absolute top-40 right-20 opacity-15 animate-float-delayed">
            <Flower2 size={80} className="text-teal-400" />
          </div>
          <div className="absolute bottom-20 left-1/4 opacity-20 animate-float">
            <Flower2 size={120} className="text-emerald-300" />
          </div>
          <div className="absolute bottom-40 right-1/3 opacity-15 animate-float-delayed">
            <Flower size={90} className="text-teal-300" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 animate-fade-in-up">
            <div>
              <h2
                className="text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Choose Our Practitioners?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                All practitioners in the BYLART network are carefully selected
                and vetted to ensure they meet the highest standards of
                professional competence and ethical practice. Our therapists
                combine deep knowledge of Bach Flower Therapy with genuine
                compassion and a commitment to your healing journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Certified & Qualified
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All our practitioners hold recognized certifications from
                  accredited Bach Flower training programs and maintain ongoing
                  professional development.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Compassionate Care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our therapists approach each client with empathy, respect, and
                  a genuine desire to support your emotional healing and growth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Extensive Experience
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our practitioners bring years of hands-on experience working
                  with diverse clients and addressing a wide range of emotional
                  challenges.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Holistic Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We see each person as a whole being, addressing emotional,
                  mental, and spiritual aspects of wellness in our practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            What to Expect from Your Consultation
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. Initial Assessment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your therapist will take time to understand your current
                emotional state, life circumstances, and what brings you to Bach
                Flower Therapy. This is a safe, non-judgmental space for you to
                share openly.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Personalized Selection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Based on your unique situation, your practitioner will recommend
                specific Bach flower remedies tailored to your emotional needs.
                They'll explain each remedy and why it's been selected for you.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Treatment Plan
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You'll receive clear guidance on how to take your remedies, what
                to expect, and when to follow up. Your practitioner will create
                a treatment bottle for you or guide you in making your own.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                4. Ongoing Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most practitioners offer follow-up consultations to monitor your
                progress and adjust your remedy selection as your emotional
                state evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Find a qualified practitioner in your area and take the first step
            toward emotional balance
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
