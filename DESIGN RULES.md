# Carolina de Abreu Portfolio - Design Rules & Guidelines

## Design Philosophy

The Carolina Portfolio embodies **sophisticated professionalism** through a warm, earthy aesthetic that reflects creativity and trust. The design prioritizes **content clarity**, **user engagement**, and **professional credibility** while maintaining a modern, accessible user experience.

## Brand Identity

### **Color Palette**

#### **Primary Colors**
```css
/* Core Brand Colors */
--brand-darkBrown: #1c1511      /* Deep, rich brown - Primary background */
--brand-lightBrown: #d7c5b6     /* Warm, creamy brown - Primary text */
--brand-accent: #2a211c         /* Medium brown - Card backgrounds */
```

#### **Extended Color System**
```css
/* Secondary & Accent Colors */
--secondary: #3a2f29            /* Medium-dark brown - Secondary elements */
--secondary-foreground: #d7c5b6 /* Light brown - Text on secondary */
--muted: #3a2f29               /* Muted brown - Subtle backgrounds */
--muted-foreground: #a09080    /* Muted text - Less important content */
--border: #4a3e37              /* Border brown - Subtle separators */
--input: #4a3e37               /* Input backgrounds */
--ring: #d7c5b6                /* Focus rings - Accessibility */
```

#### **Color Usage Rules**
- **Primary Background**: Use `--brand-darkBrown` for main content areas
- **Text Content**: Use `--brand-lightBrown` for primary text (90% opacity for hierarchy)
- **Interactive Elements**: Use `--brand-lightBrown` with hover states
- **Cards & Sections**: Use `--brand-accent` for elevated content
- **Borders & Dividers**: Use `--border` for subtle separation

### **Typography System**

#### **Font Family**
```css
/* Google Fonts - Inter Tight */
--font-skinny: 'Inter Tight', system-ui, sans-serif
```

#### **Font Weights**
```css
/* Available Weights */
font-weight: 200;  /* Extra Light - Headings, hero text */
font-weight: 300;  /* Light - Subheadings, emphasis */
font-weight: 400;  /* Regular - Body text, navigation */
```

#### **Type Scale**
```css
/* Responsive Type Scale */
.text-8xl    /* 6rem - Hero titles (mobile) */
.text-9xl    /* 7.5rem - Hero titles (tablet) */
.text-[10rem] /* 10rem - Hero titles (desktop) */
.text-[12rem] /* 12rem - Hero titles (large) */
.text-[14rem] /* 14rem - Hero titles (xl) */

.text-2xl    /* 1.5rem - Section headings */
.text-xl     /* 1.25rem - Subsection headings */
.text-lg     /* 1.125rem - Large body text */
.text-base   /* 1rem - Standard body text */
.text-sm     /* 0.875rem - Small text, captions */
.text-xs     /* 0.75rem - Extra small, labels */
```

#### **Typography Rules**
- **Hero Text**: Ultra-light weight (200) for dramatic impact
- **Headings**: Light weight (300) for hierarchy
- **Body Text**: Regular weight (400) for readability
- **Line Height**: 1.6 for body text, 1.4 for headings
- **Letter Spacing**: Wide for headings, normal for body text

## Layout & Spacing

### **Grid System**
```css
/* Container System */
.max-w-6xl    /* Main content container */
.max-w-3xl    /* Text content width */
.max-w-2xl    /* Narrow content width */

/* Responsive Breakpoints */
sm: 640px     /* Small devices */
md: 768px     /* Medium devices */
lg: 1024px    /* Large devices */
xl: 1280px    /* Extra large devices */
2xl: 1536px   /* 2X large devices */

/* Video Gallery Grid */
.base: 2      /* Mobile: 2 columns */
.sm: 3        /* Small devices: 3 columns */
.lg: 4        /* Large devices: 4 columns */
.xl: 5        /* Extra large: 5 columns */
```

### **Spacing Scale**
```css
/* Consistent Spacing Units */
.space-1      /* 0.25rem - Minimal spacing */
.space-2      /* 0.5rem - Tight spacing */
.space-3      /* 0.75rem - Compact spacing */
.space-4      /* 1rem - Standard spacing */
.space-6      /* 1.5rem - Comfortable spacing */
.space-8      /* 2rem - Section spacing */
.space-10     /* 2.5rem - Major section spacing */
.space-12     /* 3rem - Page section spacing */
.space-16     /* 4rem - Large section spacing */
.space-20     /* 5rem - Hero section spacing */
.space-24     /* 6rem - Page-level spacing */
.space-28     /* 7rem - Major page spacing */
```

### **Layout Rules**
- **Mobile First**: Design for mobile, enhance for larger screens
- **Consistent Margins**: Use spacing scale for all margins and padding
- **Content Width**: Limit text content to 65-75 characters per line
- **Section Separation**: Use consistent spacing between major sections
- **Responsive Behavior**: Stack elements vertically on mobile, side-by-side on desktop

## Component Design

### **Button Components**

#### **Primary Button**
```css
/* Primary Action Button */
.primary-button {
  background: var(--brand-lightBrown);
  color: var(--brand-darkBrown);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(215, 197, 182, 0.3);
}
```

#### **Secondary Button**
```css
/* Secondary Action Button */
.secondary-button {
  background: transparent;
  color: var(--brand-lightBrown);
  border: 2px solid var(--brand-lightBrown);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: var(--brand-lightBrown);
  color: var(--brand-darkBrown);
}
```

### **Card Components**

#### **Content Card**
```css
/* Standard Content Card */
.content-card {
  background: var(--brand-accent);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.content-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--brand-lightBrown);
}
```

#### **Video Card**
```css
/* Video Portfolio Card */
.video-card {
  background: var(--brand-accent);
  border: 1px solid var(--border);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--brand-lightBrown);
}
```

### **Form Components**

#### **Input Fields**
```css
/* Form Input Styling */
.form-input {
  background: var(--input);
  border: 2px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: var(--brand-lightBrown);
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: var(--brand-lightBrown);
  outline: none;
  box-shadow: 0 0 0 3px rgba(215, 197, 182, 0.1);
}
```

## Animation & Interactions

### **Animation Principles**
- **Purposeful Motion**: Every animation serves a functional purpose
- **Smooth Transitions**: Use 0.3s ease for standard interactions
- **Subtle Effects**: Avoid overwhelming animations
- **Performance First**: Prioritize 60fps animations
- **Enhanced Easing**: Use custom easing curves `[0.25, 0.46, 0.45, 0.94]` for professional animations
- **Optimized Staggering**: Use 0.3s intervals for staggered animations to maintain visual flow

### **Standard Animations**

#### **Hover Effects**
```css
/* Standard Hover Animation */
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Enhanced Hover Animation */
.hover-lift-enhanced {
  transition: all 0.3s ease;
}

.hover-lift-enhanced:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
}
```

#### **Fade In Animations**
```css
/* Fade In with Stagger */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### **Scroll Animations**
```css
/* Parallax Scroll Effect */
.parallax-section {
  transform: translateZ(0);
  will-change: transform;
}

.parallax-section[data-speed="0.5"] {
  transform: translateY(calc(var(--scroll-offset) * 0.5px));
}
```

### **Micro-interactions**
- **Button Hover**: Subtle lift and shadow increase
- **Card Hover**: Smooth elevation and border highlight
- **Link Hover**: Underline animation and color shift
- **Form Focus**: Border color change and subtle glow

## Visual Effects

### **Gradient Effects**

#### **Text Gradients**
```css
/* Gradient Text Effect */
.gradient-text {
  background: linear-gradient(135deg, 
    var(--brand-lightBrown) 0%, 
    var(--muted-foreground) 50%, 
    var(--brand-lightBrown) 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### **Background Gradients**
```css
/* Background Gradient */
.bg-gradient {
  background: linear-gradient(135deg, 
    var(--brand-darkBrown) 0%, 
    var(--brand-accent) 50%, 
    var(--brand-darkBrown) 100%
  );
}
```

### **Shadow System**
```css
/* Shadow Scale */
.shadow-sm    /* 0 1px 2px rgba(0, 0, 0, 0.05) */
.shadow       /* 0 1px 3px rgba(0, 0, 0, 0.1) */
.shadow-md    /* 0 4px 6px rgba(0, 0, 0, 0.1) */
.shadow-lg    /* 0 10px 15px rgba(0, 0, 0, 0.1) */
.shadow-xl    /* 0 20px 25px rgba(0, 0, 0, 0.15) */
.shadow-2xl   /* 0 25px 50px rgba(0, 0, 0, 0.25) */

/* Custom Brown Glow */
.brown-glow {
  box-shadow: 
    0 0 20px rgba(215, 197, 182, 0.3),
    0 0 40px rgba(215, 197, 182, 0.2),
    0 0 60px rgba(215, 197, 182, 0.1);
}
```

### **Border Effects**
```css
/* Animated Border */
.animated-border {
  background: linear-gradient(45deg, 
    var(--brand-lightBrown), 
    var(--muted-foreground), 
    var(--brand-lightBrown)
  );
  background-size: 200% 200%;
  animation: borderShift 3s ease-in-out infinite;
}

@keyframes borderShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

## Responsive Design

### **Breakpoint Strategy**
```css
/* Mobile First Approach */
/* Base styles for mobile (320px+) */

@media (min-width: 640px) {
  /* Small devices and up */
}

@media (min-width: 768px) {
  /* Medium devices and up */
}

@media (min-width: 1024px) {
  /* Large devices and up */
}

@media (min-width: 1280px) {
  /* Extra large devices and up */
}

@media (min-width: 1536px) {
  /* 2X large devices and up */
}

### **Responsive Typography**
```css
/* Fluid Typography */
.hero-title {
  font-size: clamp(3rem, 8vw, 14rem);
  line-height: 0.9;
  letter-spacing: -0.02em;
}
```

### **Responsive Layout**
- **Mobile**: Single column, stacked elements
- **Tablet**: Two-column grid where appropriate
- **Desktop**: Multi-column layouts with side-by-side content
- **Large**: Expanded layouts with increased whitespace

## Accessibility Guidelines

### **Color Contrast**
- **Text on Background**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Clear focus states with high contrast

### **Focus Management**
```css
/* Focus Styles */
.focus-visible {
  outline: 2px solid var(--brand-lightBrown);
  outline-offset: 2px;
  border-radius: 0.25rem;
}
```

### **Keyboard Navigation**
- **Tab Order**: Logical tab sequence through interactive elements
- **Skip Links**: Provide skip navigation for keyboard users
- **Focus Traps**: Prevent focus from leaving modal dialogs

### **Screen Reader Support**
- **Semantic HTML**: Use proper heading hierarchy and landmarks
- **Alt Text**: Descriptive alt text for all images
- **ARIA Labels**: Appropriate ARIA attributes for complex interactions

## Content Guidelines

### **Visual Hierarchy**
1. **Hero Section**: Largest text, most prominent positioning
2. **Section Headings**: Clear hierarchy with consistent sizing
3. **Body Content**: Readable text with proper line spacing
4. **Interactive Elements**: Visually distinct from static content

### **Enhanced Spacing System**
- **Section Separation**: Use 6-8rem between major sections for better visual breathing room
- **Content Groups**: Use 2-4rem between related content elements
- **Text Elements**: Use 1-2rem between text blocks for improved readability
- **Interactive Elements**: Use 0.5-1rem between buttons/links for optimal touch targets
- **Responsive Spacing**: Scale spacing progressively from mobile (base) to desktop (xl) breakpoints
- **Video Grid Spacing**: Use 6-10rem spacing between video cards for optimal visual separation
- **Modal Spacing**: Implement consistent 6rem padding for video player modals
- **Video Thumbnail Spacing**: Use 4-8rem spacing between video cards for optimal visual separation
- **Video Card Dimensions**: Minimum height of 200px (mobile), 240px (tablet), 280px (desktop)
- **Video Card Aspect Ratio**: 9:16 vertical format (Instagram Reels style)
- **Thumbnail Container**: Full width and height with `objectFit: "cover"` for proper image display
- **Camera Icon Badge**: Positioned top-left (top: 4, left: 4) with semi-transparent black background
- **Play Button Overlay**: Centered with scale animation (0.8 → 1.0) on hover

### **Video Content Structure**
- **Video Ordering**: Display videos in exact order based on numerical prefixes in filenames (1, 2, 3, etc.)
- **Title Cleanup**: Remove numerical prefixes from display titles, keeping only professional titles
- **Client Identification**: Clear client badges for each video (Jamburae, Smart Imob, Rarity)
- **Thumbnail Integration**: Use actual uploaded thumbnail images with fallback to placeholder design
- **Video Formats**: Support both .mov and .mp4 formats through API endpoints
- **API Integration**: Leverage existing `/api/videos/file/[filename]` endpoints for video serving

### **Content Spacing**
- **Section Separation**: 6-8rem between major sections
- **Content Groups**: 2-4rem between related content
- **Text Elements**: 1-2rem between text blocks
- **Interactive Elements**: 0.5-1rem between buttons/links

### **Image Guidelines**
- **Profile Picture**: High quality, professional appearance
- **Video Thumbnails**: Clear, representative of content
- **Icon Usage**: Consistent style and sizing
- **Background Images**: Subtle, non-distracting

### **Logo Symbol Background Guidelines**
- **Primary Symbol**: Use `logo_symbol_nobackground.png` as the main background element
- **Full Coverage**: Symbol must cover the entire viewport (100vw × 100vh)
- **Corner Symbols**: Additional symbols positioned at corners for complete coverage
- **Brand Integration**: Apply project color palette gradients as overlays
- **Image Processing**: Use brightness, contrast, and mix-blend-mode filters
- **Opacity Control**: Maintain 85-90% opacity for dominant visual impact
- **Responsive Scaling**: Ensure symbols scale properly across all device sizes

### **Video & Media Guidelines**
- **Play Button Functionality**: Play buttons must show videos directly on the website, not redirect to external platforms
- **Embedded Video Player**: Use native video embedding with autoplay support when possible
- **Video Controls**: Provide standard video controls (play, pause, volume, fullscreen)
- **Responsive Video**: Ensure videos scale properly across all device sizes
- **Loading States**: Show loading indicators while videos are buffering
- **Video Gallery Layout**: Use responsive grid system (2-5 columns) with 9:16 aspect ratio (Instagram Reels format)
- **Thumbnail Design**: Implement actual video thumbnails with camera icon badges and client identification
- **Modal Video Player**: Full-screen Instagram Reels style modal with vertical video format and social interaction buttons
- **Video Player Modal**: Full viewport coverage (100vw × 100vh) with centered vertical container (400px × 600px on desktop)
- **Social Interaction**: Instagram-style like, comment, and share buttons positioned on the right side
- **Video Info Display**: Gradient overlay at bottom with title, client badge, and close button
- **Loading Animation**: Spinning loader with "Loading video..." text during video buffering

### **Instagram Reels Style Video Player**
- **Modal Configuration**: Full-screen modal (`size="full"`) with complete viewport coverage
- **Video Container**: Vertical format container (400px × 600px on desktop, full viewport on mobile)
- **Video Display**: `objectFit: "contain"` for proper aspect ratio preservation without cropping
- **Social Interaction Buttons**: Right-side positioned like, comment, and share buttons with Instagram-style design
- **Like Button Functionality**: Interactive heart icon with red fill when liked, white outline when not liked
- **Button Styling**: Semi-transparent black backgrounds (`blackAlpha.400`) with hover effects (`blackAlpha.600`)
- **Video Info Overlay**: Bottom gradient overlay (`linear-gradient(transparent, rgba(0,0,0,0.8))`) for text readability
- **Close Button**: Ghost button with white text and subtle hover effects
- **Loading States**: Comprehensive error handling with console logging for debugging video loading issues

### **Enhanced Social Features**
- **Persistent Likes System**: Likes are stored in localStorage and persist across sessions, displaying actual like counts
- **Comment System**: Full-featured comment system with user names, timestamps, and moderation
- **Comment Moderation**: Automatic filtering of inappropriate language using comprehensive bad words filter
- **Share Functionality**: Native sharing API with clipboard fallback for portfolio link distribution
- **Real-time Counters**: Live display of like and comment counts on video thumbnails and modal

### **Improved Video Content Display**
- **Subtitle Integration**: Added descriptive subtitles for each video to provide context and improve user understanding
- **Better Typography Hierarchy**: Improved spacing between titles and subtitles to prevent text overlap
- **Enhanced Thumbnail Layout**: Optimized spacing and sizing for better readability of video information
- **Responsive Text Scaling**: Dynamic font sizing that adapts to different screen sizes and content lengths

## Performance Considerations

### **Animation Performance**
- **Transform & Opacity**: Use for smooth animations
- **Will-change**: Apply only when needed
- **GPU Acceleration**: Leverage transform3d for hardware acceleration

### **Image Optimization**
- **WebP Format**: Modern image formats with fallbacks
- **Responsive Images**: Appropriate sizes for different devices
- **Lazy Loading**: Defer non-critical image loading

### **CSS Optimization**
- **Critical CSS**: Inline critical styles
- **Unused CSS**: Remove unused styles in production
- **CSS Variables**: Use for consistent theming

### **Data Persistence & Storage**
- **Local Storage Integration**: User interactions (likes, comments) are automatically saved to browser localStorage
- **Session Persistence**: All social interactions persist across browser sessions and page refreshes
- **Data Structure**: Organized storage system with video IDs as keys and structured data objects
- **Future Database Ready**: Current localStorage implementation is structured for easy migration to backend database
- **Error Handling**: Comprehensive error handling for storage operations with graceful fallbacks

## Design System Maintenance

### **Component Library**
- **Documentation**: Maintain component usage examples
- **Version Control**: Track design system changes
- **Design Tokens**: Centralize color, spacing, and typography values

### **Quality Assurance**
- **Cross-browser Testing**: Ensure consistent appearance
- **Accessibility Audits**: Regular accessibility testing
- **Performance Monitoring**: Track Core Web Vitals
- **User Testing**: Gather feedback on design effectiveness

---

*These design rules ensure consistency, accessibility, and professional quality across the Carolina Portfolio while maintaining the sophisticated, warm aesthetic that reflects the brand identity.*
