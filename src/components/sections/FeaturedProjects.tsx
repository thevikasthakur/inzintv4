'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Mockup {
  main: string;
  mainSm: string;
  back?: string;
  backSm?: string;
  front?: string;
  frontSm?: string;
  top?: string;
  topSm?: string;
  bot?: string;
  botSm?: string;
  right?: string;
  rightSm?: string;
  left?: string;
  leftSm?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  bgColor: string;
  logo: string;
  mockup: Mockup;
}

const projects: Project[] = [
  {
    id: 'bapco',
    title: 'Fuel, Play, and Earn: A Smart E-Wallet for Everyday Use',
    description: 'A gamified mobile e-wallet used at 260+ fueling stations. Users can top-up, play games, find stations, send credit, earn points, level up, and unlock exclusive rewards.',
    categories: ['Mobile App', 'UI/UX Design', 'Development'],
    bgColor: '#F9D4D4',
    logo: '/assets/images/companies/bapco.svg',
    mockup: {
      main: '/assets/images/home/mockups/bapco/bapco-main.png',
      mainSm: '/assets/images/home/mockups/bapco/bapco-main.png',
      back: '/assets/images/home/mockups/bapco/bapco-card.png',
      backSm: '/assets/images/home/mockups/bapco/bapco-card.png',
      front: '/assets/images/home/mockups/bapco/bapco-front-png.svg',
      frontSm: '/assets/images/home/mockups/bapco/bapco-front-png.svg',
    }
  },
  {
    id: 'al-yusr',
    title: 'Finance Simplified: Floss personal finance mobile application',
    description: 'A fast, intuitive personal finance platform built for both individuals and businesses. This mobile app simplifies financial management through automated workflows, real-time insights, and personalized interfaces, positioning Floss as a leading player in fintech innovation.',
    categories: ['Mobile App', 'UI/UX Design'],
    bgColor: '#F0EBFF',
    logo: '/assets/images/companies/flooss.png',
    mockup: {
      main: '/assets/images/home/mockups/floss/floss-main.png',
      mainSm: '/assets/images/home/mockups/floss/al-yusr-sm.webp',
      top: '/assets/images/home/mockups/floss/floss-top-card.svg',
      topSm: '/assets/images/home/mockups/floss/top-sm.svg',
      bot: '/assets/images/home/mockups/floss/bot.svg',
      botSm: '/assets/images/home/mockups/floss/bot-sm.svg',
    }
  },
  {
    id: 'ifit',
    title: 'Crush Goals, Burn Calories: A Gamified Fitness Companion for Everyday Wellness',
    description: 'A vibrant fitness app that turns daily health goals into an engaging experience. Track calories, steps, and mileage, take on challenges, and stay motivated with real-time progress — all designed to make wellness feel effortless and fun.',
    categories: ['Mobile App', 'UI/UX Design'],
    bgColor: '#FDEFF0',
    logo: '/assets/images/companies/vibefit.png',
    mockup: {
      main: '/assets/images/home/mockups/ifit/vibefit.png',
      mainSm: '/assets/images/home/mockups/ifit/ifit-sm.webp',
      right: '/assets/images/home/mockups/ifit/right.svg',
      rightSm: '/assets/images/home/mockups/ifit/right-sm.svg',
      left: '/assets/images/home/mockups/ifit/left.svg',
      leftSm: '/assets/images/home/mockups/ifit/left-sm.svg',
      top: '/assets/images/home/mockups/ifit/vibefit-barometer.png',
      topSm: '/assets/images/home/mockups/ifit/vibefit-barometer.png',
      bot: '/assets/images/home/mockups/ifit/walk-stats.png',
      botSm: '/assets/images/home/mockups/ifit/bot-sm.svg',
    }
  }
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(0);
  const [stickyTop, setStickyTop] = useState('100px');
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  const animatedText = 'These success stories showcase how we transform ideas into market-leading digital products that drive real business value.';
  const words = animatedText.split(' ');

  useEffect(() => {
    const calculateStickyTop = () => {
      const windowHeight = window.innerHeight;
      const navbarHeight = 80;
      const panelHeight = 550;

      const availableHeight = windowHeight - navbarHeight;
      const topPosition = navbarHeight + (availableHeight - panelHeight) / 2;
      const finalTop = Math.max(navbarHeight + 20, topPosition);

      setStickyTop(`${finalTop}px`);
    };

    const handleScroll = () => {
      if (!stickyRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementHeight = ref.offsetHeight;

        if (scrollY >= elementTop - windowHeight / 2 &&
            scrollY < elementTop + elementHeight - windowHeight / 2) {
          setActiveProject(index);
        }
      });
    };

    calculateStickyTop();
    window.addEventListener('resize', calculateStickyTop);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', calculateStickyTop);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative py-14 md:py-16 lg:py-[144px]">
      {/* Gradient transition from previous section */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-primary-brand-25/50 to-primary-brand-25 pointer-events-none" />

      {/* Decorative elements for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-50" />

      <div className="relative container max-sm:px-5 mx-auto">
        {/* Transition Bridge Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-600">Real Results, Real Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            From Process to <span className="text-primary-500">Products</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            See how our AI-powered methodology transforms ambitious ideas into successful digital products
          </p>
        </div>

        {/* Original Header Section with enhanced styling */}
        <div className="text-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary-500"></div>
            <p className="font-semibold text-primary-500 text-sm uppercase tracking-wider">
              Case Studies
            </p>
          </div>
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-6">
            Featured Digital Products
          </h3>
          <div className="max-w-3xl">
            <p className="flex flex-wrap justify-start !px-0">
              {words.map((word, index) => (
                <span key={index} className="relative mt-2 mr-1 font-medium text-lg md:text-xl">
                  <span className="absolute text-gray-400">{word}</span>
                  <span className="relative z-50 opacity-0 hover:opacity-100 transition-opacity duration-300 text-gray-900">
                    {word}
                  </span>
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-16 md:mt-24">
          <div className="flex gap-5 flex-col lg:flex-row">
            {/* Left Side - Project Details */}
            <div className="flex-1">
              {projects.map((project, index) => (
                <div key={project.id} className="mb-[200px] lg:mb-[300px] last:mb-0">
                  {/* Mobile Mockup Display */}
                  <div
                    className="h-[256px] md:h-[550px] mx-auto text-center rounded-xl overflow-hidden block lg:hidden mb-10"
                    style={{ backgroundColor: project.bgColor }}
                  >
                    <ProjectMockup project={project} isActive={true} />
                  </div>

                  {/* Project Info */}
                  <div
                    ref={el => { projectRefs.current[index] = el; }}
                    className="max-w-[50ch]"
                  >
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={150}
                      height={50}
                      className="object-contain"
                    />
                    <h1 className="text-primary text-2xl md:text-4xl font-semibold rtl:font-bold mt-10 leading-normal md:leading-[42px] lg:leading-[48px]">
                      {project.title}
                    </h1>
                    <p className="font-normal text-base mt-4 text-content-secondary leading-normal">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-10">
                      {project.categories.map((category, catIndex) => (
                        <div
                          key={catIndex}
                          className="rounded-full border border-content-border px-4 py-2 text-sm font-normal text-primary bg-white"
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Sticky Mockup Display (Desktop Only) */}
            <div className="flex-1 hidden lg:block">
              <div
                ref={stickyRef}
                className="h-[550px] w-full text-center rounded-xl overflow-hidden"
                style={{
                  position: 'sticky',
                  top: stickyTop
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    style={{
                      backgroundColor: project.bgColor,
                      opacity: activeProject === index ? 1 : 0,
                      pointerEvents: activeProject === index ? 'auto' : 'none',
                    }}
                    className="absolute inset-0 w-full h-full transition-opacity duration-500"
                  >
                    <ProjectMockup project={project} isActive={activeProject === index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for project mockup display
const ProjectMockup = ({ project, isActive }: { project: Project; isActive: boolean }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Device Mockup */}
      <Image
        src={project.mockup.main}
        alt={project.title}
        width={295}
        height={485}
        className="object-contain bottom-0 left-[50%] translate-x-[-50%] z-10 hidden absolute md:block"
        style={{ bottom: project.id === 'al-yusr' ? '45px' : project.id === 'ifit' ? '40px' : 0, left: '50%', transform: `translateX(-50%)${project.id === 'al-yusr' ? ' scaleY(1.2) scaleX(1.15)' : project.id === 'ifit' ? ' scaleX(1.15) scaleY(1.2)' : ''}` }}
      />
      <Image
        src={project.mockup.mainSm}
        alt={project.title}
        width={138}
        height={227}
        className="object-contain bottom-0 left-[50%] translate-x-[-50%] z-10 absolute md:hidden"
      />

      {/* Additional Elements Based on Project */}
      {project.id === 'bapco' && (
        <>
          <div className="absolute top-4 left-16 z-0"
               style={{
                 transform: isActive ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out'
               }}>
            <Image
              src={project.mockup.back!}
              alt="Background UI"
              width={337}
              height={181}
              className="object-contain hidden md:block"
            />
            <Image
              src={project.mockup.backSm!}
              alt="Background UI"
              width={128}
              height={69}
              className="object-contain md:hidden"
            />
          </div>
          <div className="absolute top-[45%] translate-y-[-45%] z-20 rounded-2xl"
               style={{
                 transform: isActive ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out 0.1s'
               }}>
            <Image
              src={project.mockup.front!}
              alt="Front UI"
              width={420}
              height={91}
              className="object-contain hidden md:block"
            />
            <Image
              src={project.mockup.frontSm!}
              alt="Front UI"
              width={197}
              height={43}
              className="object-contain md:hidden"
            />
          </div>
        </>
      )}

      {project.id === 'al-yusr' && (
        <>
          <div className="absolute bottom-0 top-[45%] translate-y-[-45%] z-10"
               style={{
                 transform: isActive ? 'translateX(0) scale(1) scaleX(1.15)' : 'translateX(-50px) scale(0) scaleX(1.15)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out'
               }}>
            <Image
              src={project.mockup.top!}
              alt="Al Yusr"
              width={343}
              height={116}
              className="object-contain hidden md:block"
            />
            <Image
              src={project.mockup.topSm!}
              alt="Al Yusr"
              width={180}
              height={60}
              className="object-contain md:hidden"
            />
          </div>
          <div className="absolute bottom-4 md:bottom-8 z-10"
               style={{
                 transform: isActive ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out 0.1s'
               }}>
            <Image
              src={project.mockup.bot!}
              alt="Al Yusr"
              width={406}
              height={108}
              className="object-contain hidden md:block"
            />
            <Image
              src={project.mockup.botSm!}
              alt="Al Yusr"
              width={162}
              height={43}
              className="object-contain md:hidden"
            />
          </div>
        </>
      )}

      {project.id === 'ifit' && (
        <>
          <div className="absolute top-8 right-20 md:right-24 z-10"
               style={{
                 transform: isActive ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out'
               }}>
            <Image
              src={project.mockup.right!}
              alt="iFit"
              width={126}
              height={179}
              className="object-contain rotate-12 hidden md:block"
            />
            <Image
              src={project.mockup.rightSm!}
              alt="iFit"
              width={52}
              height={74}
              className="object-contain md:hidden"
            />
          </div>
          <div className="absolute top-8 left-20 md:left-24 z-0"
               style={{
                 transform: isActive ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out 0.1s'
               }}>
            <Image
              src={project.mockup.left!}
              alt="iFit"
              width={126}
              height={179}
              className="object-contain -rotate-12 hidden md:block"
            />
            <Image
              src={project.mockup.leftSm!}
              alt="iFit"
              width={58}
              height={82}
              className="object-contain md:hidden"
            />
          </div>
          <div className="absolute bottom-28 md:bottom-32 z-10"
               style={{
                 transform: isActive ? 'translateX(0) scale(0.6)' : 'translateX(0) scale(0)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out 0.15s'
               }}>
            <Image
              src={project.mockup.top!}
              alt="iFit"
              width={339}
              height={95}
              className="object-contain hidden md:block"
            />
            <Image
              src={project.mockup.topSm!}
              alt="iFit"
              width={147}
              height={41}
              className="object-contain md:hidden"
            />
          </div>
          <div className="absolute bottom-10 md:bottom-14 z-10"
               style={{
                 transform: isActive ? 'translateX(0) scale(1)' : 'translateX(0) scale(0)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out 0.2s'
               }}>
            <Image
              src={project.mockup.bot!}
              alt="iFit"
              width={339}
              height={95}
              className="object-contain hidden md:block"
            />
            <Image
              src={project.mockup.botSm!}
              alt="iFit"
              width={147}
              height={41}
              className="object-contain md:hidden"
            />
          </div>
        </>
      )}

    </div>
  );
};
