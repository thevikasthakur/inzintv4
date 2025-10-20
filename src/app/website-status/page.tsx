'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PageStatus {
  path: string;
  status: 'completed' | 'in_progress' | 'pending';
  progress: number;
}

export default function WebsiteStatusPage() {
  const [commits, setCommits] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [tests, setTests] = useState(0);
  const [deployments, setDeployments] = useState(0);
  const [pagesBuilt, setPagesBuilt] = useState(0);
  const [components, setComponents] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const allPages: PageStatus[] = [
    { path: '/', status: 'completed', progress: 100 },
    { path: '/generative-ai-development-company', status: 'pending', progress: 0 },
    { path: '/ai-agent-development', status: 'pending', progress: 0 },
    { path: '/chatgpt-integration-services', status: 'pending', progress: 0 },
    { path: '/custom-llm-development', status: 'pending', progress: 0 },
    { path: '/machine-learning-development', status: 'pending', progress: 0 },
    { path: '/ai-consulting-services', status: 'pending', progress: 0 },
    { path: '/about', status: 'pending', progress: 0 },
    { path: '/leadership', status: 'pending', progress: 0 },
    { path: '/careers', status: 'pending', progress: 0 },
    { path: '/how-we-work', status: 'pending', progress: 0 },
    { path: '/awards', status: 'pending', progress: 0 },
    { path: '/certifications', status: 'pending', progress: 0 },
    { path: '/partnerships', status: 'pending', progress: 0 },
    { path: '/locations', status: 'pending', progress: 0 },
    { path: '/contact', status: 'pending', progress: 0 },
    { path: '/mobile-app-development', status: 'pending', progress: 0 },
    { path: '/ios-app-development', status: 'pending', progress: 0 },
    { path: '/android-app-development', status: 'pending', progress: 0 },
    { path: '/react-native-app-development', status: 'pending', progress: 0 },
    { path: '/flutter-app-development', status: 'pending', progress: 0 },
    { path: '/web-development', status: 'pending', progress: 0 },
    { path: '/frontend-development', status: 'pending', progress: 0 },
    { path: '/backend-development', status: 'pending', progress: 0 },
    { path: '/full-stack-development', status: 'pending', progress: 0 },
    { path: '/software-development', status: 'pending', progress: 0 },
    { path: '/mvp-development', status: 'pending', progress: 0 },
    { path: '/staff-augmentation', status: 'pending', progress: 0 },
    { path: '/dedicated-development-teams', status: 'pending', progress: 0 },
    { path: '/maintenance-support', status: 'pending', progress: 0 },
    { path: '/devops-services', status: 'pending', progress: 0 },
    { path: '/cloud-services', status: 'pending', progress: 0 },
    { path: '/aws-development', status: 'pending', progress: 0 },
    { path: '/azure-development', status: 'pending', progress: 0 },
    { path: '/google-cloud-development', status: 'pending', progress: 0 },
    { path: '/iot-development', status: 'pending', progress: 0 },
    { path: '/blockchain-development', status: 'pending', progress: 0 },
    { path: '/ar-vr-development', status: 'pending', progress: 0 },
    { path: '/product-strategy-consulting', status: 'pending', progress: 0 },
    { path: '/technology-consulting', status: 'pending', progress: 0 },
    { path: '/digital-consulting', status: 'pending', progress: 0 },
    { path: '/data-analytics-services', status: 'pending', progress: 0 },
    { path: '/big-data-services', status: 'pending', progress: 0 },
    { path: '/data-engineering-services', status: 'pending', progress: 0 },
    { path: '/fintech-app-development', status: 'pending', progress: 0 },
    { path: '/healthcare-app-development', status: 'pending', progress: 0 },
    { path: '/ecommerce-app-development', status: 'pending', progress: 0 },
    { path: '/education-app-development', status: 'pending', progress: 0 },
    { path: '/real-estate-app-development', status: 'pending', progress: 0 },
    { path: '/logistics-app-development', status: 'pending', progress: 0 },
    { path: '/on-demand-app-development', status: 'pending', progress: 0 },
    { path: '/travel-app-development', status: 'pending', progress: 0 },
    { path: '/entertainment-app-development', status: 'pending', progress: 0 },
    { path: '/social-networking-app-development', status: 'pending', progress: 0 },
    { path: '/food-delivery-app-development', status: 'pending', progress: 0 },
    { path: '/automotive-app-development', status: 'pending', progress: 0 },
    { path: '/portfolio', status: 'pending', progress: 0 },
    { path: '/case-studies/dominos', status: 'pending', progress: 0 },
    { path: '/case-studies/kfc', status: 'pending', progress: 0 },
    { path: '/case-studies/pizzahut', status: 'pending', progress: 0 },
    { path: '/case-studies/ikea', status: 'pending', progress: 0 },
    { path: '/case-studies/jobget', status: 'pending', progress: 0 },
    { path: '/case-studies/mudflap', status: 'pending', progress: 0 },
    { path: '/case-studies/vyrb', status: 'pending', progress: 0 },
    { path: '/case-studies/bootstrap', status: 'pending', progress: 0 },
    { path: '/blog', status: 'pending', progress: 0 },
    { path: '/guides', status: 'pending', progress: 0 },
    { path: '/resources/ebooks', status: 'pending', progress: 0 },
    { path: '/resources/whitepapers', status: 'pending', progress: 0 },
    { path: '/press-releases', status: 'pending', progress: 0 },
    { path: '/events', status: 'pending', progress: 0 },
    { path: '/podcasts', status: 'pending', progress: 0 },
    { path: '/app-cost-calculator', status: 'pending', progress: 0 },
    { path: '/case-studies', status: 'pending', progress: 0 },
    { path: '/resources/infographics', status: 'pending', progress: 0 },
    { path: '/hire-developers', status: 'pending', progress: 0 },
  ];

  const completedPages = allPages.filter(p => p.status === 'completed').length;
  const totalPages = allPages.length;
  const targetProgress = Math.floor((completedPages / totalPages) * 100);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(drawMatrix, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Terminal output animation
  useEffect(() => {
    const lines = [
      '<span style="color: #888;">// Autonomous build system initialized...</span>',
      '<span style="color: #6c9cff;">import</span> { WebsiteBuilder } <span style="color: #6c9cff;">from</span> <span style="color: #ffd76d;">\'@inzint/core\'</span>;',
      '',
      '<span style="color: #6c9cff;">const</span> builder = <span style="color: #6c9cff;">new</span> WebsiteBuilder({',
      '  mode: <span style="color: #ffd76d;">\'autonomous\'</span>,',
      '  branch: <span style="color: #ffd76d;">\'main\'</span>',
      '});',
      '',
      '<span style="color: #888;">// CLAUDE-CODEGEN-01: Building homepage...</span>',
      '<span style="color: #00ff41;">✓</span> Homepage layout generated',
      '<span style="color: #00ff41;">✓</span> Hero section implemented',
      '<span style="color: #00ff41;">✓</span> Navigation system built',
      '',
      '<span style="color: #888;">// CLAUDE-REVIEW-01: Running code review...</span>',
      '<span style="color: #00ff41;">✓</span> Code quality checks passed',
      '<span style="color: #00ff41;">✓</span> Best practices verified',
      '',
      '<span style="color: #888;">// CLAUDE-QA-01: Running test suite...</span>',
      '<span style="color: #00ff41;">✓</span> Unit tests: PASSED',
      '<span style="color: #00ff41;">✓</span> Integration tests: PASSED',
      '',
      '<span style="color: #6c9cff;">git</span> commit -m <span style="color: #ffd76d;">"feat: implement homepage"</span>',
      '<span style="color: #888;">[main a7f3c2b]</span> <span style="color: #00ff41;">✓</span> Commit successful',
      '',
      '<span style="color: #ff6b9d;">Building production bundle...</span>',
      '<span style="color: #00ff41;">✓ Build complete!</span>',
    ];

    let currentLine = 0;
    const typeInterval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(typeInterval);
      }
    }, 400);

    return () => clearInterval(typeInterval);
  }, []);

  // Counter animations
  useEffect(() => {
    const duration = 3000;
    const steps = 50;
    const interval = duration / steps;

    const targets = {
      commits: 4,
      reviews: 3,
      tests: 127,
      deployments: 2,
      pagesBuilt: completedPages,
      components: 45,
    };

    let step = 0;
    const counterInterval = setInterval(() => {
      step++;
      const progress = step / steps;

      setCommits(Math.floor(targets.commits * progress));
      setReviews(Math.floor(targets.reviews * progress));
      setTests(Math.floor(targets.tests * progress));
      setDeployments(Math.floor(targets.deployments * progress));
      setPagesBuilt(Math.floor(targets.pagesBuilt * progress));
      setComponents(Math.floor(targets.components * progress));

      if (step >= steps) {
        setCommits(targets.commits);
        setReviews(targets.reviews);
        setTests(targets.tests);
        setDeployments(targets.deployments);
        setPagesBuilt(targets.pagesBuilt);
        setComponents(targets.components);
        clearInterval(counterInterval);
      }
    }, interval);

    return () => clearInterval(counterInterval);
  }, [completedPages]);

  // Progress animation
  useEffect(() => {
    let progress = 0;
    const progressInterval = setInterval(() => {
      if (progress < targetProgress) {
        progress += 0.5;
        setOverallProgress(Math.min(progress, targetProgress));
      } else {
        clearInterval(progressInterval);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [targetProgress]);

  // Periodic counter updates
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setCommits(prev => prev + Math.floor(Math.random() * 2));
      if (Math.random() > 0.7) setReviews(prev => prev + 1);
      setTests(prev => prev + Math.floor(Math.random() * 5));
      if (Math.random() > 0.8) setDeployments(prev => prev + 1);
    }, 5000);

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e27] text-[#00ff41] font-mono relative overflow-x-hidden">
      {/* Matrix Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Logo/Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-pulse">
            AUTONOMOUS BUILD SYSTEM
          </h1>
          <div className="text-lg sm:text-xl text-[#6c9cff]">
            &gt; AI agents are constructing the website<br />
            &gt; No human intervention required<br />
            &gt; Status: <span className="text-[#00ff41]">ACTIVE</span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="bg-[#1a1f3a] border-2 border-[#6c9cff] rounded-lg p-6 mb-8 shadow-lg shadow-[#6c9cff]/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#6c9cff] text-lg font-bold">BUILD PROGRESS</span>
            <span className="text-[#00ff41] text-2xl font-bold">{Math.floor(overallProgress)}%</span>
          </div>
          <div className="w-full h-8 bg-[#0a0e27] border border-[#00ff41] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00ff41] via-[#6c9cff] to-[#00ff41] bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] shadow-lg shadow-[#00ff41]/50"
              style={{ width: `${overallProgress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="mt-3 text-right text-[#6c9cff] text-sm">
            ETA: <span className="text-[#00ff41]">CALCULATING...</span>
          </div>
        </motion.div>

        {/* Bot Status */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-6 text-center animate-[float_3s_ease-in-out_infinite]">
            <div className="text-5xl mb-3">🤖</div>
            <div className="text-[#00ff41] font-bold text-lg mb-1">CLAUDE-CODEGEN-01</div>
            <div className="text-[#6c9cff] text-sm mb-2">Code Generation Bot</div>
            <div className="text-xs text-[#888]">STATUS: WRITING CODE</div>
          </div>
          <div className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-6 text-center animate-[float_3s_ease-in-out_infinite] [animation-delay:1s]">
            <div className="text-5xl mb-3">🤖</div>
            <div className="text-[#00ff41] font-bold text-lg mb-1">CLAUDE-REVIEW-01</div>
            <div className="text-[#6c9cff] text-sm mb-2">Code Review Bot</div>
            <div className="text-xs text-[#888]">STATUS: REVIEWING CODE</div>
          </div>
          <div className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-6 text-center animate-[float_3s_ease-in-out_infinite] [animation-delay:2s]">
            <div className="text-5xl mb-3">🤖</div>
            <div className="text-[#00ff41] font-bold text-lg mb-1">CLAUDE-QA-01</div>
            <div className="text-[#6c9cff] text-sm mb-2">Quality Assurance Bot</div>
            <div className="text-xs text-[#888]">STATUS: RUNNING TESTS</div>
          </div>
        </motion.div>

        {/* Terminal Output */}
        <motion.div
          className="bg-[#1a1f3a] border-2 border-[#00ff41] rounded-lg p-6 mb-8 shadow-lg shadow-[#00ff41]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex gap-2 mb-4 pb-3 border-b border-[#00ff41]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="min-h-[300px] text-sm leading-relaxed">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                dangerouslySetInnerHTML={{ __html: line }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-1"
              />
            ))}
            {terminalLines.length > 0 && (
              <span className="inline-block w-2 h-4 bg-[#00ff41] animate-[blink_1s_infinite] ml-1"></span>
            )}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-4 text-center">
            <div className="text-[#6c9cff] text-xs mb-2">GIT COMMITS</div>
            <div className="text-2xl font-bold">{commits}</div>
          </div>
          <div className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-4 text-center">
            <div className="text-[#6c9cff] text-xs mb-2">CODE REVIEWS</div>
            <div className="text-2xl font-bold">{reviews}</div>
          </div>
          <div className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-4 text-center">
            <div className="text-[#6c9cff] text-xs mb-2">TESTS PASSED</div>
            <div className="text-2xl font-bold">{tests}</div>
          </div>
          <div className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-4 text-center">
            <div className="text-[#6c9cff] text-xs mb-2">DEPLOYMENTS</div>
            <div className="text-2xl font-bold">{deployments}</div>
          </div>
          <div className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-4 text-center">
            <div className="text-[#6c9cff] text-xs mb-2">PAGES BUILT</div>
            <div className="text-2xl font-bold">{pagesBuilt}</div>
          </div>
          <div className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-4 text-center">
            <div className="text-[#6c9cff] text-xs mb-2">COMPONENTS</div>
            <div className="text-2xl font-bold">{components}</div>
          </div>
        </motion.div>

        {/* Git Info */}
        <motion.div
          className="bg-[#1a1f3a] border border-[#00ff41] rounded-lg p-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-xl font-bold mb-4 text-[#6c9cff]">REPOSITORY STATUS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-[#888]">BRANCH:</span> <span className="text-[#00ff41]">main</span>
            </div>
            <div>
              <span className="text-[#888]">EXPECTED RELEASE:</span> <span className="text-[#00ff41]">SOON™</span>
            </div>
            <div>
              <span className="text-[#888]">BUILD STATUS:</span> <span className="text-[#00ff41]">PASSING</span>
            </div>
            <div>
              <span className="text-[#888]">DEPLOYMENT:</span> <span className="text-[#00ff41]">AUTOMATED</span>
            </div>
          </div>
        </motion.div>

        {/* Pages Status Table */}
        <motion.div
          className="bg-[#1a1f3a] border-2 border-[#00ff41] rounded-lg p-6 shadow-lg shadow-[#00ff41]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-xl font-bold mb-4 text-[#6c9cff]">PAGE BUILD QUEUE</h2>
          <div className="text-sm mb-4 text-[#888]">
            Total: {totalPages} pages | Completed: {completedPages} | Remaining: {totalPages - completedPages}
          </div>
          <div className="overflow-x-auto max-h-96 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-[#1a1f3a] border-b-2 border-[#00ff41]">
                <tr>
                  <th className="text-left py-2 px-3 text-[#6c9cff]">PAGE PATH</th>
                  <th className="text-center py-2 px-3 text-[#6c9cff]">STATUS</th>
                  <th className="text-center py-2 px-3 text-[#6c9cff]">PROGRESS</th>
                </tr>
              </thead>
              <tbody>
                {allPages.map((page, index) => (
                  <tr key={index} className="border-b border-[#00ff41]/30 hover:bg-[#00ff41]/10">
                    <td className="py-2 px-3 font-mono text-xs">{page.path}</td>
                    <td className="py-2 px-3 text-center">
                      {page.status === 'completed' && (
                        <span className="text-[#00ff41]">✓ COMPLETED</span>
                      )}
                      {page.status === 'in_progress' && (
                        <span className="text-[#ffbd2e]">⟳ IN PROGRESS</span>
                      )}
                      {page.status === 'pending' && (
                        <span className="text-[#888]">⋯ QUEUED</span>
                      )}
                    </td>
                    <td className="py-2 px-3 text-center">
                      <div className="w-full bg-[#0a0e27] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-[#00ff41]"
                          style={{ width: `${page.progress}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-8 text-center border-t border-[#00ff41] pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <p className="text-sm text-[#6c9cff]">
            SYSTEM STATUS: <span className="text-[#00ff41]">OPERATIONAL</span>
          </p>
          <p className="text-xs text-[#888] mt-2">
            Autonomous build process running 24/7 | No human intervention required
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
