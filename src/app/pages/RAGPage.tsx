import { RAGOverviewSection } from "../components/rag/RAGOverviewSection";
import { RAGSetupSection } from "../components/rag/RAGSetupSection";
import { RAGExamplesSection } from "../components/rag/RAGExamplesSection";
import { RAGAdvantagesSection } from "../components/rag/RAGAdvantagesSection";
import {
  YoutubeSection,
  type YouTubeVideo,
} from "../components/shared/YoutubeSection";

// ─── Adicione novos vídeos aqui ──────────────────────────────────────────────
const ragVideos: YouTubeVideo[] = [
  // Exemplo de como adicionar um vídeo:
  // {
  //   title: "Título do vídeo",
  //   description: "Breve descrição do conteúdo do vídeo.",
  //   url: "https://www.youtube.com/watch?v=VIDEO_ID",
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

export function RAGPage() {
  return (
    <div className="space-y-4">
      <RAGOverviewSection />
      <RAGSetupSection />
      <RAGExamplesSection />
      <RAGAdvantagesSection />
      <YoutubeSection videos={ragVideos} title="Vídeos sobre RAG" />
    </div>
  );
}
