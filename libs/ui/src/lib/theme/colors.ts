import Color from 'color';
// Similar to http://plasma.guide/colors/#secondary-colors
// But with our own colors

const colorSeriesNames = ['black', 'gray', 'yellow', 'blue', 'red', 'green'];
const colorNumbers = [20, 30, 40, 50, 60, 70, 80];

export const createBaseColors = (baseColorSeries, overrides) => {
  const calculatedBaseColors = {};

  colorSeriesNames.forEach((colorSeriesName) => {
    const colorSeries = baseColorSeries[colorSeriesName];
    if (!colorSeries) return;

    colorNumbers.forEach((colorNumber) => {
      calculatedBaseColors[`${colorSeriesName}${colorNumber}`] = Color(
        colorSeries
      )
        .lighten((50 - colorNumber) / 100)
        .hex();
    });
  });

  return {
    ...baseColorSeries,
    ...calculatedBaseColors,
    ...overrides,
  };
};

export const baseColors = createBaseColors(
  {
    white: '#fff',
    black: '#111',
    gray: '#c3c3c3',
    yellow: '#ffd16d',
    blue: '#526384',
    red: '#dc6450',
    green: '#599FA0',
  },
  {
    gray30: '#f9f9f9',
    gray40: '#e0e0e0',
    blue40: '#6b94e4',
  }
);

export const createColorAliases = (colors) => ({
  textBlack: colors.black50,
  primary: colors.yellow50,
  border: colors.gray40,
  bgGray: colors.gray30,
  inputActive: colors.blue40,
  inputBorder: colors.gray40,
  inputBorderHover: colors.gray50,
  inputError: colors.red50,
  link: colors.blue30,
});

export default {
  ...baseColors,
  ...createColorAliases(baseColors),
};
