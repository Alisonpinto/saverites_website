import { useState, useEffect } from 'react';
import { Download, AlertTriangle, Check, Calendar, HardDrive, Smartphone, RefreshCw } from 'lucide-react';
import { apkConfig, siteConfig } from '../config/siteConfig';
import styles from './DownloadSection.module.css';

/**
 * DownloadSection Component
 * 
 * Renders the APK download interface.
 * Features:
 * - Dynamic metadata display loaded from siteConfig
 * - Async client-side verification to check if the APK file is physically on the server
 * - Custom error warning message if the APK file is missing
 */
const DownloadSection = () => {
  const [apkExists, setApkExists] = useState(true);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Check if APK is present on the server
    fetch(apkConfig.downloadPath, { method: 'HEAD', signal })
      .then((res) => {
        if (res.ok) {
          setApkExists(true);
        } else {
          // If HEAD is not allowed, check via GET but abort immediately
          if (res.status === 405 || res.status === 403) {
            fetch(apkConfig.downloadPath, { method: 'GET', signal })
              .then((resGet) => {
                setApkExists(resGet.ok);
                controller.abort(); // Cancel the rest of download
              })
              .catch(() => setApkExists(false));
          } else {
            setApkExists(false);
          }
        }
      })
      .catch(() => {
        // Fallback GET check if HEAD fails due to network/server policies
        fetch(apkConfig.downloadPath, { method: 'GET', signal })
          .then((resGet) => {
            setApkExists(resGet.ok);
            controller.abort();
          })
          .catch(() => setApkExists(false));
      })
      .finally(() => {
        setChecking(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <section id="download" className={`section ${styles.downloadSection}`}>
      <div className={`container ${styles.container}`}>
        {/*
        <div className={styles.grid}>
          
          <div className={`${styles.infoColumn} animate-fade-up`}>
            <span className={styles.badge}>Official Android App</span>
            <h2 className="h2">Take saverites with you everywhere</h2>
            <p className="p-large">
              Access your digital safe-keep directly from your smartphone. Save links, upload documents, record audio journals, and capture your precious life memories on the go.
            </p>
            
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <div className={styles.iconCircle}>
                  <Check size={18} />
                </div>
                <span>Fast, secure, offline-first syncing capabilities</span>
              </li>
              <li className={styles.featureItem}>
                <div className={styles.iconCircle}>
                  <Check size={18} />
                </div>
                <span>Quick-capture widgets for rapid link & note saving</span>
              </li>
              <li className={styles.featureItem}>
                <div className={styles.iconCircle}>
                  <Check size={18} />
                </div>
                <span>End-to-end local data encryption option</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.cardColumn} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
            <div className={`${styles.downloadCard} glass-effect`}>
              
              <div className={styles.cardHeader}>
                <div className={styles.androidLogo}>
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                    <path d="M17.523 15.3c-.149 0-.275-.056-.379-.17-.101-.11-.153-.244-.153-.396 0-.156.052-.29.153-.402a.524.524 0 0 1 .379-.168c.147 0 .273.056.377.168.103.111.155.246.155.402 0 .152-.052.286-.155.396a.526.526 0 0 1-.377.17m-11.037 0c-.149 0-.275-.056-.379-.17a.547.547 0 0 1-.153-.396c0-.156.051-.29.153-.402a.524.524 0 0 1 .379-.168c.147 0 .273.056.377.168.103.111.155.246.155.402 0 .152-.052.286-.155.396a.526.526 0 0 1-.377.17m11.233-4.148l1.986-3.44a.434.434 0 0 0-.159-.592.428.428 0 0 0-.585.158l-2.023 3.504A10.74 10.74 0 0 0 12 10c-1.895 0-3.664.49-5.183 1.34L4.794 7.836a.428.428 0 0 0-.585-.158.434.434 0 0 0-.159.592l1.986 3.44C3.109 13.064 1 16.035 1 19.5h22c0-3.465-2.109-6.436-5.044-8.348"/>
                  </svg>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Android Application</h3>
                  <span className={styles.cardSubtitle}>Direct APK Download</span>
                </div>
              </div>

              <div className={styles.specsList}>
                <div className={styles.specItem}>
                  <div className={styles.specLabelContainer}>
                    <Smartphone size={16} className={styles.specIcon} />
                    <span>App Version</span>
                  </div>
                  <span className={styles.specValue}>{apkConfig.version}</span>
                </div>
                
                <div className={styles.specItem}>
                  <div className={styles.specLabelContainer}>
                    <HardDrive size={16} className={styles.specIcon} />
                    <span>APK Size</span>
                  </div>
                  <span className={styles.specValue}>{apkConfig.size}</span>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specLabelContainer}>
                    <Calendar size={16} className={styles.specIcon} />
                    <span>Last Updated</span>
                  </div>
                  <span className={styles.specValue}>{apkConfig.lastUpdated}</span>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specLabelContainer}>
                    <RefreshCw size={16} className={styles.specIcon} />
                    <span>Min. Android</span>
                  </div>
                  <span className={styles.specValue}>{apkConfig.minAndroidVersion}</span>
                </div>
              </div>

              <div className={styles.actionArea}>
                {checking ? (
                  <div className={styles.statusChecking}>
                    <div className={styles.spinner}></div>
                    <span>Checking server for package...</span>
                  </div>
                ) : apkExists ? (
                  <>
                    <a 
                      href={apkConfig.downloadPath} 
                      download={apkConfig.fileName}
                      className={`btn btn-primary ${styles.downloadButton}`}
                      aria-label="Download Saverites Android APK"
                    >
                      <Download size={18} />
                      Download APK File
                    </a>
                    <p className={styles.disclaimer}>
                      * Make sure to allow installation of apps from "Unknown Sources" in your device settings.
                    </p>
                  </>
                ) : (
                  <div className={styles.warningBox}>
                    <div className={styles.warningHeader}>
                      <AlertTriangle size={20} className={styles.warningIcon} />
                      <h4 className={styles.warningTitle}>Download Unavailable</h4>
                    </div>
                    <p className={styles.warningText}>
                      We are currently uploading a new version of the APK. Please check back in a few minutes or contact us at <a href={`mailto:${siteConfig.supportEmail}`} className={styles.contactLink}>{siteConfig.supportEmail}</a> for direct assistance.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
        */}

        {/* Coming Soon Section */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Take saverites with you everywhere</h2>
          <p className="p-large" style={{ marginBottom: '2rem' }}>
            Our Android and iOS applications are currently under development. Join the Early Access waitlist to be the first to know when they drop!
          </p>
          <div style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: 'var(--color-black)', color: 'var(--color-white)', borderRadius: '999px', fontWeight: 'bold' }}>
            Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
