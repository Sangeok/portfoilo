export default function Experience() {
  const experiences = [
    {
      company: "주식회사 메타비즈디자인",
      role: "프론트엔드 개발자",
      year: "2024.09 — 2025.10",
    },
    {
      company: "Tmax Ai Bigdata Academy",
      role: "학생",
      year: "2023.09 - 2023.12",
    },
    {
      company: "단국대학교 컴퓨터공학과",
      role: "학생",
      year: "2018.03 — 2025.02",
    },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-medium tracking-tight mb-6">Experience</h2>
          <p className="text-gray-500 max-w-xs leading-relaxed">저의 경력 기록입니다.</p>
        </div>

        <div className="lg:col-span-8">
          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 hover:border-black transition-colors duration-300"
              >
                <div className="md:w-1/3">
                  <h3 className="text-lg font-medium text-gray-400 group-hover:text-black transition-colors duration-300">
                    {exp.company}
                  </h3>
                </div>
                <div className="md:w-1/3">
                  <span className="text-lg text-gray-800 block mb-1 md:mb-0">{exp.role}</span>
                </div>
                <div className="md:w-1/3 flex md:justify-end gap-8">
                  <span className="text-sm text-gray-500 font-mono">{exp.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
