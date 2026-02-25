import { AgentsSection } from "../components/structure/AgentsSection";
import { AgentsTutorialSection } from "../components/agents/AgentsTutorialSection";
import { AgentsExamplesSection } from "../components/agents/AgentsExamplesSection";
import { AgentsTokenSavingsSection } from "../components/agents/AgentsTokenSavingsSection";
import { CreateAgentSection } from "../components/structure/CreateAgentSection";
import {
  YoutubeSection,
  type YouTubeVideo,
} from "../components/shared/YoutubeSection";

// ─── Adicione novos vídeos aqui ──────────────────────────────────────────────
const agentsVideos: YouTubeVideo[] = [
  // Exemplo de como adicionar um vídeo:
  // {
  //   title: "Título do vídeo",
  //   description: "Breve descrição do conteúdo do vídeo.",
  //   url: "https://www.youtube.com/watch?v=VIDEO_ID",
  // },
  {
    title: "Como usar múltiplos agentes no Claude Code (Tutorial Completo)",
    description:
      "Agent Teams com o novo Opus 4.6. Vamos ver na prática como coordenar um team lead e seus teammates para criar uma feature complexa no QuantBrasil, analisando se o custo elevado de tokens realmente compensa o resultado final.",
    url: "https://www.youtube.com/watch?v=ZiWW0mzRc7c",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export function AgentsPage() {
  return (
    <div className="space-y-4">
      <AgentsSection />
      <AgentsTutorialSection />
      <AgentsExamplesSection />
      <AgentsTokenSavingsSection />
      <CreateAgentSection />
      <YoutubeSection videos={agentsVideos} title="Vídeos sobre Agentes" />
    </div>
  );
}
