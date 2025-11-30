import Image from "next/image";

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

export default function Projects() {
  const projects = [
    { id: 1, category: "Web APP", title: "Video Editor", size: "large", image: "/videoEditorH.png" },
    { id: 2, category: "Web App", title: "AI-Podcast-Clipper", size: "small", image: "/Apch.png" },
    { id: 3, category: "App", title: "GeoGenieX", size: "small", image: "/metabizImage.png" },
    { id: 4, category: "Web App", title: "Video Asset Generator", size: "large", image: "/videoAssetGenerator.png" },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-24 flex items-end justify-between">
        <h2 className="text-[clamp(3rem,8vw,6rem)] font-medium tracking-tighter leading-none">Projects</h2>
        <p className="text-gray-500 max-w-sm leading-relaxed">제가 의미 있게 수행했던 프로젝트 목록입니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group relative rounded-none overflow-hidden ${
              project.size === "large" ? "md:col-span-7 aspect-[20/10]" : "md:col-span-5 aspect-[4/5]"
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                priority={project.id === 2}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-white/80 uppercase tracking-widest">{project.category}</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ArrowIcon className="w-5 h-5 text-gray-900" />
                  </div>
                </div>
                <h3 className="text-3xl text-white font-medium">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
