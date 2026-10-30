export default function Footer({ content }) {
  return (
    <footer className="py-5 text-center text-white bg-[var(--primary-color)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <p>{content.copyright}</p>
      </div>
    </footer>
  );
}
