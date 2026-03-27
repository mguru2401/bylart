import { Flower2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="animate-spin-slow">
            <Flower2 size={64} className="text-emerald-600" />
          </div>
          <div className="absolute inset-0 animate-ping opacity-20">
            <Flower2 size={64} className="text-emerald-400" />
          </div>
        </div>
        <p className="mt-6 text-emerald-700 font-medium text-lg animate-pulse">
          Loading wellness...
        </p>
      </div>
    </div>
  );
}
