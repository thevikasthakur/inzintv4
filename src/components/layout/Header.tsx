"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnnouncementBar from "./AnnouncementBar";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import ScrollAnnouncementModal from "./ScrollAnnouncementModal";
import { navigationData } from "@/data/navigation";

interface HeaderProps {
  showAnnouncement?: boolean;
  announcementText?: string;
  announcementLink?: string;
  announcementLinkText?: string;
}

export default function Header({
  showAnnouncement = true,
  announcementText = `Code's still hot. Our bots are creating the website. We just watch. — `,
  announcementLink = "/website-status",
  announcementLinkText = "track it live",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false); // Hidden on initial load
  const [documentHeight, setDocumentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isAnnouncementVisible, setIsAnnouncementVisible] =
    useState(showAnnouncement);

  const { scrollY } = useScroll();

  // Transform values for scroll animations
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerY = useTransform(scrollY, [0, 100], [0, -5]);

  // Scroll progress bar width - use state values to avoid SSR issues
  const scrollProgress = useTransform(
    scrollY,
    [0, Math.max(documentHeight - windowHeight, 1)],
    ["0%", "100%"]
  );

  useEffect(() => {
    // Set document and window heights on client side
    const updateDimensions = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
      setWindowHeight(window.innerHeight);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show header only when Claude Code area reaches near the top (after 500px)
      // This aligns with the HeroSectionV2 scroll animation
      if (currentScrollY > 500) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header Container */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHeaderVisible ? 0 : -100,
          opacity: isHeaderVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        {/* Announcement Bar */}
        {isAnnouncementVisible && (
          <AnnouncementBar
            text={announcementText}
            link={announcementLink}
            linkText={announcementLinkText}
            onClose={() => setIsAnnouncementVisible(false)}
          />
        )}

        {/* Main Navigation */}
        <Navigation
          navigationData={navigationData}
          isScrolled={isScrolled}
          onMobileMenuClick={() => setIsMobileMenuOpen(true)}
        />

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400"
          style={{
            width: scrollProgress,
          }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        navigationData={navigationData}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Scroll Announcement Modal */}
      {/* {showAnnouncement && (
        <ScrollAnnouncementModal
          message={announcementText}
          ctaText={announcementLinkText}
          ctaLink={announcementLink}
        />
      )} */}

      {/* No spacer needed since header is hidden on initial load */}
    </>
  );
}
