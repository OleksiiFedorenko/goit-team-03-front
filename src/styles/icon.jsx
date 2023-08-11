export const svgBurgerMenu = {
  display: 'inline-block',
  width: 'inherit',
  height: 'inherit',
  stroke: 'currentColor',
  strokeWidth: 0,
  '&:hover, &:focus': {
    stroke: 'currentColor',
  },
};

export const svgPlus = {
  width: '20px',
  height: '20px',
  color: 'icon.svgPlus',
  stroke: 'currentColor',
};

export const svgLogOut = {
  display: 'inline-block',
  strokeWidth: '0',
  fill: 'transparent',
  color: 'icon.svgLogout',
  stroke: 'currentColor',
  mr: '14px',
  width: '32px',
  height: '32px',
  '&:hover, &:focus': {
    color: 'icon.activeSvgLogout',
    stroke: 'currentColor',
  },
};

export const svgBoardNavList = {
  width: '16px',
  height: '16px',
  fill: 'transparent',
  color: 'svgBoardList',
  stroke: 'currentColor',
};

export const svgClose = {
  width: '9',
  height: '9',
  fill: 'transparent',
  color: 'text.primary',
  stroke: 'currentColor',
  '&:hover, &:focus': {
    color: 'icon.svgPlus',
    stroke: 'currentColor',
  },
};
