import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto w-full text-center">
      <div className="mb-12 flex justify-center">
        <div className="text-8xl font-serif text-black leading-none">“</div>
      </div>

      <blockquote className="text-2xl font-medium leading-snug text-gray-900 mb-12">
        We are what we repeatedly do. Excellence, then, is not an act, but a habit.
      </blockquote>

      <blockquote className="text-xl font-medium leading-snug text-gray-900 mb-12">
        우리가 반복적으로 하는 것이 곧 우리 자신이다. 그러므로 탁월함은 행동이 아니라 습관이다.
      </blockquote>

      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden relative">
          <Image
            src="/Aristotle.jpg"
            alt="Aristotle bust sculpture"
            fill
            sizes="48px"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-left">
          <div className="font-bold text-sm">Aristotle</div>
          <div className="text-xs text-gray-500">Ancient Greek Philosopher</div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="text-8xl font-serif text-black leading-none">”</div>
      </div>
    </section>
  );
}
