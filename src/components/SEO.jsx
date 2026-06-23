import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

/**
 * SEO Component to handle dynamic page metadata injection.
 * Works seamlessly in client-side React 19 without peer-dependency issues.
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogType = 'website', 
  ogImage, 
  schemaData 
}) => {
  const location = useLocation();
  const siteUrl = siteConfig.siteUrl;
  const currentUrl = canonicalUrl || `${siteUrl}${location.pathname}`;
  const defaultDescription = siteConfig.defaultDescription;
  const defaultTitle = siteConfig.defaultTitle;
  const defaultImage = `${siteUrl}/favicon.png`; // Fallback image

  useEffect(() => {
    // 1. Set Page Title
    const finalTitle = title ? `${title} | Saverites` : defaultTitle;
    document.title = finalTitle;

    // Helper function to set or create meta tags
    const setMetaTag = (attrName, attrValue, contentValue) => {
      if (!contentValue) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (element) {
        element.setAttribute('content', contentValue);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', contentValue);
        document.head.appendChild(element);
      }
    };

    // Helper function to set or create link tags
    const setLinkTag = (rel, hrefValue) => {
      if (!hrefValue) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (element) {
        element.setAttribute('href', hrefValue);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        element.setAttribute('href', hrefValue);
        document.head.appendChild(element);
      }
    };

    // 2. Meta Description
    setMetaTag('name', 'description', description || defaultDescription);

    // 3. Meta Keywords
    setMetaTag('name', 'keywords', keywords || siteConfig.defaultKeywords);

    // 4. Robots Tag
    setMetaTag('name', 'robots', 'index, follow');

    // 5. Canonical Link
    setLinkTag('canonical', currentUrl);

    // 6. Open Graph Tags (Facebook, etc.)
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', description || defaultDescription);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage || defaultImage);
    setMetaTag('property', 'og:site_name', 'Saverites');

    // 7. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', description || defaultDescription);
    setMetaTag('name', 'twitter:image', ogImage || defaultImage);
    setMetaTag('name', 'twitter:creator', siteConfig.twitterHandle);

    // 8. Theme Color
    setMetaTag('name', 'theme-color', '#000000');

    // 9. Apple Web App Meta Tags
    setMetaTag('name', 'apple-mobile-web-app-capable', 'yes');
    setMetaTag('name', 'apple-mobile-web-app-status-bar-style', 'black-translucent');
    setMetaTag('name', 'apple-mobile-web-app-title', 'Saverites');

    // 10. Structured Data (Schema.org JSON-LD)
    let scriptTag = document.getElementById('jsonLdSchema');
    const finalSchema = schemaData || {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Saverites',
      'url': siteUrl,
      'description': defaultDescription,
      'applicationCategory': 'MultimediaApplication',
      'operatingSystem': 'Android, Web',
      'screenshot': defaultImage,
      'author': {
        '@type': 'Organization',
        'name': 'Arktech Developers',
        'url': `${siteUrl}/about-developer`
      }
    };

    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(finalSchema);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonLdSchema';
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(finalSchema);
      document.head.appendChild(scriptTag);
    }
  }, [title, description, keywords, currentUrl, ogType, ogImage, schemaData, siteUrl, defaultTitle, defaultDescription, defaultImage]);

  return null;
};

export default SEO;
