import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Vue TV Show',
        short_name: 'Vue TV Show',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/android-launchericon-48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/android-launchericon-72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/android-launchericon-96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/android-launchericon-144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/android-launchericon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-launchericon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
