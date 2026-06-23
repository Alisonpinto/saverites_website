import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, Search, User, Shield, Compass, AlertCircle, 
  ChevronDown, ChevronUp, Mail, Clock, Send, MessageSquare, 
  Bug, ExternalLink, Star, Check
} from 'lucide-react';
import SEO from '../components/SEO';
import { siteConfig } from '../config/siteConfig';
import styles from './Support.module.css';

const faqsData = [
  {
    question: "What is Memoria?",
    answer: "Memoria is a modern digital safe-keep platform developed by Arktech Developers. It allows you to save, organize, and catalog memories, text notes, bookmarks, high-res photos, documents, and audio recordings in a highly secure, private digital journal."
  },
  {
    question: "How do I download and install the Android app?",
    answer: "You can download the APK directly from the 'Download' section on our homepage. Once the APK is downloaded, tap on the file to install it. Ensure that you have enabled 'Install from Unknown Sources' in your Android security settings."
  },
  {
    question: "Is my private data secure in Memoria?",
    answer: "Yes, security is a core pillar of Memoria. Your private saved items (Self Save) are fully protected. We use industry-standard encryption protocols and secure database backends powered by Firebase. We do not sell or share your personal data with third-party advertisers."
  },
  {
    question: "How do I delete my account and data permanently?",
    answer: "You can request account deletion directly from the settings page inside the app. Alternatively, you can review our Account Deletion Policy and send an email request to our support team at memoriaapp2026@gmail.com, and we will purge your personal records within 30 days."
  },
  {
    question: "Can I access my memories when offline?",
    answer: "Yes! The Memoria Android app features a local cache database. You can browse, edit, and create new memories while completely offline. The changes will queue up and sync automatically to the cloud once a stable internet connection is restored."
  }
];

const categoriesData = [
  {
    icon: <User size={24} />,
    title: "Account & Login Help",
    items: ["Creating an account", "Google sign-in issues", "Password recovery steps", "Updating profile information"]
  },
  {
    icon: <Compass size={24} />,
    title: "Using Memoria",
    items: ["Adding link bookmarks", "Saving custom media files", "Tagging and folders", "Configuring notification alerts"]
  },
  {
    icon: <Shield size={24} />,
    title: "Privacy & Security",
    items: ["Self Save vs Public Posts", "Understanding data encryption", "Third-party service terms", "Data backup safety"]
  },
  {
    icon: <AlertCircle size={24} />,
    title: "Troubleshooting",
    items: ["APK installation errors", "Syncing queue failures", "App crashes & reports", "Offline mode limitations"]
  }
];

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeFormTab, setActiveFormTab] = useState('bug'); // 'bug' or 'feedback'
  
  // Bug Form State
  const [bugName, setBugName] = useState('');
  const [bugEmail, setBugEmail] = useState('');
  const [bugTitle, setBugTitle] = useState('');
  const [bugSteps, setBugSteps] = useState('');
  const [bugDesc, setBugDesc] = useState('');
  const [bugSubmitted, setBugSubmitted] = useState(false);

  // Feedback Form State
  const [feedName, setFeedName] = useState('');
  const [feedEmail, setFeedEmail] = useState('');
  const [feedType, setFeedType] = useState('feature');
  const [feedRating, setFeedRating] = useState(5);
  const [feedMsg, setFeedMsg] = useState('');
  const [feedSubmitted, setFeedSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleBugSubmit = (e) => {
    e.preventDefault();
    // Simulate API request submission
    setBugSubmitted(true);
    setTimeout(() => {
      // Clear fields
      setBugName('');
      setBugEmail('');
      setBugTitle('');
      setBugSteps('');
      setBugDesc('');
    }, 500);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Simulate API request submission
    setFeedSubmitted(true);
    setTimeout(() => {
      // Clear fields
      setFeedName('');
      setFeedEmail('');
      setFeedType('feature');
      setFeedRating(5);
      setFeedMsg('');
    }, 500);
  };

  // Filter FAQs based on search
  const filteredFaqs = faqsData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Schema.org Structured Data for Help Center FAQs
  const supportSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className={styles.supportPage}>
      <SEO 
        title="Help & Support Center"
        description="Need help with Memoria? Read FAQs, troubleshoot bugs, submit suggestions, and contact support."
        keywords="memoria support, report a bug, help center, download app, account deletion, user FAQs"
        schemaData={supportSchema}
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className="h1 animate-fade-up">How can we help?</h1>
          <p className="p-large animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Find guides, troubleshoot errors, and get in touch with the Memoria team.
          </p>
          
          <div className={`${styles.searchBarContainer} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              type="text" 
              placeholder="Search help articles, questions, or issues..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search help articles"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">Browse by Category</h2>
            <p className="p-large">Find detailed documents sorted by application sections.</p>
          </div>
          
          <div className={styles.categoriesGrid}>
            {categoriesData.map((category, idx) => (
              <div key={idx} className={`${styles.categoryCard} glass-effect`}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIconCircle}>{category.icon}</div>
                  <h3 className="h4">{category.title}</h3>
                </div>
                <ul className={styles.categoryItems}>
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className={styles.categoryItem}>
                      <span className={styles.bullet}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">Frequently Asked Questions</h2>
            <p className="p-large">Quick answers to the most common queries about Memoria.</p>
          </div>

          <div className={styles.faqList}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}>
                    <button 
                      onClick={() => toggleFaq(index)} 
                      className={styles.faqQuestionButton}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.faqQuestion}>{faq.question}</span>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {isOpen && (
                      <div className={styles.faqAnswerContainer}>
                        <p className={styles.faqAnswer}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className={styles.noResults}>
                <HelpCircle size={48} className={styles.noResultsIcon} />
                <p>No FAQs match your search criteria. Try typing different keywords.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Forms and Action Center */}
      <section className={`section ${styles.formSection}`}>
        <div className="container">
          <div className={styles.formGrid}>
            
            {/* Contact Support Left Sidebar */}
            <div className={styles.contactInfoCard}>
              <h2 className="h3">Need Direct Support?</h2>
              <p className={styles.contactCardDesc}>
                If you cannot find the answer in our documentation, get in touch directly.
              </p>

              <div className={styles.contactItemRow}>
                <div className={styles.contactIconWrapper}><Mail size={20} /></div>
                <div>
                  <h4 className={styles.contactItemLabel}>Email Support</h4>
                  <a href={`mailto:${siteConfig.supportEmail}`} className={styles.contactItemValue}>
                    {siteConfig.supportEmail}
                  </a>
                </div>
              </div>

              <div className={styles.contactItemRow}>
                <div className={styles.contactIconWrapper}><Clock size={20} /></div>
                <div>
                  <h4 className={styles.contactItemLabel}>Response Time</h4>
                  <p className={styles.contactItemValue}>Typically within 24 Hours</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className={styles.quickLinksContainer}>
                <h4 className={styles.quickLinksTitle}>Quick Links</h4>
                <div className={styles.quickLinksGrid}>
                  <Link to="/privacy-policy" className={styles.quickLinkItem}>
                    <span>Privacy Policy</span>
                    <ExternalLink size={14} />
                  </Link>
                  <Link to="/terms-and-conditions" className={styles.quickLinkItem}>
                    <span>Terms & Conditions</span>
                    <ExternalLink size={14} />
                  </Link>
                  <Link to="/contact" className={styles.quickLinkItem}>
                    <span>Contact Us</span>
                    <ExternalLink size={14} />
                  </Link>
                  <Link to="/about-developer" className={styles.quickLinkItem}>
                    <span>About Us</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Interactive Form Right Column */}
            <div className={`${styles.formCard} glass-effect`}>
              
              {/* Form Tab Toggles */}
              <div className={styles.tabHeader}>
                <button 
                  onClick={() => setActiveFormTab('bug')}
                  className={`${styles.tabBtn} ${activeFormTab === 'bug' ? styles.tabBtnActive : ''}`}
                >
                  <Bug size={18} />
                  Report a Bug
                </button>
                <button 
                  onClick={() => setActiveFormTab('feedback')}
                  className={`${styles.tabBtn} ${activeFormTab === 'feedback' ? styles.tabBtnActive : ''}`}
                >
                  <MessageSquare size={18} />
                  Feedback / Suggestion
                </button>
              </div>

              {/* Bug Form View */}
              {activeFormTab === 'bug' && (
                <div className={styles.formContent}>
                  {bugSubmitted ? (
                    <div className={styles.successAnimationContainer}>
                      <div className={styles.successIconCircle}>
                        <Check size={36} />
                      </div>
                      <h3 className="h4">Bug Report Submitted</h3>
                      <p>Thank you. Your report has been logged and sent to Arktech Developers. We will investigate this immediately.</p>
                      <button 
                        onClick={() => setBugSubmitted(false)}
                        className="btn btn-secondary"
                        style={{ marginTop: 'var(--spacing-md)' }}
                      >
                        Submit Another Bug Report
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleBugSubmit} className={styles.interactiveForm}>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="bugName">Name</label>
                          <input 
                            type="text" 
                            id="bugName" 
                            required 
                            placeholder="Your Name"
                            value={bugName}
                            onChange={(e) => setBugName(e.target.value)}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="bugEmail">Email Address</label>
                          <input 
                            type="email" 
                            id="bugEmail" 
                            required 
                            placeholder="your@email.com"
                            value={bugEmail}
                            onChange={(e) => setBugEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="bugTitle">Short Bug Summary</label>
                        <input 
                          type="text" 
                          id="bugTitle" 
                          required 
                          placeholder="e.g. Android app crashes on audio upload"
                          value={bugTitle}
                          onChange={(e) => setBugTitle(e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="bugSteps">Steps to Reproduce (one per line)</label>
                        <textarea 
                          id="bugSteps" 
                          rows="3" 
                          required
                          placeholder="1. Open App&#10;2. Click Audio Memories&#10;3. Click Save button"
                          value={bugSteps}
                          onChange={(e) => setBugSteps(e.target.value)}
                        ></textarea>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="bugDesc">Detailed Description</label>
                        <textarea 
                          id="bugDesc" 
                          rows="4" 
                          required
                          placeholder="Describe the unexpected behavior and your device specs if possible..."
                          value={bugDesc}
                          onChange={(e) => setBugDesc(e.target.value)}
                        ></textarea>
                      </div>

                      <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                        <Send size={16} />
                        Submit Bug Report
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Feedback / Suggestions Form View */}
              {activeFormTab === 'feedback' && (
                <div className={styles.formContent}>
                  {feedSubmitted ? (
                    <div className={styles.successAnimationContainer}>
                      <div className={styles.successIconCircle}>
                        <Check size={36} />
                      </div>
                      <h3 className="h4">Thank You for Your Feedback!</h3>
                      <p>Your suggestions help us build a better Memoria app. We read and value every submission!</p>
                      <button 
                        onClick={() => setFeedSubmitted(false)}
                        className="btn btn-secondary"
                        style={{ marginTop: 'var(--spacing-md)' }}
                      >
                        Submit More Feedback
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFeedbackSubmit} className={styles.interactiveForm}>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="feedName">Name</label>
                          <input 
                            type="text" 
                            id="feedName" 
                            required 
                            placeholder="Your Name"
                            value={feedName}
                            onChange={(e) => setFeedName(e.target.value)}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="feedEmail">Email Address</label>
                          <input 
                            type="email" 
                            id="feedEmail" 
                            required 
                            placeholder="your@email.com"
                            value={feedEmail}
                            onChange={(e) => setFeedEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="feedType">Feedback Category</label>
                          <select 
                            id="feedType" 
                            value={feedType}
                            onChange={(e) => setFeedType(e.target.value)}
                            className={styles.selectInput}
                          >
                            <option value="feature">Feature Request</option>
                            <option value="ux">Design / UX Improvement</option>
                            <option value="performance">Performance & Speed</option>
                            <option value="praise">General Praise</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className={styles.formGroup}>
                          <label>Rate Memoria</label>
                          <div className={styles.starRating}>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button 
                                key={star}
                                type="button"
                                onClick={() => setFeedRating(star)}
                                className={styles.starBtn}
                              >
                                <Star 
                                  size={24} 
                                  fill={star <= feedRating ? "var(--color-black)" : "none"}
                                  stroke="var(--color-black)"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="feedMsg">Suggestions / Message</label>
                        <textarea 
                          id="feedMsg" 
                          rows="6" 
                          required
                          placeholder="What would you like to see in Memoria? How can we make it better?"
                          value={feedMsg}
                          onChange={(e) => setFeedMsg(e.target.value)}
                        ></textarea>
                      </div>

                      <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                        <Send size={16} />
                        Send Feedback
                      </button>
                    </form>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
