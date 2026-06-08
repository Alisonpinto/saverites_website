import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import MarqueeStrip from '../components/MarqueeStrip';
import WhyMemoria from '../components/WhyMemoria';
import CTASection from '../components/CTASection';

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
      <Hero />
      
      <FeatureSection 
        title="Relive Every Memory"
        description="Browse memories, posts, stories, and important life moments all in one beautiful feed."
        type="phone"
        reverse={false}
      />
      
      <FeatureSection 
        title="Save Everything"
        description="A secure space to store all your digital assets."
        listItems={[
          "Documents & PDFs",
          "Voice Notes",
          "High-res Photos",
          "Important life milestones",
          "Secured personal information"
        ]}
        type="video"
        reverse={true}
      />

      <MarqueeStrip />
      
      <WhyMemoria />
      
      <CTASection />
    </>
  );
};

export default Home;
