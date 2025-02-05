import React from 'react';
import StarField from './components/StarField';
import GoldenButton from './components/GoldenButton';
import Testimonial from './components/Testimonial';
import SectionTitle from './components/SectionTitle';
import FAQ from './components/FAQ';
import Navigation from './components/Navigation';
import RangoliPattern from './components/RangoliPattern';
import LeafPattern from './components/LeafPattern';
import ContactSection from './components/ContactSection';
import BabaRecommendation from './components/BabaRecommendation';
import VideoLogo from './components/VideoLogo';
import { testimonials } from './data/testimonials';
import { faqData } from './data/faqData';

function App() {
  const stats = [
    { number: "28,520+", label: "Questions Answered" },
    { number: "974+", label: "Happy Users" }
  ];

  return (
    <>
      {/* Background gradient at root level */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 -z-10" />
      
      <div className="min-h-screen text-white">
        <StarField />
        <Navigation />
        {/* Baba banner positioned below navigation */}
        <div className="mt-16">
          <BabaRecommendation />
        </div>
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <RangoliPattern />
          <LeafPattern />
          <div className="text-center z-10">
            <div className="flex flex-col items-center">
              <div className="relative w-[320px] h-[320px] sm:w-[320px] sm:h-[320px]">
                {/* Enhanced glow effects with higher contrast */}
                <div className="absolute inset-0 bg-yellow-400/80 blur-[140px] rounded-full animate-glow"></div>
                <div className="absolute inset-0 bg-yellow-300/70 blur-[100px] rounded-full animate-pulse-glow"></div>
                <div className="absolute inset-0 bg-yellow-200/60 blur-[80px] rounded-full animate-glow" style={{ animationDelay: '-3s' }}></div>
                <div className="absolute inset-0 bg-orange-400/50 blur-[60px] rounded-full animate-pulse-glow" style={{ animationDelay: '-4s' }}></div>
                <div className="absolute inset-0 bg-yellow-500/40 blur-[40px] rounded-full animate-glow" style={{ animationDelay: '-2s' }}></div>
                <div className="w-full h-full max-w-[280px] max-h-[280px] mx-auto">
                  <VideoLogo />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 sanskrit-border">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent">
                  Ask Devi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-yellow-100/90 mt-4 max-w-2xl mx-auto">
                Your Personal Vedic Astrologer,<br />Always at Your Fingertips
              </p>
              <div className="flex gap-6 justify-center mt-12">
                <GoldenButton variant="solid">Chat Now</GoldenButton>
                <GoldenButton variant="outline">Sign In</GoldenButton>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Stats */}
        <section className="py-16 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {/* About Text */}
              <div>
                <SectionTitle>From Devi, To You</SectionTitle>
                <div className="text-left mt-8">
                  <div className="space-y-4 text-lg text-purple-200">
                    <p>
                      Namaste! I'm Devi, your personal Vedic astrologer, where ancient wisdom meets modern innovation. I'm here to guide you through life's uncertainties with personalized astrological insights, whether you're seeking clarity in love, career, health, or spiritual growth. My goal is to help you live a joyful, peaceful, and successful life by combining centuries-old Vedic knowledge with the precision of cutting-edge artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-8 bg-purple-900/20 rounded-lg backdrop-blur-sm border border-purple-500/20">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 px-4 relative overflow-hidden">
          <SectionTitle>What Our Users Say</SectionTitle>
          <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-center">
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 px-4 relative">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-4 relative">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <ContactSection />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto text-center text-purple-300/60 text-sm">
            <p>© {new Date().getFullYear()} Ask Devi. All rights reserved.</p>
            <p className="mt-2">
              Combining ancient wisdom with modern technology to guide your spiritual journey.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;