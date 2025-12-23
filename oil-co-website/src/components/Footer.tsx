export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h4 className="font-bold text-gray-900 mb-4">Helpful links</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                    <li><a href="#" className="hover:text-blue-600">Software Support</a></li>
                    <li><a href="#" className="hover:text-blue-600">Resources</a></li>
                    <li><a href="#" className="hover:text-blue-600">Events</a></li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-gray-900 mb-4">About SLB</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                    <li><a href="#" className="hover:text-blue-600">Newsroom</a></li>
                    <li><a href="#" className="hover:text-blue-600">Investor Relations</a></li>
                    <li><a href="#" className="hover:text-blue-600">Governance</a></li>
                </ul>
            </div>
             <div className="col-span-1 md:col-span-2">
                 {/* Placeholder for social or other info */}
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
                <span className="mr-4">Privacy</span>
                <span className="mr-4">Terms of Service</span>
                <span>Sitemap</span>
            </div>
            <div>
                &copy; 2025 Oil Co. All rights reserved.
            </div>
        </div>
    </footer>
  )
}
