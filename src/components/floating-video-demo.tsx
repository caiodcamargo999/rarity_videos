"use client";

import FloatingVideo from "./floating-video-simple";

export function FloatingVideoDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Floating Video Component Demo
        </h1>
        
        <div className="text-center text-white/80 mb-12">
          <p className="text-lg mb-4">
            Inspired by Roobinium.io&apos;s homepage hero section
          </p>
          <p className="text-sm opacity-70">
            Drag the video around, hover for effects, and enjoy the autoplay experience
          </p>
        </div>

        {/* Main Floating Video - Centered */}
        <div className="flex justify-center mb-16">
          <FloatingVideo 
            videoSrc="/hero-showcase.mp4" 
            width={400} 
            height={300}
          />
        </div>

        {/* Multiple Floating Videos - Scattered */}
        <div className="relative">
          <FloatingVideo 
            videoSrc="/hero-showcase.mp4" 
            width={300} 
            height={225}
            className="top-20 left-10"
          />
          <FloatingVideo 
            videoSrc="/hero-showcase.mp4" 
            width={280} 
            height={210}
            className="top-40 right-20"
          />
          <FloatingVideo 
            videoSrc="/hero-showcase.mp4" 
            width={320} 
            height={240}
            className="bottom-20 left-20"
          />
        </div>

        {/* Features List */}
        <div className="mt-16 text-white">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Component Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3 text-amber-300">🎬 Video Features</h3>
              <ul className="space-y-2 text-sm">
                <li>• Autoplay (muted + loop)</li>
                <li>• Local video source</li>
                <li>• Responsive design</li>
                <li>• Video format support</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3 text-amber-300">✨ Visual Effects</h3>
              <ul className="space-y-2 text-sm">
                <li>• Neon glow borders</li>
                <li>• Subtle box shadows</li>
                <li>• Rounded corners</li>
                <li>• Hover animations</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3 text-amber-300">🖱️ Interaction</h3>
              <ul className="space-y-2 text-sm">
                <li>• Draggable on desktop</li>
                <li>• Touch movable on mobile</li>
                <li>• Smooth animations</li>
                <li>• Boundary constraints</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3 text-amber-300">📱 Responsive</h3>
              <ul className="space-y-2 text-sm">
                <li>• Mobile-first design</li>
                <li>• Adaptive sizing</li>
                <li>• Touch optimization</li>
                <li>• Cross-device compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
