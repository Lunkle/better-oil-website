import Link from 'next/link';
import { Search, Globe, User, Menu } from 'lucide-react';

interface NavbarProps {
  nav: {
    home: string;
    about: string;
    news: string;
    products: string;
    culture: string;
    jobs: string;
    contact: string;
  };
  currentLang: 'en' | 'zh';
}

export default function Navbar({ nav, currentLang }: NavbarProps) {
  const toggleLang = currentLang === 'en' ? 'zh' : 'en';

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href={`/?lang=${currentLang}`} className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-[#001429]">Oil Co</span>
            </Link>
            <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
              <Link href={`/?lang=${currentLang}`} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{nav.home}</Link>
              <Link href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{nav.products}</Link>
              <Link href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{nav.news}</Link>
              <Link href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{nav.about}</Link>
              <Link href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{nav.culture}</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
             <div className="hidden lg:flex items-center space-x-4">
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">{nav.jobs}</Link>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">{nav.contact}</Link>
             </div>
             <div className="flex items-center space-x-3 text-blue-600">
                <Link href={`/?lang=${toggleLang}`} className="flex items-center cursor-pointer hover:text-blue-800">
                  <Globe className="h-5 w-5 mr-1" />
                  <span className="text-sm font-medium uppercase">{toggleLang}</span>
                </Link>
                <div className="h-5 w-px bg-gray-300 mx-2 hidden lg:block"></div>
                <Link href="#" className="hidden lg:flex items-center text-sm font-medium hover:text-blue-800">
                   <User className="h-5 w-5 mr-1" />
                   Log In
                </Link>
                <Search className="h-5 w-5 cursor-pointer" />
             </div>
             <div className="flex items-center lg:hidden">
                <Menu className="h-6 w-6 text-gray-500" />
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
