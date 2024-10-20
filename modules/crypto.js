// crypto.js
const crypto = require('crypto');
const forge = require('node-forge');

// Encryption and Decryption using AES
const encryptAES = (data, key) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  return Buffer.concat([iv, encrypted]).toString('hex');
};

const decryptAES = (encrypted, key) => {
  const encryptedBuffer = Buffer.from(encrypted, 'hex');
  const iv = encryptedBuffer.slice(0, 16);
  const encryptedData = encryptedBuffer.slice(16);
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  const decrypted = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
  return decrypted.toString();
};

// Key Management
const generateKeyPair = () => {
  const keyPair = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
  return {
    publicKey: forge.pki.setRsaPublicKey(keyPair.n, keyPair.e),
    privateKey: forge.pki.setRsaPrivateKey(keyPair.n, keyPair.e, keyPair.d),
  };
};

const storeKey = (key, filename) => {
  const fs = require('fs');
  fs.writeFileSync(filename, key);
};

const loadKey = (filename) => {
  const fs = require('fs');
  return fs.readFileSync(filename, 'utf8');
};

// Digital Signatures
const signData = (data, privateKey) => {
  const md = forge.md.sha256.create();
  md.update(data);
  const signature = privateKey.sign(md);
  return signature;
};

const verifySignature = (data, signature, publicKey) => {
  const md = forge.md.sha256.create();
  md.update(data);
  return publicKey.verify(md.digest().bytes(), signature);
};

// Hashing Algorithms
const hashSHA256 = (data) => {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
};

const hashMD5 = (data) => {
  const hash = crypto.createHash('md5');
  hash.update(data);
  return hash.digest('hex');
};

module.exports = {
  encryptAES,
  decryptAES,
  generateKeyPair,
  storeKey,
  loadKey,
  signData,
  verifySignature,
  hashSHA256,
  hashMD5,
};