import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';
import Footer from '../components/Footer';
import Skills from '@/components/Skills';
import Hero from '@/components/Hero';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-[#1a1a1a] text-white px-4">
  <div className="max-w-screen-xl mx-auto">
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <AboutMe />
    <Education />
    <Footer />
  </div>
</div>

  );
};

export default Home;