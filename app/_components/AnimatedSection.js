"use client"
import { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ 
  children, 
  animation = 'fadeUp', 
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = '',
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const animations = {
    fadeUp: {
      hidden: 'opacity-0 translate-y-16',
      visible: 'opacity-100 translate-y-0'
    },
    fadeDown: {
      hidden: 'opacity-0 -translate-y-16',
      visible: 'opacity-100 translate-y-0'
    },
    fadeLeft: {
      hidden: 'opacity-0 translate-x-16',
      visible: 'opacity-100 translate-x-0'
    },
    fadeRight: {
      hidden: 'opacity-0 -translate-x-16',
      visible: 'opacity-100 translate-x-0'
    },
    fadeIn: {
      hidden: 'opacity-0',
      visible: 'opacity-100'
    },
    scaleUp: {
      hidden: 'opacity-0 scale-90',
      visible: 'opacity-100 scale-100'
    },
    scaleDown: {
      hidden: 'opacity-0 scale-110',
      visible: 'opacity-100 scale-100'
    },
    rotateIn: {
      hidden: 'opacity-0 rotate-12',
      visible: 'opacity-100 rotate-0'
    },
    blurIn: {
      hidden: 'opacity-0 blur-sm',
      visible: 'opacity-100 blur-0'
    },
    slideUp: {
      hidden: 'opacity-0 translate-y-24',
      visible: 'opacity-100 translate-y-0'
    },
    bounceIn: {
      hidden: 'opacity-0 scale-50',
      visible: 'opacity-100 scale-100'
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once && hasAnimated) return;
          setIsVisible(true);
          setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once, hasAnimated]);

  const selectedAnimation = animations[animation] || animations.fadeUp;
  const delayStyle = { transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? selectedAnimation.visible : selectedAnimation.hidden} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

