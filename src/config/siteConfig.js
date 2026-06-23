/**
 * Saverites Website Configuration File
 * 
 * This file contains the configuration for the website, including SEO defaults
 * and details about the Android APK download.
 */

export const siteConfig = {
  // The base URL of the deployed website, used for sitemaps and canonical URLs.
  // Change this if you deploy the site on a different domain.
  siteUrl: 'https://usesaverites.com',
  
  // Default SEO meta tags when a specific page doesn't override them.
  defaultTitle: 'Saverites - Your Memories, Your Stories, Your Space',
  defaultDescription: 'A modern platform where users can save memories, important moments, stories, documents, and experiences forever.',
  defaultKeywords: 'saverites, save memories, digital journal, secure notebook, document organizer, stories, android app',
  
  // Twitter handle
  twitterHandle: '@usesaverites',
  
  // Support Email address
  supportEmail: 'saverites2026@gmail.com',
};

/**
 * APK Download Configuration
 * 
 * INSTRUCTIONS FOR UPDATING THE ANDROID APP:
 * ------------------------------------------
 * 1. Build your new APK file.
 * 2. Rename it to "saverites.apk" (or whatever filename you prefer).
 * 3. Place the APK file inside the "/public/downloads/" directory.
 *    (Full path: [project_root]/public/downloads/your_file.apk)
 * 4. Update the values in the "apkConfig" object below to match the new version.
 * 5. Deploy the website. The download page will automatically check for the file
 *    and display the updated information without you needing to edit any React code.
 */
export const apkConfig = {
  // The filename of the APK file in the "/public/" folder.
  fileName: 'app-release.apk',
  
  // The path relative to the root directory where the APK is served.
  downloadPath: '/app-release.apk',
  
  // App version shown on the download card.
  version: 'v1.0.0-beta',
  
  // Size of the APK file, displayed to the user.
  size: '58.63 mb',
  
  // Date of the last release.
  lastUpdated: 'June 18, 2026',
  
  // Minimum Android OS required to run the application.
  minAndroidVersion: 'Android 8.0 (Oreo) or higher',
};
