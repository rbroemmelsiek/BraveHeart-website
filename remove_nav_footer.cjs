const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove <nav>...</nav>
  content = content.replace(/<nav[\s\S]*?<\/nav>/g, '');

  // Remove <footer>...</footer>
  content = content.replace(/<footer[\s\S]*?<\/footer>/g, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${file}`);
}
