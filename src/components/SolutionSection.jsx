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
    <section id="solucao" className="py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>{content.title}</SectionTitle>

        <article className="max-w-[800px] mx-auto text-justify [&_h3]:mt-5 [&_h3]:text-[var(--secondary-color)] [&_p+p]:mt-3">
          {content.blocks.map((block) => (
            <section key={block.title}>
              <h3>{block.title}</h3>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>

        <section
          className="max-w-[800px] mx-auto mt-10 p-7 border border-[rgba(52,152,219,0.2)] rounded-[20px] bg-gradient-to-b from-white to-[#f8fbfe] shadow-[var(--shadow-soft)]"
          aria-labelledby="solution-checklist-title"
        >
          <div
            className="flex items-start justify-between gap-5 mb-[18px] flex-wrap"
            aria-live="polite"
            aria-atomic="true"
          >
            <div>
              <p className="mb-1 text-[var(--secondary-color)] text-[13px] font-bold uppercase tracking-[0.08em]">
                Checklist visível
              </p>
              <h3 id="solution-checklist-title" className="text-[var(--primary-color)] text-xl">
                Seu progresso de estudo
              </h3>
            </div>
            <p className="px-[14px] py-[10px] rounded-full bg-[rgba(52,152,219,0.12)] text-[var(--primary-color)] font-bold whitespace-nowrap">
              {completionPercentage}% concluído
            </p>
          </div>

          <div className="overflow-hidden h-3 mb-3 rounded-full bg-[rgba(44,62,80,0.1)]" aria-hidden="true">
            <span
              className="block h-full rounded-[inherit] bg-gradient-to-r from-[var(--secondary-color)] to-[#7cc8ff] transition-[width] duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>

          <p className="mb-[18px] text-[#5c6b7a] text-[15px]">
            {completedCount} de {totalCount} itens marcados.
          </p>

          <ul className="list-none grid gap-3">
            {checklistItems.map((item, index) => (
              <li key={item} className="border border-[rgba(44,62,80,0.08)] rounded-2xl bg-white">
                <label className="flex items-center gap-3.5 px-4 py-3.5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="peer flex-none w-[18px] h-[18px] accent-[var(--secondary-color)]"
                    checked={Boolean(checklist[index])}
                    onChange={() => handleToggleItem(index)}
                  />
                  <span className="text-[var(--text-color)] leading-normal peer-checked:text-[var(--primary-color)] peer-checked:line-through peer-checked:decoration-2 peer-checked:decoration-[rgba(52,152,219,0.45)]">
                    {item}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}