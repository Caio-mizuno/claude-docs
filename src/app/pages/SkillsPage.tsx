import { SkillSection } from "../components/structure/SkillSection";
import { SkillsTutorialSection } from "../components/skills/SkillsTutorialSection";
import { SkillsExamplesSection } from "../components/skills/SkillsExamplesSection";
import { SkillsTokenSavingsSection } from "../components/skills/SkillsTokenSavingsSection";
import { CreateSkillSection } from "../components/structure/CreateSkillSection";
import {
  YoutubeSection,
  type YouTubeVideo,
} from "../components/shared/YoutubeSection";

// ─── Adicione novos vídeos aqui ──────────────────────────────────────────────
const skillsVideos: YouTubeVideo[] = [
  // Exemplo de como adicionar um vídeo:
  // {
  //   title: "Título do vídeo",
  //   description: "Breve descrição do conteúdo do vídeo.",
  //   url: "https://www.youtube.com/watch?v=VIDEO_ID",
  // },
  {
    title: "Claude Code Skills & skills.sh - Crash Course",
    description: "Nesse vídeo mostra tudo sobre skills com Claude Code.",
    url: "https://www.youtube.com/watch?v=rcRS8-7OgBo",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export function SkillsPage() {
  return (
    <div className="space-y-4">
      <SkillSection />
      <SkillsTutorialSection />
      <SkillsExamplesSection />
      <SkillsTokenSavingsSection />
      <CreateSkillSection />
      <YoutubeSection videos={skillsVideos} title="Vídeos sobre Skills" />
    </div>
  );
}
