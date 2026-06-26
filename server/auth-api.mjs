import 'dotenv/config';
import { createAuthApp } from './auth.mjs';

const port = Number(process.env.AUTH_API_PORT || 8081);
const { app } = createAuthApp();

app.listen(port, '0.0.0.0', () => {
  console.log(`Brave Heart auth API listening on port ${port}`);
});
