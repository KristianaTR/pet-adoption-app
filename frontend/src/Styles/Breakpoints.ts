interface SizeType {
  mobileS: string,
  mobileM: string,
  mobileL: string,
  mobileLandscape: string,
  tablet: string,
  laptop: string,
  laptopL: string,
  desktop: string,
}

export const size: SizeType = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileLandscape: "576px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const deviceMax = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileLandscape: `(max-width: ${size.mobileLandscape})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const deviceMin = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileLandscape: `(min-width: ${size.mobileLandscape})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
