const https = require('https');
const fs = require('fs');

const chunks = ['7175', '9472', '8455', '8169', '4911', '583'];

chunks.forEach(id => {
  https.get(`https://payjustnow.com/wp-content/themes/pjn/dist/${id}.js`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`\n=================== CHUNK ${id} ===================`);
      console.log(data.substring(0, 3000));
    });
  });
});
