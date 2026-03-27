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
              Nurturing Balance, Blossoming Wellness through Bach Flower Therapy
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12 animate-fade-in-up">
            {/* Identity & Purpose */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-white" size={22} />
                </div>

                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Welcome to BYLART
                </h2>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to BYLART your ultimate destination for all things Bach
                flower therapy. At BYLART we are passionate about empowering
                individuals to achieve emotional well-being through the
                transformative power of Bach flower remedies. Whether you're a
                seasoned practitioner or new to this holistic approach, our
                platform is designed to be your comprehensive resource,
                providing invaluable insights into the principles, usage, and
                myriad benefits of Bach flower therapy.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-teal-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4">
                  <Target className="text-white" size={22} />
                </div>

                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Our Mission
                </h2>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is simple: to make the healing potential of Bach
                flowers accessible to everyone. Through a rich tapestry of blog
                posts, articles, and resources, we strive to educate and inspire
                our community, guiding them on a journey towards holistic
                healing and inner harmony.
              </p>
            </div>

            {/* Support Network */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white" size={22} />
                </div>

                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  More Than Just Information
                </h2>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                But we're more than just an information hub. BYLART is a beacon
                of support, connecting individuals with a network of skilled
                therapists who specialize in Bach flower therapy. Our directory
                simplifies the process of finding local practitioners, ensuring
                that you have easy access to the expertise and guidance you need
                on your path to wellness.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Whether you're seeking relief from stress, anxiety, or simply
                looking to enhance your emotional resilience, BYLART is here to
                accompany you every step of the way. Join us as we embark on a
                journey of self-discovery, healing, and growth with Bach flower
                therapy. Welcome to a world of holistic healing. Welcome to
                BYLART.
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
