import fs from 'fs';
import path from 'path';

const pages = [
  { name: 'Home', file: 'home_removed_proportions_section/code.html', route: '/' },
  { name: 'TheResidence', file: 'the_residence_updated_imagery/code.html', route: '/residence' },
  { name: 'Neighborhood', file: 'neighborhood_updated_agent_portrait/code.html', route: '/neighborhood' },
  { name: 'Schools', file: 'schools_glassmorphic_edition/code.html', route: '/schools' },
  { name: 'Gallery', file: 'gallery_updated_high_res_collection/code.html', route: '/gallery' },
  { name: 'PrivacyPolicy', file: 'privacy_policy_glassmorphic_edition/code.html', route: '/privacy' },
  { name: 'TermsOfService', file: 'terms_of_service_glassmorphic_edition/code.html', route: '/terms' },
  { name: 'Accessibility', file: 'privacy_policy_glassmorphic_edition/code.html', route: '/accessibility' } // We'll replace this content later
];

const baseDir = './stitch_luxury_home_listing_desktop';
const outDir = './src/pages';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function convertHtmlToJsx(html) {
  // Very basic conversion: class -> className, for -> htmlFor, close img tags, etc.
  let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/style="([^"]*)"/g, (match, styleStr) => {
      if (!styleStr.trim()) return '';
      const styleObj = {};
      styleStr.split(';').forEach(rule => {
        if (!rule.trim()) return;
        const [key, value] = rule.split(':');
        if (key && value) {
          const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
          styleObj[camelKey] = value.trim();
        }
      });
      return `style={${JSON.stringify(styleObj)}}`;
    });

  // Convert <a> to <Link> for internal links
  jsx = jsx.replace(/<a([^>]*)href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi, (match, before, href, after, content) => {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('sms:')) {
      return `<a${before}href="${href}"${after}>${content}</a>`;
    }
    
    // Map text content to routes
    const text = content.replace(/<[^>]*>/g, '').trim().toLowerCase();
    let to = href;
    
    if (text === 'home') to = '/';
    else if (text === 'the residence' || text === 'portfolio') to = '/residence';
    else if (text === 'neighborhood' || text === 'insights') to = '/neighborhood';
    else if (text === 'schools') to = '/schools';
    else if (text === 'gallery') to = '/gallery';
    else if (text === 'privacy policy') to = '/privacy';
    else if (text === 'terms of service') to = '/terms';
    else if (text === 'accessibility') to = '/accessibility';
    else if (text === 'contact' || text === 'concierge') to = '/#contact';
    else if (href === '#' || href.startsWith('#')) to = '/'; // fallback
    
    return `<Link${before}to="${to}"${after}>${content}</Link>`;
  });
    
  return jsx;
}

pages.forEach(page => {
  const filePath = path.join(baseDir, page.file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract body content
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : content;
    
    // Remove script tags at the end
    bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
    
    const jsxContent = convertHtmlToJsx(bodyContent);
    
    const componentCode = `import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ${page.name}() {
  useEffect(() => {
    // Re-trigger reveal animations
    const elements = document.querySelectorAll('.reveal') as NodeListOf<HTMLElement>;
    elements.forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; /* trigger reflow */
      el.style.animation = ''; 
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      ${jsxContent}
    </div>
  );
}
`;
    
    fs.writeFileSync(path.join(outDir, `${page.name}.tsx`), componentCode);
    console.log(`Created ${page.name}.tsx`);
  } else {
    console.error(`File not found: ${filePath}`);
  }
});

// Create App.tsx with routes
const appCode = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
${pages.map(p => `import ${p.name} from './pages/${p.name}';`).join('\n')}

export default function App() {
  return (
    <Router>
      <Routes>
        ${pages.map(p => `<Route path="${p.route}" element={<${p.name} />} />`).join('\n        ')}
      </Routes>
    </Router>
  );
}
`;

fs.writeFileSync('./src/App.tsx', appCode);
console.log('Created App.tsx');
