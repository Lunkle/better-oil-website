import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-[#001429] text-white">
      <div className="absolute inset-0 overflow-hidden">
        {/* Placeholder for background image */}
        <div className="w-full h-full bg-gradient-to-r from-blue-900 to-black opacity-80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl">
          We are a global technology company, driving energy innovation for a balanced planet.
        </h1>
        <div className="mt-10 flex space-x-4">
          <Link href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
            Learn More
          </Link>
          <Link href="#" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium text-white hover:bg-white hover:text-blue-900 transition-colors">
            Watch Video
          </Link>
        </div>
      </div>
    </div>
  );
}
