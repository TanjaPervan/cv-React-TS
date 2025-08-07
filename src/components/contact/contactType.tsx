// 📄 ContactTypes.ts
export interface ContactInfo {
  email: string;
  phone: string;
  cvLink: string;
  socials: {
    icon: string;
    link: string;
  }[];
}
