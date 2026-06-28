import { useEffect, useRef, useState } from 'react';
import styles from './SocialFeedAnimation.module.css';

const feedItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&h=500', height: 200, title: 'Fashion Inspo' },
  { id: 2, src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400&h=400', height: 160, title: 'Jacket Style' },
  { id: 3, src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=400&h=600', height: 240, title: 'Panda Cool' },
  { id: 4, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=450', height: 180, title: 'Portrait' },
  { id: 5, src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=400&h=450', height: 180, title: 'Sneakers' },
  { id: 6, src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400&h=500', height: 200, title: 'OOTD' },
];

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.actionIcon}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.actionIcon}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.actionIcon}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.bookmarkIcon}>
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

const FeedCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} style={{ height: item.height }}>
        <img src={item.src} alt={item.title} className={styles.cardImage} />
        <div className={styles.bookmarkWrapper}>
          <BookmarkIcon />
        </div>
      </div>
      <div className={styles.actionBar}>
        <div className={styles.actionsLeft}>
          <button className={styles.actionBtn}><HeartIcon /></button>
          <button className={styles.actionBtn}><CommentIcon /></button>
        </div>
        <button className={styles.actionBtn}><ShareIcon /></button>
      </div>
    </div>
  );
};

const SocialFeedAnimation = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5; // Adjust speed here
      if (scrollPos >= scrollContainer.scrollHeight / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollTop = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneScreen}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.menuIcon}>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
            <div className={styles.notificationDot}></div>
          </div>
          
          <div className={styles.searchBar}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className={styles.searchText}>Find anything</span>
          </div>

          <div className={styles.galleryIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <div className={styles.notificationDot}></div>
          </div>
        </div>

        {/* Scrollable Feed */}
        <div className={styles.feedWrapper} ref={scrollRef}>
          <div className={styles.feedContent}>
            <div className={styles.masonryColumn}>
              {feedItems.filter((_, i) => i % 2 === 0).map((item, index) => (
                <FeedCard key={`col1-${index}`} item={item} />
              ))}
              {/* Duplicate for infinite scroll */}
              {feedItems.filter((_, i) => i % 2 === 0).map((item, index) => (
                <FeedCard key={`col1-dup-${index}`} item={item} />
              ))}
            </div>
            <div className={styles.masonryColumn}>
              {feedItems.filter((_, i) => i % 2 !== 0).map((item, index) => (
                <FeedCard key={`col2-${index}`} item={item} />
              ))}
              {/* Duplicate for infinite scroll */}
              {feedItems.filter((_, i) => i % 2 !== 0).map((item, index) => (
                <FeedCard key={`col2-dup-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className={styles.bottomNav}>
          <div className={styles.navIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <div className={styles.fabBtn}>
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <div className={styles.navIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SocialFeedAnimation;
