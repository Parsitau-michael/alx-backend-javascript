#!/usr/bin/env node

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  // Closing message
  console.log('This important software is now closing');
  process.exit();
});
