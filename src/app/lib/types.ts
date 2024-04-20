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
