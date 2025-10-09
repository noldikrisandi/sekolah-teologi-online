import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sekolahteologi.com',
  
  integrations: [sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    
    filter: (page) => {
      const excludedPaths = [
        '/admin',
        '/private',
        '/draft',
        '/test'
      ];
      return !excludedPaths.some(excluded => page.includes(excluded));
    },
    
    serialize: (item) => {
      if (item.url === 'https://sekolahteologi.com/') {
        return {
          ...item,
          changefreq: 'daily',
          priority: 1.0,
        };
      }
      
      if (['/about/', '/contact/'].some(path => item.url.includes(path))) {
        return {
          ...item,
          changefreq: 'monthly',
          priority: 0.9,
        };
      }
      
      if (item.url.includes('/blog/') || item.url.includes('/renungan/')) {
        return {
          ...item,
          changefreq: 'weekly',
          priority: 0.8,
        };
      }
      
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
  
  // HAPUS build.format - pakai default
  vite: {
    plugins: [tailwindcss()],
  },
  
redirects: {
  '/home': '/',
  '/index': '/',
},

  
  trailingSlash: 'never'
});