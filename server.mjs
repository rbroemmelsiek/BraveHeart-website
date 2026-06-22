import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT) || 8080;
const distDir = path.join(__dirname, 'dist');

app.use(express.static(distDir, { index: false }));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Brave Heart website listening on port ${port}`);
});
