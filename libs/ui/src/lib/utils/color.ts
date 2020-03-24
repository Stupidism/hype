export default (colorName) => ({ theme }) =>
  theme.colors[colorName] || colorName;
