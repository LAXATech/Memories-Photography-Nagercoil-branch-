import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ExactHeroSection from './components/ExactHeroSection';
import ExactFeaturedStories from './components/ExactFeaturedStories';
import ExactWhatWeCapture from './components/ExactWhatWeCapture';
import ExactStoriesPage from './components/ExactStoriesPage';
import ExactServicesPage from './components/ExactServicesPage';
import ExactPackagesPage from './components/ExactPackagesPage';
import ExactAboutPage from './components/ExactAboutPage';
import ExactContactPage from './components/ExactContactPage';
import StoriesGalleryPage from './components/StoriesGalleryPage';
import ServicesPage from './components/ServicesPage';
import PackagesPage from './components/PackagesPage';
import AboutPage from './components/AboutPage';
import BookingFormPage from './components/BookingFormPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import MobileFrameSimulator from './components/MobileFrameSimulator';
import ExactBrandLogo from './components/ExactBrandLogo';
import { X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isMobilePreviewMode, setIsMobilePreviewMode] = useState(false);

  const handleOpenBooking = (pkg = null) => {
    setSelectedPackageForBooking(pkg);
    setIsBookingModalOpen(true);
  };

  const handleSelectStory = (story) => {
    setSelectedStory(story);
    setActiveTab('stories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedStory(null);
    setActiveTab('stories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If Mobile Preview Mode is active (Frame 11 from the design)
  if (isMobilePreviewMode) {
    return (
      <div className="min-h-screen bg-[#0b0e0c] text-sand-100">
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenBooking={() => handleOpenBooking()}
          isMobilePreviewMode={isMobilePreviewMode}
          setIsMobilePreviewMode={setIsMobilePreviewMode}
        />
        <MobileFrameSimulator
          onClose={() => setIsMobilePreviewMode(false)}
          onOpenBooking={() => handleOpenBooking()}
        />
        <Footer onNavClick={(tab) => {
          setIsMobilePreviewMode(false);
          setActiveTab(tab);
        }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0e0c] text-sand-100 flex flex-col justify-between selection:bg-forest-600 selection:text-white">
      {/* Sticky Navigation only on subpages without their own integrated header */}
      {activeTab !== 'home' && activeTab !== 'stories' && activeTab !== 'services' && activeTab !== 'packages' && activeTab !== 'about' && activeTab !== 'contact' && (
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenBooking={() => handleOpenBooking()}
          isMobilePreviewMode={isMobilePreviewMode}
          setIsMobilePreviewMode={setIsMobilePreviewMode}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* EXACT HOME PAGE MATCHING REFERENCE IMAGE */}
        {activeTab === 'home' && (
          <div className="w-full">
            {/* 1. Exact Hero Section (with built-in header, links, CTA, typography, couple image & bottom location strip) */}
            <ExactHeroSection
              activeTab={activeTab}
              onNavClick={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreWork={() => {
                const storiesEl = document.getElementById('featured-stories-section');
                if (storiesEl) {
                  storiesEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setActiveTab('stories');
                }
              }}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* 2. Exact Featured Stories Section (Warm Cream Background with 4 Vertical Image Cards) */}
            <div id="featured-stories-section">
              <ExactFeaturedStories
                onViewAllStories={() => {
                  setActiveTab('stories');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectStory={handleSelectStory}
              />
            </div>

            {/* 3. Exact What We Capture Section (Dark Background, Left-aligned Title, 5 Category Columns with Custom SVGs & Borders) */}
            <ExactWhatWeCapture onSelectCategory={handleSelectCategory} />
          </div>
        )}

        {/* 02. EXACT STORIES / GALLERY LISTING PAGE MATCHING REFERENCE IMAGE */}
        {activeTab === 'stories' && (
          <ExactStoriesPage
            activeTab={activeTab}
            onNavClick={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={() => handleOpenBooking()}
            onSelectStory={(story) => {
              setLightboxImage(story.src);
            }}
            onOpenLightbox={(img) => setLightboxImage(img)}
          />
        )}

        {/* 04. EXACT SERVICES PAGE MATCHING REFERENCE IMAGE */}
        {activeTab === 'services' && (
          <ExactServicesPage
            activeTab={activeTab}
            onNavClick={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={() => handleOpenBooking()}
            onSelectService={(serviceId) => {
              setActiveTab('stories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 05. EXACT PACKAGES PAGE MATCHING REFERENCE IMAGE */}
        {activeTab === 'packages' && (
          <ExactPackagesPage
            activeTab={activeTab}
            onNavClick={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={(pkg) => handleOpenBooking(pkg)}
          />
        )}


        {/* 07. EXACT ABOUT US PAGE MATCHING REFERENCE IMAGE */}
        {activeTab === 'about' && (
          <ExactAboutPage
            activeTab={activeTab}
            onNavClick={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {/* 10. EXACT CONTACT / ENQUIRY PAGE MATCHING REFERENCE IMAGE */}
        {activeTab === 'contact' && (
          <ExactContactPage
            activeTab={activeTab}
            onNavClick={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Main Footer */}
      <Footer onNavClick={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Global Booking / Availability Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#070a08]/90 backdrop-blur-md p-4 sm:p-6 animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-4xl my-8">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-5 right-5 z-30 p-2 rounded-full bg-[#141715] text-sand-300 hover:text-white border border-white/15 hover:border-[#C6A87D] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[90vh] overflow-y-auto rounded-3xl custom-scrollbar">
              <BookingFormPage
                initialPackage={selectedPackageForBooking}
                onClose={() => setIsBookingModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <LightboxModal
          imageSrc={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}
