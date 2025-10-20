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
    id: 'oman-oil',
    title: 'Fuel, Play, and Earn: A Smart E-Wallet for Everyday Use',
    description: 'A gamified mobile e-wallet used at 260+ fueling stations. Users can top-up, play games, find stations, send credit, earn points, level up, and unlock exclusive rewards.',
    categories: ['Mobile App', 'UI/UX Design', 'Development'],
    bgColor: '#D4EFF9',
    logo: '/assets/images/companies/oman-oil.svg',
    mockup: {
      main: '/assets/images/home/mockups/oman-oil/oil.webp',
      mainSm: '/assets/images/home/mockups/oman-oil/oman-oil-sm.webp',
      back: '/assets/images/home/mockups/oman-oil/oman-oil-back.webp',
      backSm: '/assets/images/home/mockups/oman-oil/oman-oil-back-sm.svg',
      front: '/assets/images/home/mockups/oman-oil/oman-oil-front.svg',
      frontSm: '/assets/images/home/mockups/oman-oil/oman-oil-front-sm.svg',
    }
  },
  {
    id: 'al-yusr',
    title: 'Finance Simplified :Al Yusr financing & leasing mobile application',
    description: 'A fast, intuitive financing platform built for both individuals and businesses. This mobile app simplifies loan and leasing requests through automated workflows, real-time decisions, and personalized interfaces, positioning Al Yusr as a leading player in fintech innovation.',
    categories: ['Mobile App', 'UI/UX Design'],
    bgColor: '#F1F5F5',
    logo: '/assets/images/companies/alyusr.svg',
    mockup: {
      main: '/assets/images/home/mockups/alyusr/al-yusr.webp',
      mainSm: '/assets/images/home/mockups/alyusr/al-yusr-sm.webp',
      top: '/assets/images/home/mockups/alyusr/top.svg',
      topSm: '/assets/images/home/mockups/alyusr/top-sm.svg',
      bot: '/assets/images/home/mockups/alyusr/bot.svg',
      botSm: '/assets/images/home/mockups/alyusr/bot-sm.svg',
    }
  },
  {
    id: 'ifit',
    title: 'Team Wellness, Reinvented: A Gamified Health Experience for Bank Muscat Employees',
    description: 'A well-being app designed to energize the workplace through friendly team challenges and reward-driven engagement. Built to promote a healthy, connected, and motivated workforce.',
    categories: ['Mobile App', 'UI/UX Design'],
    bgColor: '#FDEFF0',
    logo: '/assets/images/companies/bank-muskat-colored.svg',
    mockup: {
      main: '/assets/images/home/mockups/ifit/ifit.webp',
      mainSm: '/assets/images/home/mockups/ifit/ifit-sm.webp',
      right: '/assets/images/home/mockups/ifit/right.svg',
      rightSm: '/assets/images/home/mockups/ifit/right-sm.svg',
      left: '/assets/images/home/mockups/ifit/left.svg',
      leftSm: '/assets/images/home/mockups/ifit/left-sm.svg',
      bot: '/assets/images/home/mockups/ifit/bot.svg',
      botSm: '/assets/images/home/mockups/ifit/bot-sm.svg',
    }
  },
  {
    id: 'tamluk',
    title: 'Bridging Investors and Developers Seamlessly',
    description: 'Tamluk is a digital crowdfunding platform that makes real estate investment accessible to everyone. It connects individual investors with developers looking to fund high-potential real estate projects. With a secure and intuitive interface, users can browse available opportunities, invest with ease, and monitor progress in real time.',
    categories: ['Website', 'UI/UX Design', 'Development'],
    bgColor: '#203847',
    logo: '/assets/images/companies/tamluk.svg',
    mockup: {
      main: '/assets/images/home/mockups/tamluk/tamluk.webp',
      mainSm: '/assets/images/home/mockups/tamluk/tamluk-sm.webp',
      top: '/assets/images/home/mockups/tamluk/top.png',
      topSm: '/assets/images/home/mockups/tamluk/top-sm.png',
      bot: '/assets/images/home/mockups/tamluk/bot.webp',
    }
  }
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(0);
  const [stickyTop, setStickyTop] = useState('100px');
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  const animatedText = 'Our portfolio includes a diverse range of digital products built to support growth and digital transformation — from B2B platforms to B2C apps, and digital solutions across multiple sectors.';
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
    <section className="bg-primary-brand-25 py-14 md:py-16 lg:py-[144px]">
      <div className="container max-sm:px-5 mx-auto">
        {/* Header Section */}
        <div className="text-start">
          <p className="font-medium text-primary text-base md:text-lg">
            Featured digital <br /> Products projects
          </p>
          <div className="max-w-3xl mt-4 md:mt-8">
            <p className="flex flex-wrap justify-start !px-0">
              {words.map((word, index) => (
                <span key={index} className="relative mt-2 mr-1 font-bold text-xl md:text-2xl">
                  <span className="absolute text-content-light">{word}</span>
                  <span className="relative z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
        width={project.id === 'tamluk' ? 550 : 295}
        height={project.id === 'tamluk' ? 409 : 485}
        className={`object-contain ${project.id === 'tamluk' ? '' : 'bottom-0 left-[50%] translate-x-[-50%]'} z-10 hidden absolute md:block`}
        style={project.id === 'tamluk' ? {} : { bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
      />
      <Image
        src={project.mockup.mainSm}
        alt={project.title}
        width={project.id === 'tamluk' ? 240 : 138}
        height={project.id === 'tamluk' ? 179 : 227}
        className="object-contain bottom-0 left-[50%] translate-x-[-50%] z-10 absolute md:hidden"
      />

      {/* Additional Elements Based on Project */}
      {project.id === 'oman-oil' && (
        <>
          <div className="absolute top-4 left-16 z-0" style={{ opacity: isActive ? 1 : 0, transform: 'none' }}>
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
          <div className="absolute top-[45%] translate-y-[-45%] z-20 rounded-2xl" style={{ opacity: isActive ? 1 : 0, transform: 'none' }}>
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
                 transform: isActive ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0)',
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

      {project.id === 'tamluk' && (
        <>
          <div className="absolute top-10 md:top-20 left-6 z-0"
               style={{
                 transform: isActive ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out'
               }}>
            <Image
              src={project.mockup.top!}
              alt="Tamluk"
              width={238}
              height={161}
              className="object-contain hidden md:block"
            />
            <Image
              src={project.mockup.topSm!}
              alt="Tamluk"
              width={103}
              height={70}
              className="object-contain md:hidden"
            />
          </div>
          <div className="absolute bottom-8 right-4 z-10"
               style={{
                 transform: isActive ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0)',
                 opacity: isActive ? 1 : 0,
                 transition: 'all 0.5s ease-out 0.1s'
               }}>
            <Image
              src={project.mockup.bot!}
              alt="Tamluk"
              width={255}
              height={118}
              className="object-contain hidden md:block"
            />
            <Image
              src={project.mockup.bot!}
              alt="Tamluk"
              width={111}
              height={51}
              className="object-contain md:hidden"
            />
          </div>
        </>
      )}
    </div>
  );
};
