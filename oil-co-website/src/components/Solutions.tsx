interface SolutionsProps {
  title: string;
  description: string;
}

export default function Solutions({ title, description }: SolutionsProps) {
  return (
    <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="prose prose-lg mx-auto text-gray-500">
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}
