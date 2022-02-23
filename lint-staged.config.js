module.exports = {
  "*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.{ts,js,tsx,jsx}": ["prettier --write"],
};
