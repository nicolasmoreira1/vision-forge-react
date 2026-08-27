import SectionTitle from './SectionTitle';

export default function TeamSection({ content }) {
  return (
    <section id="equipe" className="section section--muted">
      <div className="container">
        <SectionTitle>{content.title}</SectionTitle>

        <div className="grid-team">
          {content.members.map((member) => (
            <article className="team-member grid-item" key={member.name}>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="desc">{member.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
