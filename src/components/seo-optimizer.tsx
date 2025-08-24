"use client";

import { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  structuredData?: object;
  canonicalUrl?: string;
}

export function SEOOptimizer({
  title,
  description,
  keywords = [],
  ogImage = "/profile_picture_carolldeabreu.jpeg",
  ogUrl,
  structuredData,
  canonicalUrl
}: SEOOptimizerProps) {
  
  // Performance optimizations
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/favicon.ico', as: 'image' },
      { rel: 'preload', href: '/profile_picture_carolldeabreu.jpeg', as: 'image' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // Service Worker registration for PWA capabilities
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }

    // Performance monitoring
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.fetchStart);
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, []);

  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={title || "Carolina de Abreu Portfolio"} />
        <meta property="og:description" content={description || "Professional Social Media Strategist, Video Editor, Copywriter & Storyteller"} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl || "https://carolina-de-abreu-portfolio.vercel.app"} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Carolina de Abreu Portfolio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || "Carolina de Abreu Portfolio"} />
        <meta name="twitter:description" content={description || "Professional Social Media Strategist, Video Editor, Copywriter & Storyteller"} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA Meta Tags */}
        <meta name="theme-color" content="#1c1511" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Carolina Portfolio" />
        <meta name="application-name" content="Carolina Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Structured Data */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}
      </Head>
    </>
  );
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Core Web Vitals monitoring - simplified for compatibility
    if ('performance' in window) {
      // Monitor basic performance metrics
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.fetchStart);
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    }

    // Resource timing
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.initiatorType === 'img' || resourceEntry.initiatorType === 'video') {
              console.log(`${resourceEntry.initiatorType} load time:`, resourceEntry.duration);
            }
          }
        });
      });
      observer.observe({ entryTypes: ['resource'] });
    }
  }, []);
}

// Image optimization hook
export function useImageOptimization() {
  useEffect(() => {
    // Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });

    return () => imageObserver.disconnect();
  }, []);
}

// Video optimization hook
export function useVideoOptimization() {
  useEffect(() => {
    // Lazy load videos
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;
          if (video.dataset.src) {
            video.src = video.dataset.src;
            video.removeAttribute('data-src');
            videoObserver.unobserve(video);
          }
        }
      });
    });

    // Observe all videos with data-src
    document.querySelectorAll('video[data-src]').forEach((video) => {
      videoObserver.observe(video);
    });

    return () => videoObserver.disconnect();
  }, []);
}
