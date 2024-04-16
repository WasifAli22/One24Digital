export interface Client {
    url: string;
    alt: string;
  }
export  interface MorqueData {
    title: string;
    description: string;
    clientsData: Client[];
  }