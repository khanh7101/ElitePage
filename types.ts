export interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface TestimonialItem {
  id: number;
  names: string;
  content: string;
  image: string;
}

export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface PackageItem {
  id: number;
  title: string;
  subtitle: string;
  featuresGroup1Title: string;
  featuresGroup1: PackageFeature[];
  featuresGroup2Title: string;
  featuresGroup2: PackageFeature[];
  highlight: boolean;
}