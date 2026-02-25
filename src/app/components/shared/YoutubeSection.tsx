import { Youtube, ExternalLink, PlayCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export interface YouTubeVideo {
  title: string;
  description: string;
  url: string;
}

function getVideoId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&\s]+)/,
    /youtu\.be\/([^\s?/]+)/,
    /youtube\.com\/embed\/([^\s?/]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function VideoCard({ video }: { video: YouTubeVideo }) {
  const videoId = getVideoId(video.url);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-slate-200 overflow-hidden hover:border-red-300 hover:shadow-md transition-all bg-white"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <PlayCircle className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
        </div>
        <Badge className="absolute top-2 right-2 bg-red-600 text-white text-xs gap-1">
          <Youtube className="w-3 h-3" />
          YouTube
        </Badge>
      </div>

      {/* Info */}
      <div className="p-4">
        <h4 className="font-semibold text-sm text-slate-900 mb-1 group-hover:text-red-600 transition-colors line-clamp-2">
          {video.title}
        </h4>
        <p className="text-xs text-slate-500 line-clamp-2 mb-3">{video.description}</p>
        <div className="flex items-center gap-1 text-xs text-red-600 font-medium">
          <span>Abrir no YouTube</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-10 px-6 rounded-xl border-2 border-dashed border-slate-200 text-center">
      <Youtube className="w-10 h-10 text-slate-300 mb-3" />
      <p className="text-sm font-medium text-slate-500 mb-1">Nenhum vídeo adicionado ainda</p>
      <p className="text-xs text-slate-400 max-w-xs">
        Adicione objetos ao array <code className="bg-slate-100 px-1 rounded font-mono">videos</code> passado para este componente para exibir vídeos aqui.
      </p>
    </div>
  );
}

interface YoutubeSectionProps {
  videos: YouTubeVideo[];
  title?: string;
}

export function YoutubeSection({ videos, title = "Vídeos Recomendados" }: YoutubeSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Youtube className="w-6 h-6 text-red-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.length === 0 ? (
            <EmptyState />
          ) : (
            videos.map((video) => <VideoCard key={video.url} video={video} />)
          )}
        </div>
      </CardContent>
    </Card>
  );
}
