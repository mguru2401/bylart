import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import SEO from '../../components/SEO';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    therapist: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your booking request! A therapist will contact you shortly to confirm your appointment.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Book An Appointment"
        description="Schedule your Bach Flower Therapy consultation. Book an appointment with a certified practitioner for personalized emotional wellness support."
        keywords="book bach flower appointment, schedule therapy consultation, flower remedy session, wellness booking"
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <Calendar size={64} className="mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Book An Appointment
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Take the first step toward emotional balance and wellness
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <User size={18} className="mr-2 text-emerald-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <Mail size={18} className="mr-2 text-emerald-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <Phone size={18} className="mr-2 text-emerald-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="+44 123 456 7890"
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <User size={18} className="mr-2 text-emerald-600" />
                    Preferred Therapist
                  </label>
                  <select
                    name="therapist"
                    value={formData.therapist}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select a therapist</option>
                    <option value="Dr. Sarah Mitchell">Dr. Sarah Mitchell</option>
                    <option value="Emma Thompson">Emma Thompson</option>
                    <option value="Dr. James Wilson">Dr. James Wilson</option>
                    <option value="Rachel Phillips">Rachel Phillips</option>
                    <option value="Michael Chen">Michael Chen</option>
                    <option value="Dr. Lisa Anderson">Dr. Lisa Anderson</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <Calendar size={18} className="mr-2 text-emerald-600" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <Clock size={18} className="mr-2 text-emerald-600" />
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <MessageSquare size={18} className="mr-2 text-emerald-600" />
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tell us briefly about what brings you to Bach Flower Therapy..."
                ></textarea>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Appointment Information</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Initial consultations typically last 60 minutes</li>
                  <li>• Follow-up sessions are usually 30-45 minutes</li>
                  <li>• You'll receive a confirmation email within 24 hours</li>
                  <li>• Please arrive 5 minutes early for your first appointment</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Booking Request
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Have questions before booking?{' '}
              <a href="/faq" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Check our FAQ
              </a>
            </p>
            <p className="text-gray-600">
              Or contact us directly at{' '}
              <a href="mailto:appointments@bylart.com" className="text-emerald-600 font-semibold hover:text-emerald-700">
                appointments@bylart.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
