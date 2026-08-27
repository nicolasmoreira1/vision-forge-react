import Header from './components/Header';
import SolutionSection from './components/SolutionSection';
import AudienceSection from './components/AudienceSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { siteContent } from './data/content';
import useLocalStorage from './hooks/useLocalStorage';

const solutionChecklistItems = [
  'Tirar uma foto nítida da página ou da lousa.',
  'Gerar um resumo curto com a ajuda da IA.',
  'Revisar os exercícios sugeridos logo depois da aula.',
  'Salvar o mapa mental para estudar mais tarde.',
];

const solutionChecklistKey = 'vision-forge-solution-checklist';

export default function App() {
  const [solutionChecklist, setSolutionChecklist] = useLocalStorage(
    solutionChecklistKey,
    solutionChecklistItems.map(() => false)
  );

  return (
    <>
      <Header brand={siteContent.brand} navigation={siteContent.navigation} />
      <main>
        <SolutionSection
          content={siteContent.solution}
          checklistItems={solutionChecklistItems}
          checklist={solutionChecklist}
          setChecklist={setSolutionChecklist}
        />
        <AudienceSection content={siteContent.audience} />
        <GallerySection content={siteContent.gallery} />
        <TeamSection content={siteContent.team} />
        <ContactSection content={siteContent.contact} />
      </main>
      <Footer content={siteContent.footer} />
    </>
  );
}
