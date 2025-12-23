interface CompanyProfileProps {
  label: string;
  title: string;
  description: string[];
}

export default function CompanyProfile({ label, title, description }: CompanyProfileProps) {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">{label}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-left space-y-4">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
