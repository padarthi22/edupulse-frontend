import axios from 'axios';

// In production set VITE_API_URL=https://<your-backend>/api at build time.
// In dev the Vite proxy handles '/api' automatically.
const baseURL = import.meta.env.VITE_API_URL || '/api';

export const api = axios.create({ baseURL });

api.interceptors.request.use((c) => {
  const t = localStorage.getItem('edupulse_token');
  if (t) c.headers.Authorization = `Bearer ${t}`;
  return c;
});
