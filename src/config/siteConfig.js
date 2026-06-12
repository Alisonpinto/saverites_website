/**
 * Memoria Website Configuration File
 * 
 * This file contains the configuration for the website, including SEO defaults
 * and details about the Android APK download.
 */

export const siteConfig = {
  // The base URL of the deployed website, used for sitemaps and canonical URLs.
  // Change this if you deploy the site on a different domain.
  siteUrl: 'https://usememoria.com',
  
  // Default SEO meta tags when a specific page doesn't override them.
  defaultTitle: 'Memoria - Your Memories, Your Stories, Your Space',
  defaultDescription: 'A modern platform where users can save memories, important moments, stories, documents, and experiences forever.',
  defaultKeywords: 'memoria, save memories, digital journal, secure notebook, document organizer, stories, android app',
  
  // Twitter handle
  twitterHandle: '@usememoria',
  
  // Support Email address
  supportEmail: 'memoria2026@gmail.com',
};

/**
 * APK Download Configuration
 * 
 * INSTRUCTIONS FOR UPDATING THE ANDROID APP:
 * ------------------------------------------
 * 1. Build your new APK file.
 * 2. Rename it to "memoria.apk" (or whatever filename you prefer).
 * 3. Place the APK file inside the "/public/downloads/" directory.
 *    (Full path: [project_root]/public/downloads/your_file.apk)
 * 4. Update the values in the "apkConfig" object below to match the new version.
 * 5. Deploy the website. The download page will automatically check for the file
 *    and display the updated information without you needing to edit any React code.
 */
export const apkConfig = {
  // The filename of the APK file in the "/public/downloads/" folder.
  fileName: 'app-debug.apk',
  
  // The path relative to the root directory where the APK is served.
  downloadPath: '/downloads/app-debug.apk',
  
  // App version shown on the download card.
  version: '1.0.0',
  
  // Size of the APK file, displayed to the user.
  size: '89.4 MB',
  
  // Date of the last release.
  lastUpdated: 'June 13, 2026',
  
  // Minimum Android OS required to run the application.
  minAndroidVersion: 'Android 8.0 (Oreo) or higher',
};
