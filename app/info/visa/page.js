// /app/info/visa/page.js

export const metadata = {
  title: 'Visa Tanzania | Practical Information',
  description: 'How to get a visa for Tanzania as a tourist.',
};

export default function VisaPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-green-800 mb-4">Visa Tanzania</h1>

      <img
        src="/images/visa-tanzania.jpg"
        alt="Tanzania visa stamp"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <div className="text-gray-700 leading-relaxed">
        <p className="mb-4">
          All travelers visiting Tanzania must obtain a visa unless they are from a visa-exempt country.
          You can apply for an e-Visa online before your trip or get a visa on arrival at the airport.
        </p>
        <p>
          The e-Visa process takes 3–5 business days. Make sure your passport is valid for at least 6 months beyond your entry date.
        </p>
        {/* Add more content as needed */}
      </div>
    </>
  );
}