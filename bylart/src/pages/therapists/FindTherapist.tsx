import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, Star, Phone, Mail, Settings, UserPlus } from "lucide-react";
import SEO from "../../components/SEO";
import { getTherapists, Therapist } from "../../utils/therapistStore";

export default function FindTherapist() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Load therapists from store (which persists in localStorage)
    setTherapists(getTherapists());
  }, []);

  const filteredTherapists = therapists.filter(
    (therapist) =>
      therapist.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      therapist.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      therapist.expertise.some((exp) => exp.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <SEO
        title="Find A Therapist"
        description="Connect with certified Bach Flower Therapy practitioners. Find qualified therapists near you for personalized emotional wellness support."
        keywords="find bach flower therapist, flower remedy practitioner, certified therapist, emotional wellness counselor"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <MapPin size={64} className="mx-auto mb-6 animate-float" />
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Find A Therapist
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Connect with certified Bach Flower practitioners near you
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by name, location, issue, or specialization..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300 text-lg shadow-lg"
                />
              </div>
            </div>

            {/* Quick entry link to admin management */}
            <div className="mt-8 flex justify-center">
              <Link
                to="/therapists/manage"
                className="inline-flex items-center space-x-2 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-sm"
              >
                <Settings size={16} className="animate-spin-slow" />
                <span>Manage Directory & Edit Therapists</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTherapists.map((therapist, index) => (
              <div
                key={therapist.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  to={`/therapists/${therapist.id}`}
                  className="block h-64 overflow-hidden relative group"
                >
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-emerald-700 px-6 py-2 rounded-full font-bold shadow-lg">
                      View Profile
                    </span>
                  </div>
                </Link>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 truncate pr-2">
                      {therapist.name}
                    </h3>
                    <Link
                      to={`/therapists/manage?edit=${therapist.id}`}
                      className="text-xs text-gray-400 hover:text-emerald-600 transition-colors p-1"
                      title="Edit this therapist"
                    >
                      <Settings size={14} />
                    </Link>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(therapist.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500 font-medium">
                      Certified BFRP
                    </span>
                  </div>

                  <div className="space-y-3 mb-8 flex-1">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-3 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm">{therapist.location}</span>
                    </div>
                    <div className="text-emerald-700 font-semibold italic text-sm line-clamp-1">
                      {therapist.specialization}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {therapist.expertise.slice(0, 3).map((exp, i) => (
                        <span
                          key={i}
                          className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium"
                        >
                          {exp}
                        </span>
                      ))}
                      {therapist.expertise.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                          +{therapist.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                      <Phone size={14} className="mr-3 flex-shrink-0" />
                      <span>{therapist.phone}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Mail size={14} className="mr-3 flex-shrink-0" />
                      <span className="truncate">{therapist.email}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to={`/therapists/${therapist.id}`}
                      className="text-center px-4 py-3 bg-emerald-50 text-emerald-700 rounded-xl font-bold text-sm hover:bg-emerald-100 transition-colors"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/therapists/book?therapist=${encodeURIComponent(therapist.name)}`}
                      className="text-center px-4 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors shadow-md"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTherapists.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 mt-8">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500 mb-4">
                No therapists found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors"
              >
                Clear Search Query
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
