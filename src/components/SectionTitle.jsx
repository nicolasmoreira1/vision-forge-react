export default function SectionTitle({ children }) {
  return (
    <h2 className="mb-10 text-center text-[26px] md:text-[32px] text-[var(--primary-color)] after:content-[''] after:block after:w-[60px] after:h-1 after:mx-auto after:mt-2.5 after:bg-[var(--secondary-color)]">
      {children}
    </h2>
  );
}
