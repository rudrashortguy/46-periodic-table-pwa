import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
    "registerType": "autoUpdate",
    "manifest": {
        "name": "ElementScope - Interactive Periodic Table",
        "short_name": "ElementScope",
        "description": "Explore chemical elements, atomic properties, electron configurations, and periodic trends interactively.",
        "theme_color": "#06B6D4",
        "background_color": "#ffffff",
        "display": "standalone",
        "icons": [
            {
                "src": "pwa-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "pwa-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }
})
  ]
});
