import { useEffect, useRef, useState } from 'react';
import styles from './SaveAnimation.module.css';

const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    label: 'Document.pdf',
    tag: 'PDF',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    label: 'photo_2026.jpg',
    tag: 'Photo',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    label: 'voice_memo.m4a',
    tag: 'Voice Note',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    label: 'reel_clip.mp4',
    tag: 'Video',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    label: 'idea_note.txt',
    tag: 'Note',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    label: 'buy_later.link',
    tag: 'Product',
  },
];

/* Bookmark icon — outline while saving, filled yellow when saved */
const BookmarkIcon = ({ saved }) => (
  <svg
    className={`${styles.bookmarkSvg} ${saved ? styles.bookmarkSaved : ''}`}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
);

/*
  SavedItem is keyed from the parent with animKey — so every scroll-in
  fully unmounts & remounts it, giving a pristine animation state.
*/
const SavedItem = ({ item, index, isVisible }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    // Stagger: slide-in delay + pause before bookmark fills yellow
    const delay = index * 320 + 800;
    const timer = setTimeout(() => setSaved(true), delay);
    return () => clearTimeout(timer);
  }, [isVisible, index]);

  return (
    <div
      className={`${styles.item} ${isVisible ? styles.itemVisible : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.itemIcon}>{item.icon}</div>
      <div className={styles.itemInfo}>
        <span className={styles.itemLabel}>{item.label}</span>
        <span className={styles.itemTag}>{item.tag}</span>
      </div>
      {/* Bookmark: blinking dots → filled yellow */}
      <div className={`${styles.itemStatus} ${saved ? styles.itemSaved : ''}`}>
        {saved
          ? <BookmarkIcon saved={true} />
          : <div className={styles.savingDots}><span/><span/><span/></div>
        }
      </div>
    </div>
  );
};

const SaveAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animKey, setAnimKey]     = useState(0); // increments each scroll-in → full remount
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Bump key first so React unmounts old animated tree instantly,
          // then set visible to re-mount fresh and start animations
          setAnimKey(k => k + 1);
          setIsVisible(true);
        } else {
          // Reset when out of view — next entry replays from scratch
          setIsVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      {/* Header bar — always visible */}
      <div className={styles.header}>
        <div className={styles.dots}>
          <span /><span /><span />
        </div>
        <span className={styles.headerTitle}>saverites</span>
      </div>

      {/*
        Key on animKey — every scroll-in destroys the old subtree and mounts
        a fresh one, so CSS animations always start from frame 0.
      */}
      <div key={animKey} className={styles.animatedBody}>
        {/* Item list */}
        <div className={styles.list}>
          {ITEMS.map((item, i) => (
            <SavedItem key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* "All saved" badge */}
        <div className={`${styles.badge} ${isVisible ? styles.badgeVisible : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
               strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          All saved
        </div>
      </div>
    </div>
  );
};

export default SaveAnimation;
