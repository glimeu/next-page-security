import { FiMenu, FiUser, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';

import { BaseAnchor } from './base-anchor';
import { useDimensions } from '../hooks/use-dimensions';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useDimensions();

  function handleToggleMenu() {
    setIsOpen((state) => !state);
  }

  return (
    <header className="flex w-screen px-6 py-4 bg-white border-b border-gray-200 md:px-8 lg:px-12">
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto md:flex-row">
        <div className="flex items-center justify-between w-full md:justify-start md:w-max md:mr-8">
          <BaseAnchor className="text-2xl font-bold text-zinc-800 lg:text-3xl" href="/">
            Catsuc
          </BaseAnchor>

          <button
            className="text-2xl md:hidden"
            onClick={handleToggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <Transition
          show={isOpen || width > 768}
          className="flex flex-col w-full mt-4 md:mt-0 md:flex-row"
        >
          <nav className="flex flex-col gap-1 md:flex-row md:items-center">
            <BaseAnchor
              className="px-2.5 py-1.5 rounded hover:bg-gray-100 text-sm capitalize transition-colors text-gray-600"
              href="/dashboard"
            >
              Dashboard
            </BaseAnchor>
            <BaseAnchor
              className="px-2.5 py-1.5 rounded hover:bg-gray-100 text-sm capitalize transition-colors text-gray-600"
              href="/history"
            >
              Histórico
            </BaseAnchor>
          </nav>

          <Popover className="mt-4 md:ml-auto md:relative md:mt-0">
            <Popover.Button className="flex flex-row-reverse items-center px-3 py-1 transition-colors rounded md:flex-row hover:bg-gray-100">
              <div className="flex flex-col ml-2 text-left md:mr-2">
                <p className="text-sm text-gray-900">Miguel Ângelo</p>
                <span className="text-xs font-light text-gray-600">miguel@example.com</span>
              </div>

              <div className="flex items-center justify-center w-8 h-8 text-xl text-gray-400 bg-gray-200 rounded-full">
                <FiUser />
              </div>
            </Popover.Button>

            
          </Popover>
        </Transition>
      </div>
    </header>
  );
}
