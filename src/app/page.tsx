import type { NextPage } from 'next';
import CurriculumVitaePage from '@/components/CurriculumVitaePage';
import cv from '@/cv';

const Home: NextPage = () => <CurriculumVitaePage cv={cv} />;

export default Home;
