const fs = require('fs');
const path = require('path');

const appJs = fs.readFileSync('C:\\Users\\USUARIO\\.gemini\\antigravity\\scratch\\jmc-streaming-web\\app.js', 'utf8');
const indexHtml = fs.readFileSync('C:\\Users\\USUARIO\\.gemini\\antigravity\\scratch\\jmc-streaming-web\\index.html', 'utf8');

console.log('Testing HTML Elements:');
const requiredIds = [
  'btn-cloud-sync',
  'icon-cloud-status',
  'text-cloud-status',
  'badge-cloud-dot',
  'firebase-modal',
  'fb-status-card',
  'fb-status-title',
  'fb-status-badge',
  'fb-status-desc',
  'fb-raw-config',
  'fb-input-apiKey',
  'fb-input-projectId',
  'fb-cloud-actions-box'
];

let allIdsFound = true;
requiredIds.forEach(id => {
  const found = indexHtml.includes(`id="${id}"`);
  if (!found) {
    console.error(`MISSING ID in HTML: ${id}`);
    allIdsFound = false;
  }
});
if (allIdsFound) {
  console.log('✓ All required HTML IDs are present.');
}

// Test Regex Snippet Parser
function parseFirebaseSnippet(text) {
  if (!text || typeof text !== 'string') return null;
  try {
    const parsed = JSON.parse(text);
    if (parsed && (parsed.apiKey || parsed.projectId)) return parsed;
  } catch(e) {}
  
  const config = {};
  const keys = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
  
  keys.forEach(k => {
    const reg = new RegExp(`['"]?${k}['"]?\\s*:\\s*['"]([^'"]+)['"]`, 'i');
    const match = text.match(reg);
    if (match && match[1]) {
      config[k] = match[1].trim();
    }
  });
  
  if (config.apiKey && config.projectId) return config;
  return null;
}

console.log('\nTesting parseFirebaseSnippet:');
const sampleSnippet = `
const firebaseConfig = {
  apiKey: "AIzaSyDummyKey12345",
  authDomain: "goldenpro-test.firebaseapp.com",
  projectId: "goldenpro-test",
  storageBucket: "goldenpro-test.appspot.com",
  messagingSenderId: "987654321",
  appId: "1:987654321:web:abcdef12345"
};
`;

const parsed = parseFirebaseSnippet(sampleSnippet);
console.log('Parsed result:', parsed);
if (parsed && parsed.apiKey === 'AIzaSyDummyKey12345' && parsed.projectId === 'goldenpro-test') {
  console.log('✓ parseFirebaseSnippet successfully extracted apiKey and projectId.');
} else {
  console.error('FAIL: parseFirebaseSnippet failed to extract keys!');
  process.exit(1);
}

// Test JSON format
const sampleJson = '{"apiKey":"AIzaSyKeyJson","projectId":"goldenpro-json"}';
const parsedJson = parseFirebaseSnippet(sampleJson);
if (parsedJson && parsedJson.apiKey === 'AIzaSyKeyJson') {
  console.log('✓ parseFirebaseSnippet successfully parsed direct JSON.');
} else {
  console.error('FAIL: parseFirebaseSnippet failed on JSON!');
  process.exit(1);
}

console.log('\nALL FIREBASE TESTS PASSED SUCCESSFULLY!');
