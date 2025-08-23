# Carolina de Abreu Portfolio - Technical Architecture

## System Architecture Overview

The Carolina Portfolio is built using a modern **Next.js 15** architecture with the App Router pattern, implementing a component-based design system with TypeScript, Chakra UI, and Tailwind CSS. The system follows a layered architecture approach with clear separation of concerns.

## Architecture Layers

### 🏗️ **Presentation Layer (UI Components)**
```
src/components/
├── ui/                    # Base UI components (shadcn/ui style)
│   ├── button.tsx        # Reusable button component
│   └── dropdown-menu.tsx # Navigation dropdown
├── bio-*.tsx             # Bio page specific components
├── [feature].tsx         # Feature-specific components
└── providers.tsx         # Context providers wrapper
```

### 🌐 **Application Layer (Pages & Routes)**
```
src/app/
├── layout.tsx            # Root layout with providers
├── page.tsx              # Root redirect to /socialmedia
├── socialmedia/          # Main portfolio page
│   └── page.tsx         # Portfolio content layout
├── bio/                  # Bio page route
│   └── page.tsx         # Bio page content
└── api/                  # API routes
    └── videos/           # Video serving endpoints
```

### 🔧 **Business Logic Layer (Services & Hooks)**
```
src/lib/
├── i18n.tsx             # Internationalization system
├── utils.ts             # Utility functions
└── [services]/          # Business logic services
```

### 📁 **Data Layer (Static Assets & API)**
```
videos/                   # Static video files
public/                   # Static assets (images, icons)
```

## Core Architecture Patterns

### **1. Component Composition Pattern**
```typescript
// Example: Hero component composition
export function Hero() {
  return (
    <section>
      <ProfilePicture />
      <GradientText />
      <ScrollIndicator />
    </section>
  );
}
```

### **2. Provider Pattern**
```typescript
// Centralized provider management
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <I18nProvider>{children}</I18nProvider>
    </ChakraProvider>
  );
}
```

### **3. Custom Hook Pattern**
```typescript
// Internationalization hook
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
```

### **4. API Route Pattern**
```typescript
// Dynamic video discovery API
export async function GET() {
  const videosDir = join(process.cwd(), "videos");
  const files = readdirSync(videosDir);
  // Process and return video metadata
}
```

## Technology Stack Architecture

### **Frontend Framework**
- **Next.js 15**: App Router with server-side rendering capabilities
- **React 19**: Latest React with concurrent features
- **TypeScript**: Static type checking and developer experience

### **UI Component System**
- **Chakra UI**: Component library with custom theming
- **Tailwind CSS v4**: Utility-first CSS framework
- **Framer Motion**: Animation library for micro-interactions

### **State Management**
- **React Context**: Global state for internationalization
- **Local Storage**: Persistent user preferences
- **Component State**: Local component state management

### **Styling Architecture**
- **CSS Custom Properties**: Design token system
- **CSS Modules**: Component-scoped styling
- **Responsive Design**: Mobile-first approach with breakpoints

## Data Flow Architecture

### **1. Video Content Flow**
```
videos/ → API Route → Component State → UI Rendering
   ↓           ↓           ↓           ↓
Static    GET /api/    useState()    Video Grid
Files     videos       videos[]      Display
```

### **2. Internationalization Flow**
```
User Action → Locale Change → Context Update → Component Re-render
     ↓            ↓            ↓            ↓
Language    setLocale()    I18nContext   t("key")
Selection   (locale)       Update        Translation
```

### **3. Component Rendering Flow**
```
Layout → Providers → Page → Components → UI Elements
  ↓         ↓        ↓        ↓          ↓
Root    Context   Route    Feature    Interactive
Layout  Wrapper   Content  Sections   Elements
```

## API Architecture

### **Video Serving API**
```typescript
// Route: /api/videos
export async function GET() {
  // 1. Read videos directory
  // 2. Filter video files
  // 3. Generate metadata
  // 4. Return JSON response
}

// Route: /api/videos/file/[filename]
export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  // 1. Validate filename
  // 2. Stream video file
  // 3. Set proper headers
}
```

### **API Design Principles**
- **RESTful**: Standard HTTP methods and status codes
- **Error Handling**: Comprehensive error responses
- **Performance**: Efficient file serving and caching
- **Security**: Input validation and sanitization

## Component Architecture

### **Component Hierarchy**
```
App Layout
├── Providers
│   ├── ChakraProvider
│   └── I18nProvider
├── Header
├── Hero Section
├── About Section
├── Videos Section
├── Reels Section
└── Contact Section
```

### **Component Categories**

#### **Layout Components**
- `layout.tsx`: Root application layout
- `providers.tsx`: Context providers wrapper
- `header.tsx`: Navigation and branding

#### **Content Components**
- `hero.tsx`: Main introduction section
- `about.tsx`: Professional background
- `videos.tsx`: Portfolio video showcase
- `reels.tsx`: Social media content
- `contact.tsx`: Contact information

#### **UI Components**
- `ui/button.tsx`: Reusable button component
- `ui/dropdown-menu.tsx`: Navigation dropdown
- `gradient-text.tsx`: Text with gradient effects
- `profile-picture.tsx`: Profile image component

#### **Animation Components**
- `floating-shapes.tsx`: Background animations
- `parallax-section.tsx`: Scroll-based animations
- `floating-video.tsx`: Video hover effects

## State Management Architecture

### **Global State (Context)**
```typescript
// I18n Context
type I18nContextValue = {
  locale: Locale;
  t: (key: keyof Dictionary) => string;
  setLocale: (next: Locale) => void;
  dir: "ltr" | "rtl";
};
```

### **Local State (Hooks)**
```typescript
// Component-level state
const [videos, setVideos] = useState<VideoItem[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
```

### **Persistent State (Storage)**
```typescript
// Local storage for user preferences
useEffect(() => {
  const stored = localStorage.getItem("locale") as Locale | null;
  if (stored && ["en", "pt", "es", "ar"].includes(stored)) {
    setLocale(stored);
  }
}, []);
```

## Performance Architecture

### **Optimization Strategies**
1. **Code Splitting**: Automatic route-based code splitting
2. **Image Optimization**: Next.js built-in image optimization
3. **Font Optimization**: Google Fonts with display swap
4. **Bundle Optimization**: Turbopack for fast development builds

### **Caching Strategy**
- **Static Assets**: Long-term caching for videos and images
- **API Responses**: Client-side caching for video metadata
- **User Preferences**: Local storage for language settings

### **Loading Strategies**
- **Suspense Boundaries**: Component-level loading states
- **Progressive Enhancement**: Core content first, enhancements later
- **Lazy Loading**: Video content loaded on demand

## Security Architecture

### **Input Validation**
- **API Routes**: File path validation and sanitization
- **User Input**: Type-safe form handling
- **File Access**: Restricted access to video directory

### **Content Security**
- **CORS**: Proper cross-origin resource sharing
- **File Types**: Restricted to video file formats
- **Path Traversal**: Prevention of directory traversal attacks

## Deployment Architecture

### **Build Process**
```bash
# Development
npm run dev          # Turbopack development server

# Production
npm run build        # Optimized production build
npm run start        # Production server
```

### **Environment Configuration**
- **Development**: Hot reloading with Turbopack
- **Production**: Optimized builds with tree shaking
- **Environment Variables**: Configuration management

### **Hosting Platform**
- **Vercel**: Next.js-optimized hosting
- **Edge Functions**: Global CDN distribution
- **Static Generation**: Pre-rendered pages for performance

## Monitoring & Analytics

### **Performance Monitoring**
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Bundle Analysis**: Webpack bundle analyzer
- **Error Tracking**: Client-side error monitoring

### **User Analytics**
- **Page Views**: Route-based analytics
- **User Behavior**: Interaction tracking
- **Conversion Metrics**: Contact form submissions

## Future Architecture Considerations

### **Scalability Improvements**
1. **Micro-frontends**: Component-based scaling
2. **API Gateway**: Centralized API management
3. **CDN Integration**: Global content distribution
4. **Database Integration**: Dynamic content management

### **Performance Enhancements**
1. **Service Workers**: Offline capabilities
2. **WebAssembly**: Performance-critical operations
3. **Edge Computing**: Serverless function optimization
4. **Real-time Updates**: WebSocket integration

---

*This architecture provides a solid foundation for a modern, scalable portfolio website with excellent performance, maintainability, and user experience.*
