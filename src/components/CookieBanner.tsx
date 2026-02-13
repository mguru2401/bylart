import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-emerald-100 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-emerald-100 rounded-full p-3">
              <Cookie className="text-emerald-600" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                We Value Your Privacy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more
                about how we use cookies in our privacy policy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300 transform hover:scale-105"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  Decline
                </button>
                <button className="px-6 py-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300">
                  Manage Preferences
                </button>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
