let delay = 100;
const spinners = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", "\n"];
const redraw = () => {
  for (const spin of spinners) {
    setTimeout(() => {
      process.stdout.write(`\r${spin}`);
    }, delay += 200);
  }
};
redraw();
