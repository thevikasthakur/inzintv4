'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, Search, Phone } from 'lucide-react';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import type { NavItem } from '@/types';

interface NavigationProps {
  navigationData: NavItem[];
  isScrolled?: boolean;
  onMobileMenuClick: () => void;
}

export default function Navigation({
  navigationData,
  isScrolled = false,
  onMobileMenuClick,
}: NavigationProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(itemId);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleCloseMenu = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      className={`relative transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant={isScrolled ? 'default' : 'default'} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigationData.map((item) => (
              <div
                key={item.id}
                className="relative"
              >
                <div
                  onMouseEnter={() => item.submenu && handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-600"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        activeMenu === item.id
                          ? 'bg-gray-50 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                      }`}
                    >
                      {item.label}
                      {item.submenu && (
                        <motion.div
                          animate={{ rotate: activeMenu === item.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      )}
                    </button>
                  )}
                </div>

                {/* Mega Menu */}
                {item.submenu && activeMenu === item.id && (
                  <div
                    className="absolute left-0 top-full pt-0 z-50"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MegaMenu
                      submenu={item.submenu}
                      isOpen={true}
                      onClose={handleCloseMenu}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-600 lg:block"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-700 lg:flex"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={onMobileMenuClick}
              className="flex flex-col gap-1.5 rounded-lg p-2 hover:bg-gray-50 lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="block h-0.5 w-6 bg-gray-700 transition-all" />
              <span className="block h-0.5 w-6 bg-gray-700 transition-all" />
              <span className="block h-0.5 w-6 bg-gray-700 transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 right-0 top-full z-50 border-t border-gray-200 bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search services, industries, resources..."
                className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                autoFocus
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">Popular searches:</span>
              {['AI Development', 'Mobile App', 'Web Development', 'Fintech'].map(
                (term) => (
                  <button
                    key={term}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
