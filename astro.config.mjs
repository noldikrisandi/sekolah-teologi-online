import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sekolahteologi.com',
  integrations: [sitemap({
    // Konfigurasi khusus berdasarkan struktur Anda
    changefreq: 'weekly',
    priority: 0.7,
    
    // Filter halaman yang tidak perlu masuk sitemap
    filter: (page) => {
      const excludedPaths = [
        '/admin',
        '/private',
        '/draft',
        '/test'
      ];
      return !excludedPaths.some(excluded => page.includes(excluded));
    },
    
    // Custom serializer untuk prioritas berbeda
    serialize: (item) => {
      // Homepage - priority tertinggi
      if (item.url === 'https://sekolahteologi.com/') {
        return {
          ...item,
          changefreq: 'daily',
          priority: 1.0,
        };
      }
      
      // Halaman utama (about, contact) - priority tinggi
      if (['/about/', '/contact/'].some(path => item.url.includes(path))) {
        return {
          ...item,
          changefreq: 'monthly',
          priority: 0.9,
        };
      }
      
      // Blog & Renungan - priority medium
      if (item.url.includes('/blog/') || item.url.includes('/renungan/')) {
        return {
          ...item,
          changefreq: 'weekly',
          priority: 0.8,
        };
      }
      
      // Edukasi - priority medium
      if (item.url.includes('/edukasi/')) {
        return {
          ...item,
          changefreq: 'monthly',
          priority: 0.7,
        };
      }
      
      return item;
    }
  })],
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: ['..']
      }
    }
  },
  redirects: {
    '/home': '/',
    '/index': '/',
  },
  trailingSlash: 'never'
});