const https = require('https');
const fs = require('fs');
const zlib = require('zlib');

const options = {
  hostname: 'iptoasn.com',
  path: '/data/ip2asn-v4-u32.tsv.gz',
  method: 'GET',
  port: 443,
};

const file = 'ip2asn.tsv';
const writeStream = fs.createWriteStream(file);
const gunzip = zlib.createGunzip();

https.get(options, (res) => {
  res.pipe(gunzip).pipe(writeStream);
  // writeStream.on('finish', writeStream.close);
  // writeStream.on('error', console.log);
})
  .on('error', console.log);
