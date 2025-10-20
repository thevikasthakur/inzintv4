'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Search,
} from 'lucide-react';
import Logo from './Logo';
import type { NavItem, MenuItem } from '@/types';
import { getIcon } from '@/lib/icons';

interface MobileMenuProps {
  navigationData: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  navigationData,
  isOpen,
  onClose,
}: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedItems(new Set());
      setActiveTab(null);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[70] h-full w-full bg-white shadow-2xl sm:w-[400px] lg:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <Logo />
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="border-b border-gray-200 p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                  />
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <nav className="space-y-2">
                    {navigationData.map((item) => (
                      <MobileMenuItem
                        key={item.id}
                        item={item}
                        isExpanded={expandedItems.has(item.id)}
                        onToggle={() => toggleItem(item.id)}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        onClose={onClose}
                      />
                    ))}
                  </nav>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="border-t border-gray-200 p-4">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-700"
                >
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>

                <div className="space-y-2 text-sm text-gray-600">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 hover:text-primary-600"
                  >
                    <Phone className="h-4 w-4" />
                    +1 (234) 567-890
                  </a>
                  <a
                    href="mailto:info@appinventiv.com"
                    className="flex items-center gap-2 hover:text-primary-600"
                  >
                    <Mail className="h-4 w-4" />
                    info@appinventiv.com
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    New York, USA
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Mobile Menu Item Component
function MobileMenuItem({
  item,
  isExpanded,
  onToggle,
  activeTab,
  setActiveTab,
  onClose,
}: {
  item: NavItem;
  isExpanded: boolean;
  onToggle: () => void;
  activeTab: string | null;
  setActiveTab: (tab: string | null) => void;
  onClose: () => void;
}) {
  if (!item.submenu) {
    return (
      <Link
        href={item.href || '#'}
        onClick={onClose}
        className="flex items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-900 hover:bg-gray-50"
      >
        {item.label}
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-900 hover:bg-gray-50"
      >
        {item.label}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {item.submenu.type === 'tabs' && item.submenu.tabs && (
              <TabsSubmenu
                tabs={item.submenu.tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onClose={onClose}
              />
            )}

            {item.submenu.type === 'columns' && item.submenu.columns && (
              <ColumnsSubmenu columns={item.submenu.columns} onClose={onClose} />
            )}

            {item.submenu.type === 'grid' && item.submenu.items && (
              <GridSubmenu items={item.submenu.items} onClose={onClose} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Tabs Submenu
function TabsSubmenu({
  tabs,
  activeTab,
  setActiveTab,
  onClose,
}: {
  tabs: any[];
  activeTab: string | null;
  setActiveTab: (tab: string | null) => void;
  onClose: () => void;
}) {
  return (
    <div className="ml-4 mt-2 space-y-2">
      {tabs.map((tab) => (
        <div key={tab.id}>
          <button
            onClick={() =>
              setActiveTab(activeTab === tab.id ? null : tab.id)
            }
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-primary-50 text-primary-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tab.label}
            <ChevronDown
              className={`h-3 w-3 transition-transform ${
                activeTab === tab.id ? 'rotate-180' : ''
              }`}
            />
          </button>

          {activeTab === tab.id && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="ml-3 mt-2 space-y-1"
            >
              {tab.content.items.map((item: MenuItem) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
                >
                  {item.icon && (
                    <div className="flex-shrink-0 pt-0.5">
                      {getIcon(item.icon, 'h-4 w-4 text-primary-600')}
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-gray-900">{item.label}</div>
                    {item.description && (
                      <div className="text-xs text-gray-500">
                        {item.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

// Columns Submenu
function ColumnsSubmenu({
  columns,
  onClose,
}: {
  columns: any[];
  onClose: () => void;
}) {
  return (
    <div className="ml-4 mt-2 space-y-4">
      {columns.map((column) => (
        <div key={column.title}>
          <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            {column.title}
          </div>
          <div className="space-y-1">
            {column.items.map((item: MenuItem) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="flex items-start gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
              >
                {item.icon && (
                  <div className="flex-shrink-0 pt-0.5">
                    {getIcon(item.icon, 'h-4 w-4 text-primary-600')}
                  </div>
                )}
                <div>
                  <div className="font-medium text-gray-900">{item.label}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500">{item.description}</div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Grid Submenu
function GridSubmenu({
  items,
  onClose,
}: {
  items: MenuItem[];
  onClose: () => void;
}) {
  return (
    <div className="ml-4 mt-2 space-y-1">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={onClose}
          className="flex items-start gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
        >
          {item.icon && (
            <div className="flex-shrink-0 pt-0.5">
              {getIcon(item.icon, 'h-4 w-4 text-primary-600')}
            </div>
          )}
          <div>
            <div className="font-medium text-gray-900">{item.label}</div>
            {item.description && (
              <div className="text-xs text-gray-500">{item.description}</div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
