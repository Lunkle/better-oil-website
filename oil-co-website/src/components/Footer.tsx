interface FooterProps {
  contactUs: string;
  addressLabel: string;
  phoneLabel: string;
  websiteLabel: string;
  address: string;
  phone: string;
  website: string;
  copyright: string;
  icp: string;
}

export default function Footer({ contactUs, addressLabel, phoneLabel, websiteLabel, address, phone, website, copyright, icp }: FooterProps) {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h4 className="font-bold text-gray-900 mb-4">{contactUs}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>{addressLabel} {address}</li>
                    <li>{phoneLabel} {phone}</li>
                    <li>{websiteLabel} {website}</li>
                </ul>
            </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
                <span className="mr-4">{icp}</span>
            </div>
            <div>
                {copyright}
            </div>
        </div>
    </footer>
  )
}
