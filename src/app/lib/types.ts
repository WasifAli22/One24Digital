export interface Client {
  url: string;
  alt: string;
}
export interface MorqueData {
  title: string;
  description: string;
  clientsData: Client[];
}
export interface FooterSection {
  title?: string;
  links?: { name: string; href: string }[];
  locationTitle?: string;
  addressLi?: { name: string }[];
}
export interface Footer {
  getFooter: {
    footerData: FooterSection[];
    footerInstructions: {
      text: string;
    }[];
  };
}
export interface MenuLi {
  id: number;
  name: string;
  path: string;
}
export interface Header {
  getHeader: {
    menuLi: MenuLi[];
  };
}


// home page type
// ########## HOME BANNER ############
interface Size {
  h: number;
  w: number;
}

interface ArrowImg {
  alt: string;
  link: string;
  size: Size;
  url: string;
}

interface BgColor {
  dark: string;
}

interface Background {
  bgColor: BgColor;
  bgImg: string;
}

interface CurveArrow {
  alt: string;
  h: number;
  url: string;
  w: number;
}

export interface BannerData {
  animeText: string;
  arrowImg: ArrowImg;
  background: Background;
  curveArrow: CurveArrow;
}
// configure home compaign banner
interface ImageItem {
  src: string;
  alt: string;
}

export interface TestImages {
  title: string;
  images: ImageItem[];
}

// home page TrendsBanner
export interface TrendsBanner {
  heading: string;
  animatedText: string;
  bgImg: string;
}