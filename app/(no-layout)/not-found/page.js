import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="mb-8">
            <div className="text-9xl font-black text-white opacity-20 select-none mb-2">
              404
            </div>
            <div className="text-6xl font-black text-white">
              Page Not Found
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-white/80 text-lg leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <Link 
            href="/"
            className="inline-block group relative bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm border border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center justify-center text-lg">
              <svg 
                className="w-6 h-6 mr-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
              Go Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}