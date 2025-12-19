// app/blog/BlogCard.js
import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#465b2d] transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-green-100 text-[#465b2d] text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}