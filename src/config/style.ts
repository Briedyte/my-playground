export const ColorPalette = {
  background: "linear-gradient(rgba(255, 233, 172, 0.267), #ffe6a36c)",
  darkerBackground: "#fbf3de",
  text: "#282828",
  primary: "#00b092",
  secondary: "#d39a90",
  tertuary: "#D7BB03",
} as const;

export const zIndex = {
  negative: -1,
  positive: 1,
} as const;

export const baseFontSize = "16px";

export const fontSize = {
  12: "0.75rem",
  13: "0.8125rem",
  14: "0.875rem",
  15: "0.9375rem",
  16: "1rem",
  18: "1.125rem",
  20: "1.25rem",
  24: "1.5rem",
  28: "1.75rem",
  30: "1.875rem",
  34: "2.125rem",
  40: "2.5rem",
  46: "2.875rem",
  48: "3rem",
  72: "4.5rem",
  80: "5rem",
} as const;

export const spacing = {
  0: "0px",
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  11: "11px",
  12: "12px",
  14: "14px",
  16: "16px",
  20: "20px",
  24: "24px",
  28: "28px",
  32: "32px",
  40: "40px",
  48: "48px",
  50: "50px",
  56: "56px",
  60: "60px",
  64: "64px",
  68: "68px",
  76: "76px",
  80: "80px",
  100: "100px",
  105: "105px",
  120: "120px",
  160: "160px",
  192: "192px",
  200: "200px",
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export const borderRadius = {
  4: "4px",
  5: "5px",
  8: "8px",
  10: "10px",
  12: "12px",
  24: "24px",
  30: "30px",
  40: "40px",
  50: "50px",
  circle: "50%",
} as const;

export const fontFamily = {
  nunito: '"Nunito", sans-serif',
  teko: '"Teko", sans-serif',
} as const;

export const Breakpoint = {
  xs: 480,
  s: 768,
  m: 992,
  l: 1280,
};

export const MediaQuery = {
  xs: `@media(max-width: ${Breakpoint.xs}px)`,
  s: `@media(max-width: ${Breakpoint.s}px)`,
  m: `@media(max-width: ${Breakpoint.m - 1}px)`,
  l: `@media(max-width: ${Breakpoint.l - 1}px)`,
  xl: `@media(min-width: ${Breakpoint.l}px)`,
};
