export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <span className="inline-block px-4 py-1 rounded-full border border-gray-200 text-sm font-medium w-fit">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
            배운 것을 바탕으로 항상 유의미한 사이드 프로젝트를 만들고 있습니다.
          </h2>
        </div>

        {/* Right Column: Stats & Description */}
        <div className="lg:col-span-7 flex flex-col justify-between pt-16">
          <p className="text-gray-500 max-w-md ml-auto text-lg mb-12">
            프론트엔드 개발은 단순 직업이 아니라 제 꿈을 실현하기 위한 밑거름입니다.
          </p>

          <div className="flex flex-col gap-12 ml-auto max-w-md w-full">
            <div>
              <div className="text-6xl font-medium mb-2">+1000</div>
              <p className="text-gray-500 text-sm">
                사이드 프로젝트를 통해 유튜브를 운영하여 다음과 같은 구독자 수를 가지고 있습니다.
              </p>
            </div>
            <div>
              <div className="text-6xl font-medium mb-2">+3</div>
              <p className="text-gray-500 text-sm">제가 실제로 부업으로서 활용하고 있는 사이드 프로젝트 개수 입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
