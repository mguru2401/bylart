import { useState } from 'react';
import { MapPin, Search, Star, Phone, Mail } from 'lucide-react';
import SEO from '../../components/SEO';

const therapists = [
  {
    name: 'Dr. Sarah Mitchell',
    location: 'London, UK',
    specialization: 'Anxiety & Stress Management',
    experience: '15 years',
    rating: 5,
    phone: '+44 20 1234 5678',
    email: 'sarah.mitchell@bylart.com',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Emma Thompson',
    location: 'Manchester, UK',
    specialization: 'Children & Family Therapy',
    experience: '10 years',
    rating: 5,
    phone: '+44 161 234 5678',
    email: 'emma.thompson@bylart.com',
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Dr. James Wilson',
    location: 'Edinburgh, UK',
    specialization: 'Depression & Trauma',
    experience: '20 years',
    rating: 5,
    phone: '+44 131 234 5678',
    email: 'james.wilson@bylart.com',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Rachel Phillips',
    location: 'Birmingham, UK',
    specialization: 'Relationship Issues',
    experience: '12 years',
    rating: 5,
    phone: '+44 121 234 5678',
    email: 'rachel.phillips@bylart.com',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Michael Chen',
    location: 'Bristol, UK',
    specialization: 'Workplace Stress',
    experience: '8 years',
    rating: 5,
    phone: '+44 117 234 5678',
    email: 'michael.chen@bylart.com',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Dr. Lisa Anderson',
    location: 'Leeds, UK',
    specialization: 'Grief & Loss',
    experience: '18 years',
    rating: 5,
    phone: '+44 113 234 5678',
    email: 'lisa.anderson@bylart.com',
    image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function FindTherapist() {
  const [searchLocation, setSearchLocation] = useState('');

  const filteredTherapists = therapists.filter((therapist) =>
    therapist.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
    therapist.specialization.toLowerCase().includes(searchLocation.toLowerCase())
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Find A Therapist
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Connect with certified Bach Flower practitioners near you
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by location or specialization..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTherapists.map((therapist, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{therapist.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(therapist.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span>{therapist.location}</span>
                  </div>
                  <p className="text-emerald-600 font-semibold mb-2">{therapist.specialization}</p>
                  <p className="text-gray-600 text-sm mb-4">{therapist.experience} of experience</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone size={14} className="mr-2" />
                      <span>{therapist.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail size={14} className="mr-2" />
                      <span>{therapist.email}</span>
                    </div>
                  </div>
                  <a
                    href="/therapists/book"
                    className="block w-full text-center px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-300"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredTherapists.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No therapists found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
