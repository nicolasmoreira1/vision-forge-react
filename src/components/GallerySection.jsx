import SectionTitle from './SectionTitle';

export default function GallerySection({ content }) {
  return (
    <section id="galeria" className="section">
      <div className="container">
        <SectionTitle>{content.title}</SectionTitle>
        <p className="subtitle">{content.subtitle}</p>

        <div className="grid-gallery">
          {content.items.map((item) => (
            <figure className="grid-item" key={item.caption}>
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
