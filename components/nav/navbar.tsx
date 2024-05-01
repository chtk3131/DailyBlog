import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className="group">
        <Link href="/">DailyBlog</Link>
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
    </nav>
  );
}
