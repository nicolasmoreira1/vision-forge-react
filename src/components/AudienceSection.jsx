import SectionTitle from './SectionTitle';

export default function AudienceSection({ content }) {
  return (
    <section id="publico-alvo" className="py-20 bg-[var(--bg-light)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>{content.title}</SectionTitle>

        <article className="max-w-[800px] mx-auto text-justify [&_p+p]:mt-3">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}