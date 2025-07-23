import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HomePage } from '@/pages/home'
import { GeneratePage } from '@/pages/generate'
import { PreviewPage } from '@/pages/preview'
import { AboutPage } from '@/pages/about'
import { PrivacyPage } from '@/pages/privacy'
import { ContactPage } from '@/pages/contact'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="talentpitch-theme">
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/generate" element={<GeneratePage />} />
              <Route path="/preview" element={<PreviewPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App