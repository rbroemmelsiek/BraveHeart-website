import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'pages', 'Gallery.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /(<div[^>]*className="[^"]*cursor-zoom-in[^"]*"[^>]*>)([\s\S]*?<img[^>]*src="([^"]+)"[^>]*>)/g;

content = content.replace(regex, (match, divTag, innerContent, srcUrl) => {
    if (divTag.includes('onClick')) return match;
    const newDivTag = divTag.replace('>', ` onClick={() => openLightbox("${srcUrl}")}>`);
    return newDivTag + innerContent;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Gallery.tsx');
