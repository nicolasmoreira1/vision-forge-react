import SectionTitle from './SectionTitle';

export default function ContactSection({ content }) {
  return (
    <section id="contato" className="py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>{content.title}</SectionTitle>

        <article className="max-w-[800px] mx-auto text-center [&_p+p]:mt-3">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}