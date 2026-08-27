import SectionTitle from './SectionTitle';

export default function SolutionSection({ content, checklistItems, checklist, setChecklist }) {
  const completedCount = checklist.filter(Boolean).length;
  const totalCount = checklistItems.length;
  const completionPercentage = totalCount
    ? Math.round((completedCount / totalCount) * 100)
    : 0;

  const handleToggleItem = (itemIndex) => {
    setChecklist((currentChecklist) =>
      checklistItems.map((_, index) =>
        index === itemIndex ? !Boolean(currentChecklist[index]) : Boolean(currentChecklist[index])
      )
    );
  };

  return (
    <section id="solucao" className="section">
      <div className="container">
        <SectionTitle>{content.title}</SectionTitle>

        <article className="content-text">
          {content.blocks.map((block) => (
            <section key={block.title}>
              <h3>{block.title}</h3>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>

        <section className="solution-checklist" aria-labelledby="solution-checklist-title">
          <div className="solution-checklist__header" aria-live="polite" aria-atomic="true">
            <div>
              <p className="solution-checklist__eyebrow">Checklist visível</p>
              <h3 id="solution-checklist-title">Seu progresso de estudo</h3>
            </div>
            <p className="solution-checklist__percentage">{completionPercentage}% concluído</p>
          </div>

          <div className="solution-checklist__meter" aria-hidden="true">
            <span style={{ width: `${completionPercentage}%` }} />
          </div>

          <p className="solution-checklist__summary">
            {completedCount} de {totalCount} itens marcados.
          </p>

          <ul className="solution-checklist__list">
            {checklistItems.map((item, index) => (
              <li key={item} className="solution-checklist__item">
                <label className="solution-checklist__label">
                  <input
                    type="checkbox"
                    checked={Boolean(checklist[index])}
                    onChange={() => handleToggleItem(index)}
                  />
                  <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
