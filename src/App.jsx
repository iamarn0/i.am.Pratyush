import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MotionConfig } from "framer-motion"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"

const Home = lazy(() => import("./pages/Home"))
const Work = lazy(() => import("./pages/Work"))
const ProjectPage = lazy(() => import("./pages/ProjectPage"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const NotFound = lazy(() => import("./pages/NotFound"))

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen w-full min-w-0 flex-col overflow-x-clip bg-bg text-ink">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="w-full min-w-0 flex-1">
            <Suspense
              fallback={
                <div className="min-h-[60vh]" role="status" aria-live="polite">
                  <span className="sr-only">Loading page</span>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:slug" element={<ProjectPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  )
}
