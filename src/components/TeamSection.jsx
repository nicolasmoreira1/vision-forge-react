import SectionTitle from './SectionTitle';

export default function TeamSection({ content }) {
  return (
    <section id="equipe" className="py-20 bg-[var(--bg-light)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>{content.title}</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.members.map((member) => (
            <article
              className="px-[15px] py-[30px] text-center overflow-hidden border border-[var(--border-color)] rounded-lg bg-white shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-[5px]"
              key={member.name}
            >
              <h3 className="text-[1.05rem]">{member.name}</h3>
              <p className="my-[15px] text-[var(--secondary-color)] text-sm font-bold">{member.role}</p>
              <p className="text-sm">{member.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}