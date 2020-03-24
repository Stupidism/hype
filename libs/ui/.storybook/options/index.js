import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  // colorPrimary: "hotpink",
  // colorSecondary: "deepskyblue",

  // // UI
  appBg: 'white',
  // appContentBg: "skyblue",
  // appBorderColor: "grey",
  // appBorderRadius: 4,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: "monospace",

  // // Text colors
  // textColor: "black",
  // textInverseColor: "rgba(255,255,255,0.9)",

  // // Toolbar default and active colors
  // barTextColor: "silver",
  // barSelectedColor: "black",
  // barBg: "hotpink",

  // // Form colors
  // inputBg: "white",
  // inputBorder: "silver",
  // inputTextColor: "black",
  // inputBorderRadius: 4,

  brandTitle: 'HYPE',
  brandUrl: 'https://hypeasia.co/'
  // brandImage: '',
});

export default {
  theme,
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullScreen: false,
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showNav: true,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: true,
  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: 'bottom',
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: /\/|\./,
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off multiple hierarchy roots
   *   /\|/ - split by `|`
   * @type {Regex}
   */
  hierarchyRootSeparator: /\|/,
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,
  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true,
  /**
   * show/hide tool bar
   * @type {Boolean}
   */
  isToolshown: true
};
