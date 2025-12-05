import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Tommy Liu Chatterjee',
	description: 'Get in touch with Tommy Liu Chatterjee, a Software Developer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}