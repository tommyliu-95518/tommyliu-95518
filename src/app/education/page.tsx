import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Tommy Liu',
	description: 'Tommy Liu\'s educational background including B.Tech in Computer Science and Engineering from Bengal College of Engineering and Technology.',
};

export default function EducationPage() {
	return <Education />;
}