interface NewsItem {
  date: string;
  title: string;
}

interface FocusAreasProps {
  title: string;
  readMore: string;
  items: NewsItem[];
}

export default function FocusAreas({ title, readMore, items }: FocusAreasProps) {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="group relative bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden p-6 cursor-pointer flex flex-col h-full">
              <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              </div>
              <div className="mt-4 text-blue-600 font-medium text-sm group-hover:underline">
                {readMore} &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
