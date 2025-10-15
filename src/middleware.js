export function onRequest(context, next) {
  const url = context.url;
  
  // Jika mengakses path tidak valid di /pemrograman-web/
  if (url.pathname.startsWith('/pemrograman-web/')) {
    const validPaths = [
      '/pemrograman-web/',
      '/pemrograman-web/satu-pertemuan-1',
      '/pemrograman-web/satu-pertemuan-2',
      '/pemrograman-web/satu-pertemuan-3',
      '/pemrograman-web/404'
      // Tambahkan path valid lainnya di sini
    ];
    
    // Cek apakah path tidak valid
    if (!validPaths.includes(url.pathname)) {
      return Response.redirect(new URL('/pemrograman-web/404', url), 302);
    }
  }
  
  return next();
}