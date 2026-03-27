import { Flower2, Target, Users, Heart } from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about BYLART's mission to make Bach Flower Therapy accessible to everyone. Discover our commitment to emotional wellness and holistic healing."
        keywords="about bylart, bach flower therapy mission, emotional wellness, holistic health platform"
      />

      {/* HERO SECTION */}
      <div className="pt-24 pb-12 md:pb-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <Flower2 size={56} className="mx-auto mb-6 animate-float" />

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              About BYLART
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Nurturing emotional balance and blossoming wellness through Bach
              Flower Therapy
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12 animate-fade-in-up">
            {/* Identity */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-white" size={22} />
                </div>

                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Our Identity & Purpose
                </h2>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                At BYLART, we are deeply committed to the transformative power
                of holistic healing. We believe in the profound impact of Bach
                flower therapy—a natural approach dedicated to nurturing
                emotional balance and blossoming wellness. Our platform serves
                as a comprehensive bridge for both seasoned practitioners and
                those new to the field, offering invaluable insights into the
                principles, usage, and varied benefits of flower remedies.
                Whether you are navigating stress or seeking a higher state of
                inner harmony, we are here to support your journey toward
                holistic well-being.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-teal-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4">
                  <Target className="text-white" size={22} />
                </div>

                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Our Mission for Emotional Wellness
                </h2>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Our mission is built on a simple yet powerful goal: to make the
                healing potential of Bach flowers accessible to everyone. We
                understand that emotional health is the foundation of physical
                vitality, and we strive to educate our community through a rich
                tapestry of expert articles, blog posts, and educational
                resources. By demystifying the Bach flower essences, we empower
                individuals to take control of their emotional resilience,
                fostering a community guided by self-discovery, healing, and
                growth.
              </p>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white" size={22} />
                </div>

                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  A Support Network of Expertise
                </h2>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Beyond being a hub for information, BYLART acts as a beacon of
                support for those seeking professional guidance. We bridge the
                gap between interest and action by connecting individuals with a
                network of skilled, specialized therapists. Our simplified
                directory makes it easy to find local practitioners, ensuring
                that expert expertise and compassionate care are always within
                reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="p-6">
                <div className="text-4xl sm:text-5xl mb-4">🌿</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                  Natural Healing
                </h3>
                <p className="text-sm sm:text-base text-emerald-100">
                  We believe in the power of nature to restore balance and
                  promote wellness.
                </p>
              </div>

              <div className="p-6">
                <div className="text-4xl sm:text-5xl mb-4">💚</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                  Compassionate Care
                </h3>
                <p className="text-sm sm:text-base text-emerald-100">
                  Every individual deserves personalized attention and genuine
                  support.
                </p>
              </div>

              <div className="p-6">
                <div className="text-4xl sm:text-5xl mb-4">📚</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                  Education First
                </h3>
                <p className="text-sm sm:text-base text-emerald-100">
                  Knowledge empowers people to take charge of their emotional
                  well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
