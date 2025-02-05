'use client';

import { useRouter } from 'next/navigation';
import { useAuthStatus } from '@/hooks/useAuthStatus';
import { useTimeOnPage, trackEvent, useSectionVisibility } from '@/hooks/useAnalytics';
import { track } from '@vercel/analytics';
import { auth } from '@/lib/firebase';
import React, { useMemo, useEffect, useRef } from 'react';

// Components
import StarField from '@/components/StarField';
import Logo from '@/components/Logo';
import GoldenButton from '@/components/GoldenButton';
import Testimonial from '@/components/Testimonial';
import SectionTitle from '@/components/SectionTitle';
import FAQ from '@/components/FAQ';
import Navigation from '@/components/Navigation';
import RangoliPattern from '@/components/RangoliPattern';
import LeafPattern from '@/components/LeafPattern';
import ContactSection from '@/components/ContactSection';
import PageTransition from '@/components/PageTransition';
import AnimatedStat from '@/components/AnimatedStat';
import BabaRecommendation from '@/components/BabaRecommendation';

// Data
import { testimonials } from '@/data/testimonials';
import { faqData } from '@/data/faqData';

const MemoizedStarField = React.memo(StarField);

export default function Home() {
  // ... (previous code remains the same until return statement)

  return (
    <PageTransition>
      <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#220038] via-[#150030] to-[#220038] text-white">
        <MemoizedStarField {...starFieldProps} />
        <BabaRecommendation />
        <Navigation />
        
        {/* Rest of the component remains the same */}
        {/* ... */}
      </div>
    </PageTransition>
  );
}