const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist', 'poc-app-from-html', 'browser');
const outFile = path.join(__dirname, 'dist', 'widget.js');

// Collect all JS files from the build output in correct load order
const files = fs.readdirSync(distDir).filter((f) => f.endsWith('.js'));

// polyfills first, then main/chunk files
const polyfills = files.filter((f) => f.startsWith('polyfills'));
const rest = files.filter((f) => !f.startsWith('polyfills'));

const ordered = [...polyfills, ...rest];

let bundle = '';
for (const file of ordered) {
  bundle += fs.readFileSync(path.join(distDir, file), 'utf-8') + '\n';
}

fs.writeFileSync(outFile, bundle, 'utf-8');
console.log(`\n✅  Widget bundle written to dist/widget.js (${(bundle.length / 1024).toFixed(1)} KB)`);
console.log(`    Concatenated files: ${ordered.join(', ')}`);
