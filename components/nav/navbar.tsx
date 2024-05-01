import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          DailyBlog
        </Link>
        <div
          className="
          h-1
          w-0
          group-hover:w-full
          transition-all
          bg-green-500
        "
        ></div>
      </div>
      <Button variant="outline">Login</Button>
    </nav>
  );
}
