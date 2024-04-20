import gql from "graphql-tag";

export const headerQuery = gql`
  query GetHeader {
    getHeader {
      menuLi {
        id
        name
        path
      }
    }
  }
`;

export const footerQuery = gql`
  query GetFooter {
    getFooter {
      footerData {
        links {
          href
          name
        }
        title
        addressLi {
          name
        }
        locationTitle
      }
      footerInstructions {
        text
      }
    }
  }
`;
export const getHome = gql`
  query GetHome {
    getHome {
      bannerData {
        animeText
        arrowImg {
          alt
          link
          size {
            h
            w
          }
          url
        }
        background {
          bgColor {
            dark
          }
          bgImg
        }
        curveArrow {
          alt
          h
          url
          w
        }
      }
    }
  }
`;

export const getPortfolio = gql`
  query GetPortfolio {
    getPortfolio {
      PortfolioData {
        description
        details
        id
        includedAgency
        src
        title
      }
    }
  }
`;

export const getServices = gql`
  query GetServices {
    getServices {
      ServicesData {
        description
        details
        id
        includedAgency
        src
        title
      }
    }
  }
`;

export const getCompany = gql`
  query GetCompany {
    getCompany {
      CompanyData {
        description
        details
        id
        img {
          alt
          url
        }
        includedAgency
        src
        title
      }
    }
  }
`;

export const getContact = gql`
  query GetContact {
    getContact {
      ContactSliderData {
        contacts {
          alt
          url
        }
        description
        title
      }
      GotQuestionData {
        desc
        heading
        number
        paragraph
        solution
      }
      ReachUsData {
        address
        email
        heading
        phone
      }
      cities {
        address
        name
      }
    }
  }
`;
