import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Star,
  MapPin,
  Phone,
  Mail,
  Award,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import SEO from "../../components/SEO";

// Sample data for demonstration
const therapistsData = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    location: "London, UK",
    specialization: "Anxiety & Stress Management",
    qualifications: "PhD in Holistic Health, BFRP Certified",
    expertise: ["Chronic Stress", "Panic Attacks", "Phobias", "Social Anxiety"],
    experience: "15 years",
    rating: 5,
    phone: "+44 20 1234 5678",
    email: "sarah.mitchell@bylart.com",
    image:
      "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Dr. Sarah Mitchell is a leading expert in Bach Flower Therapy with over 15 years of experience helping individuals navigate emotional challenges. She specializes in anxiety and stress management, using a compassionate approach to restore inner peace.",
    testimonials: [
      {
        text: "Dr. Sarah's guidance changed my life. The remedies she recommended helped me manage my anxiety when nothing else worked.",
        author: "James Dean",
      },
    ],
  },
  // Adding more placeholders here...
];

export default function TherapistProfile() {
  const { id } = useParams();
  // In a real app, you'd fetch by ID. Here we'll just use the first one or a placeholder.
  const therapist =
    therapistsData.find((t) => t.id === Number(id)) || therapistsData[0];

  return (
    <>
      <SEO
        title={`${therapist.name} - Certified Bach Flower Therapist`}
        description={`Profile of ${therapist.name}, specialized in ${therapist.specialization}. Read qualifications, expertise, and contact details.`}
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/therapists/find"
            className="inline-flex items-center text-emerald-100 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to Directory
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-500">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left text-white">
              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {therapist.name}
              </h1>
              <div className="flex items-center justify-center md:justify-start mb-4">
                {[...Array(therapist.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-emerald-100">Certified Practitioner</span>
              </div>
              <p className="text-xl md:text-2xl text-emerald-100 mb-6 font-medium">
                {therapist.specialization}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto md:mx-0">
                <div className="flex items-center space-x-3 text-emerald-100">
                  <MapPin size={20} />
                  <span>{therapist.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-emerald-100">
                  <Award size={20} />
                  <span>{therapist.experience} Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="mr-3 text-emerald-600" />
                  About & Background
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {therapist.bio}
                </p>
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-bold text-emerald-800 mb-3">
                    Qualifications
                  </h3>
                  <p className="text-emerald-700">{therapist.qualifications}</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="mr-3 text-emerald-600" />
                  Areas of Expertise
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {therapist.expertise.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-center font-medium border border-gray-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="mr-3 text-emerald-600" />
                  Client Testimonials
                </h2>
                <div className="space-y-6">
                  {therapist.testimonials.map((t, index) => (
                    <div
                      key={index}
                      className="p-8 bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-sm border border-emerald-100 relative"
                    >
                      <span className="absolute top-4 left-4 text-emerald-200 text-6xl font-serif">
                        "
                      </span>
                      <p className="text-gray-700 text-lg italic mb-4 relative z-10">
                        {t.text}
                      </p>
                      <p className="text-emerald-800 font-bold">— {t.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 sticky top-28">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors">
                    <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Phone</p>
                      <p className="text-lg font-bold text-gray-900">
                        {therapist.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors">
                    <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <p className="text-lg font-bold text-gray-900">
                        {therapist.email}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl">
                  Book A Session
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
