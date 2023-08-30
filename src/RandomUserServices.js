const https = require('https');
const { userInfo } = require('os');

async function getUser() {
  https.get('https://randomuser.me/api/?gender=female', res => {
    let data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);

    
    res.on('data', chunk => {
      data.push(chunk);
    });

    res.on('end', () => {
      console.log('Response ended: ');
      // console.log(JSON.parse(Buffer.concat(data).toString()))
      const user = JSON.parse(Buffer.concat(data).toString());

      return user;
    });
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
}

module.exports = {
  getUser
}