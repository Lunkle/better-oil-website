const areas = [
  { title: "Decarbonizing Industry", description: "Working together to abate emissions." },
  { title: "Innovating in Oil and Gas", description: "Improving performance in the oil and gas industry." },
  { title: "Scaling New Energy Systems", description: "Accelerating the transition to low-carbon energy." },
  { title: "Delivering Digital at Scale", description: "Accelerating your time to value." },
];

export default function FocusAreas() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Focus</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl">
                Accelerating decarbonization and innovating across the entire energy landscape with leading science, engineering and digital expertise.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="group relative bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden h-80 flex flex-col justify-end p-6 cursor-pointer">
              <div className="absolute inset-0 bg-gray-200 group-hover:bg-blue-50 transition-colors">
                  {/* Placeholder for image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Image Placeholder
                  </div>
              </div>
              <div className="relative z-10 bg-white/90 p-4">
                  <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-600 transition-colors">{area.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
