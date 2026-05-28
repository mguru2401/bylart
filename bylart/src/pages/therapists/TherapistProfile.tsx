import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  Star,
  MapPin,
  Phone,
  Mail,
  Award,
  BookOpen,
  MessageSquare,
  ArrowRight,
  Settings
} from "lucide-react";
import SEO from "../../components/SEO";
import { getTherapistById, Therapist } from "../../utils/therapistStore";

export default function TherapistProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [therapist, setTherapist] = useState<Therapist | null>(null);

  useEffect(() => {
    if (id) {
      const data = getTherapistById(Number(id));
      if (data) {
        setTherapist(data);
      } else {
        // Fallback or error
        setTherapist(null);
      }
    }
  }, [id]);

  if (!therapist) {
    return (
      <div className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 to-white min-h-screen flex items-center justify-center">
        <div className="text-center p-8 max-w-md bg-white rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Therapist Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The therapist profile you are trying to view does not exist or has been removed.
          </p>
          <Link
            to="/therapists/find"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${therapist.name} - Certified Bach Flower Therapist`}
        description={`Profile of ${therapist.name}, specialized in ${therapist.specialization}. Read qualifications, expertise, and contact details.`}
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/therapists/find"
              className="inline-flex items-center text-emerald-100 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back to Directory
            </Link>
            
            <Link
              to={`/therapists/manage?edit=${therapist.id}`}
              className="inline-flex items-center space-x-1.5 text-xs text-emerald-100 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 px-3.5 py-1.5 rounded-lg transition-colors"
            >
              <Settings size={14} />
              <span>Edit Profile</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-500 flex-shrink-0">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800";
                }}
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
                <span className="ml-2 text-emerald-100 font-medium">Certified Bach Flower Practitioner (BFRP)</span>
              </div>
              <p className="text-xl md:text-2xl text-emerald-100 mb-6 font-semibold italic">
                {therapist.specialization}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto md:mx-0 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3 text-emerald-100 justify-center md:justify-start">
                  <MapPin size={20} className="text-emerald-300" />
                  <span>{therapist.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-emerald-100 justify-center md:justify-start">
                  <Award size={20} className="text-emerald-300" />
                  <span>{therapist.experience} Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center" style={{ fontFamily: "Georgia, serif" }}>
                  <BookOpen className="mr-3 text-emerald-600" />
                  Biography & Approach
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                  {therapist.bio}
                </p>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-bold text-emerald-800 mb-3 flex items-center">
                    <Award size={18} className="mr-2" /> Professional Qualifications
                  </h3>
                  <p className="text-emerald-700 leading-relaxed">{therapist.qualifications}</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center" style={{ fontFamily: "Georgia, serif" }}>
                  <Award className="mr-3 text-emerald-600" />
                  Specialized Areas of Expertise
                </h2>
                <p className="text-gray-600 mb-6">
                  {therapist.name} provides targeted therapeutic solutions using personalized Bach Flower remedies for the following concerns:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {therapist.expertise.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center px-4 py-3 bg-emerald-50/50 text-emerald-800 rounded-xl font-medium border border-emerald-50/80"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-3"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {therapist.testimonials && therapist.testimonials.length > 0 && (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center" style={{ fontFamily: "Georgia, serif" }}>
                    <MessageSquare className="mr-3 text-emerald-600" />
                    Reviews & Client Testimonials
                  </h2>
                  <div className="space-y-6">
                    {therapist.testimonials.map((t, index) => (
                      <div
                        key={index}
                        className="p-8 bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl shadow-sm border border-emerald-100 relative"
                      >
                        <span className="absolute top-4 left-4 text-emerald-200 text-6xl font-serif leading-none">
                          “
                        </span>
                        <p className="text-gray-700 text-lg italic mb-4 relative z-10 pl-6 leading-relaxed">
                          {t.text}
                        </p>
                        <p className="text-emerald-800 font-bold text-right">— {t.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 sticky top-28 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    Contact Details
                  </h3>
                  <p className="text-sm text-gray-500">
                    Get in touch with {therapist.name.split(" ")[0]} for a consultation.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-emerald-50/50 border border-gray-100 hover:border-emerald-100/50 transition-all duration-300">
                    <div className="bg-emerald-100/80 p-3 rounded-xl text-emerald-700">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Telephone</p>
                      <p className="text-base font-bold text-gray-900">
                        {therapist.phone}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-emerald-50/50 border border-gray-100 hover:border-emerald-100/50 transition-all duration-300">
                    <div className="bg-emerald-100/80 p-3 rounded-xl text-emerald-700">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-400 font-medium">Email Address</p>
                      <p className="text-base font-bold text-gray-900 truncate">
                        {therapist.email}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/therapists/book?therapist=${encodeURIComponent(therapist.name)}`}
                  className="block w-full text-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-emerald-200/50"
                >
                  Book A Session
                </Link>
                
                <div className="text-center text-xs text-gray-400 pt-2">
                  🛡️ Certified Bach Flower Registered Practitioner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
