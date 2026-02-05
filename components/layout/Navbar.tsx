'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Magnetic } from '@/components/ui/Magnetic';

const navItems = [
  { name: 'Tentang', href: '#about' }, // About
  { name: 'Karya', href: '#work' },    // Work
  { name: 'Kontak', href: '#contact' }, // Contact
];

export function Navbar() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center gap-8">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity mr-4">
          GHOSTDEV
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Magnetic key={item.name} strength={0.2}>
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors block py-2"
              >
                {item.name}
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic strength={0.3}>
          <a
            href="https://wa.me/6281216802722"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors"
          >
            Joki Tugasmu
          </a>
        </Magnetic>
      </nav>
    </motion.header>
  );
}
