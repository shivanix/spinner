let delay = 100;

setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, delay + 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, delay + 400);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, delay + 600);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay + 800);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay + 1000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, delay + 1200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, delay + 1400);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, delay + 1600);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay + 1800);

setTimeout(() => {
  process.stdout.write('\n');
}, delay + 2000);

