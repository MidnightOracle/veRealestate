import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Victoria Villano Evans',
  description: 'Get in touch with Victoria Villano Evans for all your Palm Coast real estate needs.',
};

export default function ContactPage() {
  return <ContactContent />;
} 