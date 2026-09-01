const https = require('https');

https.get('https://payjustnow.com/wp-content/themes/pjn/dist/main.js', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let js = '';
  res.on('data', chunk => js += chunk);
  res.on('end', () => {
    const idx = js.indexOf('initScroll');
    console.log(js.slice(idx - 50, idx + 1000));
  });
});
