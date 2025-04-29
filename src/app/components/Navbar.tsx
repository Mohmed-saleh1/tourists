'use client';

import { Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-[#1eb2d4] text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left side - Actions */}
        <div className="flex items-center space-x-4 text-sm">
          <button className="hover:underline">انشاء حساب</button>
          <button className="bg-white text-[#1eb2d4] px-4 py-1 rounded-full font-medium hover:opacity-90">
            تسجيل الدخول
          </button>
          <button className="flex items-center space-x-1 hover:underline">
            <Globe size={16} />
            <span>العربية</span>
          </button>
        </div>

        {/* Right side - Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <div className="text-right">
            <p className="text-lg font-bold">Tourm</p>
            <p className="text-sm">Explore World</p>
          </div>
        </div>
      </div>
    </header>
  );
}
