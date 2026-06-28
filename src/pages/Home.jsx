import { useEffect } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import MarqueeStrip from '../components/MarqueeStrip';
import WhySaverites from '../components/WhySaverites';
import DownloadSection from '../components/DownloadSection';
import CTASection from '../components/CTASection';
import AvatarShowcase from '../components/AvatarShowcase';

const Home = () => {
  // Simple intersection observer to add animation classes on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-fade-up');
    elements.forEach((el) => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO 
        title="Home"
        description="Save your memories, stories, documents, and notes forever in a secure, digital environment. Download the Saverites Android app."
        keywords="digital memories, secure storage, personal notes, journal app, android download, save documents"
      />
      
      <Hero />
      
      <FeatureSection 
        title="The Private Lock"
        description="Keep your sensitive documents and private memories strictly confidential. Secure them behind a biometric lock or password, ensuring only you have access."
        type="phone"
        reverse={false}
      />
      
      <FeatureSection 
        title="Social Feed & Discovery"
        description="Want to share your discoveries? Post your saved items to our vibrant social feed. Let others browse, engage, and find inspiration from what you share."
        listItems={[
          "Share curated collections",
          "Discover new products & ideas",
          "Engage with the community"
        ]}
        type="social_feed"
        reverse={true}
      />

      <FeatureSection 
        title="Save Everything & Anything"
        description="A secure space to store all your digital assets, from PDFs and photos to voice notes and videos."
        type="animation"
        reverse={false}
      />

      <FeatureSection 
        title="Smart Reminders"
        description="Never forget what you saved. Whether it's a product, an article, or a memory, Saverites gently reminds you of your saved items a week or a month later."
        type="notification"
        reverse={true}
      />

      <AvatarShowcase />


      <MarqueeStrip />
      
      <WhySaverites />
      
      <DownloadSection />
      
      <CTASection />
    </>
  );
};

export default Home;
