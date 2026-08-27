import SectionTitle from './SectionTitle';

export default function ContactSection({ content }) {
  return (
    <section id="contato" className="section">
      <div className="container">
        <SectionTitle>{content.title}</SectionTitle>

        <article className="content-text content-text--center">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}
