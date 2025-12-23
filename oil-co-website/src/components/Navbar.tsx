import Link from 'next/link';
import { Search, Globe, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-[#001429]">Oil Co</span>
            </Link>
            <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
              <Link href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Solutions</Link>
              <Link href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Products & Services</Link>
              <Link href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Sustainability</Link>
              <Link href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">News & Insights</Link>
              <Link href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
             <div className="hidden lg:flex items-center space-x-4">
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Careers</Link>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Investors</Link>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Partners</Link>
             </div>
             <div className="flex items-center space-x-3 text-blue-600">
                <Globe className="h-5 w-5 cursor-pointer" />
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
