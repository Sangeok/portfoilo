import { Github, StickyNote, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 mt-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <h2 className="text-5xl font-medium tracking-tight max-w-xl leading-[1.1]">Let's Connect There</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl">HamSangEok</span>
            </div>
            <p className="text-gray-400 text-xs max-w-xs leading-relaxed">Frontend Developer and Youtuber.</p>
            <div className="flex gap-4 mt-6 text-gray-400">
              {/* Social Icons placeholders */}
              <Link href="https://github.com/Sangeok" className="text-gray-400 text-xs leading-relaxed">
                <Github size={18} />
              </Link>
              <Link href="https://velog.io/@hamsoo159/posts" className="text-gray-400 text-xs leading-relaxed">
                <StickyNote size={18} />
              </Link>
              <Link href="https://www.youtube.com/@역사시간_1" className="text-gray-400 text-xs leading-relaxed">
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Email Address</h4>
            <div className="text-gray-400 text-xs leading-relaxed space-y-2">
              <div>hamsoo159@naver.com</div>
              <div>hamsoo159@gmail.com</div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Youtube Link</h4>
            <div className="flex flex-col text-gray-400 text-xs leading-relaxed space-y-2 whitespace-nowrap">
              <Link
                href="https://www.youtube.com/@HistoryTeacher-x5y"
                className="text-gray-400 text-xs leading-relaxed"
              >
                https://www.youtube.com/@HistoryTeacher-x5y
              </Link>
              <Link href="https://www.youtube.com/@PodPeak-v3i" className="text-gray-400 text-xs leading-relaxed">
                https://www.youtube.com/@PodPeak-v3i
              </Link>
              <Link
                href="https://www.youtube.com/@%EC%97%AD%EC%82%AC%EC%8B%9C%EA%B0%84_1"
                className="text-gray-400 text-xs leading-relaxed"
              >
                https://www.youtube.com/@%EC%97%AD%EC%82%AC%EC%8B%9C%EA%B0%84_1
              </Link>
              <Link
                href="https://www.youtube.com/@PhilosophyTeacher-e8h"
                className="text-gray-400 text-xs leading-relaxed"
              >
                https://www.youtube.com/@PhilosophyTeacher-e8h
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-white/10 mt-12 pt-8 text-xs text-gray-600">
          <div>All rights reserved @HamSangEok</div>
        </div>
      </div>
    </footer>
  );
}
