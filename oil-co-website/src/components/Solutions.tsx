const solutions = [
    "Production Optimization",
    "Recovery Enhancement",
    "Plug and Abandonment",
    "Data and AI Platform",
    "Accelerated Time to Market",
    "Performance Assurance",
    "Methane and Flaring Elimination",
    "Emissions Reduction",
    "Geothermal",
    "Carbon Capture and Storage",
    "Digital Operations",
    "Integrated Energy Solutions"
];

export default function Solutions() {
  return (
    <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">SLB Solutions</h2>
                <p className="mt-4 text-lg text-gray-500">Solving industry’s most pressing challenges</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {solutions.map((item, index) => (
                    <a key={index} href="#" className="flex items-center p-4 border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group">
                        <div className="h-2 w-2 bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-gray-800 font-medium group-hover:text-blue-700">{item}</span>
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}
