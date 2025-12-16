/**
 * Types TypeScript globaux pour l'application
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

