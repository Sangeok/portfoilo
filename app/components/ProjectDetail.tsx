"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "../types/project";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const hasSlides = Array.isArray(project.slideImage) && project.slideImage.length > 0;
  const totalSlides = hasSlides ? project.slideImage.length : 0;

  useEffect(() => {
    setActiveSlide(0);
  }, [project]);

  const handlePrevSlide = () => {
    if (totalSlides < 2) return;
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    if (totalSlides < 2) return;
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleSelectSlide = (index: number) => {
    if (index === activeSlide) return;
    setActiveSlide(index);
  };

  return (
    <div className="relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors duration-300"
        aria-label="Close modal"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Hero Image */}
      <div className="relative w-full aspect-video max-h-[60vh] overflow-hidden rounded-2xl bg-black/5">
        {hasSlides ? (
          <>
            <Image
              src={project.slideImage[activeSlide]}
              alt={`${project.title} slide ${activeSlide + 1}`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 70vw"
            />
            {totalSlides > 1 && (
              <>
                <button
                  type="button"
                  aria-label="이전 이미지"
                  onClick={handlePrevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  aria-label="다음 이미지"
                  onClick={handleNextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {project.slideImage.map((_, index) => (
                    <button
                      key={`${project.title}-slide-${index}`}
                      type="button"
                      aria-label={`${project.title} 이미지 ${index + 1} 보기`}
                      onClick={() => handleSelectSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === activeSlide ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
                <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                  {activeSlide + 1} / {totalSlides}
                </span>
              </>
            )}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
            미리보기 이미지가 없습니다.
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-12 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-xs uppercase tracking-widest text-gray-600 font-medium">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-black">{project.title}</h1>
        </div>

        {/* Short Description */}
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{project.description}</p>

        {/* Tech Stack */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-black">기술 스택</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-mono text-gray-700 hover:bg-gray-200 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Functionality */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-black">주요 기능</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.functionality.map((functionality, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-black rounded-full" />
                <span className="leading-relaxed">{functionality}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* features */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-black">특징</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-black rounded-full" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Long Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-black">프로젝트 소개</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{project.longDescription}</p>
        </div>

        {/* Action Buttons */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium">GitHub</span>
              </a>
            )}
          </div>
        )}

        {/* Metadata Footer */}
        <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
          {project.duration && (
            <div>
              <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Duration</span>
              <span className="text-gray-700 font-medium">{project.duration}</span>
            </div>
          )}
          {project.role && (
            <div>
              <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Role</span>
              <span className="text-gray-700 font-medium">{project.role}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
