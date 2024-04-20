import { gql } from "graphql-tag";

export const typeDefs = gql`
  # official website query string
  type Query {
    getWebsiteData: Website
  }
  type Website {
    header: Header
    footer: Footer
    home: Home
    portfolio: Portfolio
    services: Services
    company: Company
    contact: Contact
  }

  # defining header section of website
  type Header {
    menuLi: [MenuItem]
  }
  type MenuItem {
    id: ID!
    name: String!
    path: String!
  }

  # Home section of the website
  type Home {
    bannerData: HomeBanner
    compaignSlider: CompaignSlider
    trendsData: TrendsData
    morqueData: MorqueData
  }
  type HomeBanner {
    animeText: String
    background: Background
    curveArrow: CurveArrow
    arrowImg: ArrowImg
  }
  type Background {
    bgColor: BgColor
    bgImg: String
  }
  type BgColor {
    dark: String
  }
  type CurveArrow {
    url: String
    alt: String
    h: Int
    w: Int
  }
  type ArrowImg {
    link: String
    url: String
    alt: String
    size: ImgSize
  }
  type ImgSize {
    h: Int
    w: Int
  }
  type CompaignSlider {
    title: String
    images: [Image]
  }
  type Image {
    url: String
    alt: String
  }
  type TrendsData {
    heading: String
    animatedText: String
    bgImg: String
  }
  type MorqueData {
    title: String
    description: String
    clientsData: [ClientsData]
  }
  type ClientsData {
    url: String
    alt: String
  }

  # Portfolio page data section
  type Portfolio {
    PortfolioData: [PortfolioItem]
  }
  type PortfolioItem {
    id: ID
    title: String
    description: String
    src: String
    includedAgency: String
    details: String
  }

  # Services page data for the website
  type Services {
    ServicesData: [ServicesItem]
  }
  type ServicesItem {
    id: ID
    title: String
    description: String
    src: String!
    includedAgency: String
    details: String
  }

  # Company page data for the website
  type Company {
    CompanyData: [CompanyItem]
  }
  type CompanyItem {
    id: ID
    title: String
    description: String
    img: Img
    src: String
    includedAgency: String
    details: String
  }
  type Img {
    url: String
    alt: String
  }

  # Contact page data for the website
  type Contact {
    GotQuestionData: [GotQuestionItem]
    ReachUsData: [ReachUsItem]
    ContactSliderData: ContactSliderItem
    cities : [City]
  }
  type GotQuestionItem {
    heading: String
    paragraph: String
    number: String
    desc: String
    solution: String
  }
  type ReachUsItem {
    heading: String
    address: String
    phone: String
    email: String
  }
  type ContactSliderItem {
    title: String
    description: String
    contacts: [ContactItem]
  }
  type ContactItem {
    url: String
    alt: String
  }
  type City {
    name: String
    address: String
  }

  # defining footer section of website
  type Footer {
    footerData: [FooterItem]
    footerInstructions: [FooterInstruction]
  }
  type FooterItem {
    title: String
    links: [FooterLink]
  }
  type FooterLink {
    name: String
    href: String
  }
  type FooterInstruction {
    text: String
  }
`;