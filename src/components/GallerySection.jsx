import SectionTitle from './SectionTitle';

export default function GallerySection({ content }) {
  return (
    <section id="galeria" className="py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>{content.title}</SectionTitle>
        <p className="text-center mb-[30px]">{content.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.items.map((item) => (
            <figure
              className="overflow-hidden border border-[var(--border-color)] rounded-lg bg-white shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-[5px]"
              key={item.caption}
            >
              <img className="w-full h-auto" src={item.src} alt={item.alt} />
              <figcaption className="p-[15px] text-center font-bold text-white bg-[var(--primary-color)]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}