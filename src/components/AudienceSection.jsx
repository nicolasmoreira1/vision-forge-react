import SectionTitle from './SectionTitle';

export default function AudienceSection({ content }) {
  return (
    <section id="publico-alvo" className="section section--muted">
      <div className="container">
        <SectionTitle>{content.title}</SectionTitle>

        <article className="content-text">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}
