const sentence = "hello there from lighthouse labs\nall your base are belong to us\nyou have no chance to survive make your time\n";

let delay = 0;

for (const char of sentence) {
  delay += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + delay)
}
