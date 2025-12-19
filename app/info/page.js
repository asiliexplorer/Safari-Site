// /app/info/page.js

export default function InfoLanding() {
  return (
    <>
      <h1 className="text-3xl font-bold text-green-800 mb-6">PRACTICAL INFORMATION</h1>

      <p className="mb-6 text-gray-700 leading-relaxed">
        Whether you plan to explore Tanzania, immerse yourself in its rich culture, or experience its breathtaking natural beauty, 
        we are here to help. In this guide you’ll find practical advice for a safe and memorable trip.
      </p>

      <p className="mb-8 text-gray-700 leading-relaxed">
        Do you have questions?{' '}
        <a href="/contact" className="text-green-600 underline hover:text-green-800">
          Contact us here.
        </a>
      </p>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src="/images/group-celebrating.jpg"
          alt="Group celebrating in Tanzania"
          className="w-full h-64 object-cover"
        />
      </div>
    </>
  );
}