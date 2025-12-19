"use client"
import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ className = "", showText = true, size = "default", isScrolled = false, textColor = "#774433" }) => {
  const sizeClasses = {
    small: "w-16 h-16 sm:w-20 sm:h-20",
    default: isScrolled ? "w-20 h-20 sm:w-24 sm:h-24" : "w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32",
    large: "w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
  };

  return (
    <Link 
      href="/" 
      className={`flex items-center justify-start group relative ${className}`}
      aria-label="Asiliexplorer Safaris - Home"
    >
      {/* Logo Container - Clean and Simple */}
      <div className={`${sizeClasses[size]} relative shrink-0`}>
        <div className="w-full h-full relative transition-all duration-300 group-hover:scale-105">
          <Image
            src="/logo.png"
            alt="Asiliexplorer Safaris Logo"
            fill
            className="object-contain transition-all duration-300"
            priority
            sizes="(max-width: 768px) 112px, 128px"
            quality={95}
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;

