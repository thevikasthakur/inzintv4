'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import type { NavSubmenu, TabItem, MenuItem, ColumnItem } from '@/types';
import { getIcon } from '@/lib/icons';

interface MegaMenuProps {
  submenu: NavSubmenu;
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ submenu, isOpen, onClose }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{ top: '120px' }}
        onClick={onClose}
      />

      {/* Mega Menu Content */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute left-1/2 -translate-x-1/2 w-screen max-w-7xl mt-0"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
          <div className="relative border-t border-gray-200 bg-white shadow-2xl rounded-b-2xl">
            <div className="px-8 py-8">
                {submenu.type === 'tabs' && submenu.tabs && (
                  <TabsLayout
                    tabs={submenu.tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    onClose={onClose}
                  />
                )}

                {submenu.type === 'columns' && submenu.columns && (
                  <ColumnsLayout
                    columns={submenu.columns}
                    hoveredItem={hoveredItem}
                    setHoveredItem={setHoveredItem}
                    onClose={onClose}
                  />
                )}

                {submenu.type === 'grid' && submenu.items && (
                  <GridLayout items={submenu.items} onClose={onClose} />
                )}

                {/* CTA Section */}
                {submenu.cta && (
                  <CTASection cta={submenu.cta} onClose={onClose} />
                )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// Tabs Layout Component
function TabsLayout({
  tabs,
  activeTab,
  setActiveTab,
  onClose,
}: {
  tabs: TabItem[];
  activeTab: number;
  setActiveTab: (index: number) => void;
  onClose: () => void;
}) {
  const currentTab = tabs[activeTab];

  return (
    <div className="flex gap-8">
      {/* Tab Navigation */}
      <div className="w-48 flex-shrink-0">
        <div className="space-y-1">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${
                activeTab === index
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {currentTab.content.title && (
              <h3 className="mb-6 text-lg font-semibold text-gray-900">
                {currentTab.content.title}
              </h3>
            )}

            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {currentTab.content.items.map((item) => (
                <MenuItem key={item.id} item={item} onClose={onClose} />
              ))}
            </div>

            {/* Featured Section */}
            {currentTab.content.featuredSection && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {currentTab.content.featuredSection.title}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {currentTab.content.featuredSection.items.map((featured) => (
                    <Link
                      key={featured.id}
                      href={featured.href}
                      onClick={onClose}
                      className="group relative overflow-hidden rounded-lg"
                    >
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-primary-600">
                        {featured.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Columns Layout Component
function ColumnsLayout({
  columns,
  hoveredItem,
  setHoveredItem,
  onClose,
}: {
  columns: ColumnItem[];
  hoveredItem: string | null;
  setHoveredItem: (id: string | null) => void;
  onClose: () => void;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
      {columns.map((column) => (
        <div key={column.title}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            {column.title}
          </h3>
          <div className="space-y-3">
            {column.items.map((item) => (
              <div key={item.id}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group flex items-start gap-3 rounded-lg p-2 transition-all hover:bg-gray-50"
                >
                  {item.icon && (
                    <div className="flex-shrink-0">
                      {getIcon(item.icon, 'h-5 w-5 text-primary-600')}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                        {item.label}
                      </span>
                      {item.submenu && (
                        <ChevronRight className="h-3 w-3 text-gray-400" />
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-0.5 text-xs text-gray-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Link>

                {/* Nested Submenu */}
                {item.submenu && hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-8 mt-2 space-y-2"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.href}
                        onClick={onClose}
                        className="block rounded px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Grid Layout Component
function GridLayout({
  items,
  onClose,
}: {
  items: MenuItem[];
  onClose: () => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={onClose}
          className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-primary-600 hover:shadow-md"
        >
          {item.icon && (
            <div className="mb-3 inline-flex rounded-lg bg-primary-50 p-3">
              {getIcon(item.icon, 'h-6 w-6 text-primary-600')}
            </div>
          )}
          <h4 className="mb-1 font-semibold text-gray-900 group-hover:text-primary-600">
            {item.label}
          </h4>
          {item.description && (
            <p className="text-sm text-gray-500">{item.description}</p>
          )}
        </Link>
      ))}
    </div>
  );
}

// Menu Item Component
function MenuItem({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="group flex items-start gap-3 rounded-lg p-3 transition-all hover:bg-gray-50"
    >
      {item.icon && (
        <div className="flex-shrink-0 rounded-lg bg-primary-50 p-2">
          {getIcon(item.icon, 'h-5 w-5 text-primary-600')}
        </div>
      )}
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 group-hover:text-primary-600">
          {item.label}
        </h4>
        {item.description && (
          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        )}
      </div>
    </Link>
  );
}

// CTA Section Component
function CTASection({
  cta,
  onClose,
}: {
  cta: { title: string; description: string; buttonText: string; buttonLink: string; image?: string };
  onClose: () => void;
}) {
  return (
    <div className="mt-8 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="mb-2 text-xl font-bold">{cta.title}</h3>
          <p className="mb-4 text-primary-100">{cta.description}</p>
          <Link
            href={cta.buttonLink}
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 transition-all hover:bg-primary-50"
          >
            {cta.buttonText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {cta.image && (
          <div className="ml-6 hidden lg:block">
            <img
              src={cta.image}
              alt={cta.title}
              className="h-32 w-32 rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
