import { TrendingUp, CheckCircle2, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface SavingsRowProps {
  label: string;
  withoutTokens: number;
  withTokens: number;
  color: string;
}

function SavingsRow({ label, withoutTokens, withTokens, color }: SavingsRowProps) {
  const saving = Math.round(((withoutTokens - withTokens) / withoutTokens) * 100);
  const barWidth = Math.round((withTokens / withoutTokens) * 100);

  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="text-slate-700 font-medium min-w-0">{label}</span>
        <Badge className={`${color} text-white text-xs flex-shrink-0`}>-{saving}%</Badge>
      </div>
      <div className="relative h-6 bg-red-100 rounded-full overflow-hidden border border-red-200">
        <div
          className={`absolute left-0 top-0 h-full ${color} rounded-full flex items-center justify-end pr-2`}
          style={{ width: `${barWidth}%` }}
        >
          <span className="text-white text-xs font-bold">{withTokens}t</span>
        </div>
        <span className="absolute right-2 top-0 h-full flex items-center text-xs text-red-600 font-medium">
          {withoutTokens}t
        </span>
      </div>
    </div>
  );
}

export function RAGAdvantagesSection() {
  return (
    <Card className="border-2 border-teal-300">
      <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-teal-600" />
          Vantagens do RAG
        </CardTitle>
        <CardDescription>
          Por que RAG é indispensável em projetos com bases de código grandes
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">

        {/* Vantagens principais */}
        <div>
          <h3 className="font-semibold mb-3">Principais Benefícios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                emoji: "💰",
                title: "Economia Extrema de Tokens",
                description:
                  "Em vez de enviar arquivos inteiros, somente os trechos relevantes chegam ao Claude. Projetos grandes passam de milhares de tokens por query para centenas.",
                badge: "Até 97% menos tokens",
                badgeColor: "bg-green-600",
              },
              {
                emoji: "📈",
                title: "Escala para Projetos Grandes",
                description:
                  "Funciona perfeitamente com codebases de 10k, 50k ou 100k+ linhas. O contexto manual não escala — o RAG sim.",
                badge: "Sem limite de tamanho",
                badgeColor: "bg-blue-600",
              },
              {
                emoji: "🎯",
                title: "Respostas Mais Precisas",
                description:
                  "Contexto cirúrgico significa menos ruído e menos alucinação. Claude foca exatamente no que é relevante para a pergunta.",
                badge: "Maior precisão",
                badgeColor: "bg-purple-600",
              },
              {
                emoji: "🔄",
                title: "Contexto Sempre Atualizado",
                description:
                  "Ao contrário de agentes e skills que exigem atualização manual, o RAG indexa em tempo real. O código novo aparece automaticamente nas buscas.",
                badge: "Auto-atualizado",
                badgeColor: "bg-teal-600",
              },
              {
                emoji: "🔍",
                title: "Busca Semântica",
                description:
                  'Com RAG vetorial, você busca por conceito, não por nome exato. "gerenciamento de sessão" encontra sessionManager.ts mesmo sem mencionar o arquivo.',
                badge: "Busca por conceito",
                badgeColor: "bg-orange-600",
              },
              {
                emoji: "🚫",
                title: "Elimina Contexto Manual",
                description:
                  "Você não precisa mais abrir arquivos, copiar trechos ou mencionar @arquivo.ts. O Claude encontra o que precisa sozinho.",
                badge: "Zero esforço manual",
                badgeColor: "bg-slate-600",
              },
            ].map(({ emoji, title, description, badge, badgeColor }) => (
              <div key={title} className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{emoji}</span>
                    <h4 className="font-semibold text-sm text-slate-900">{title}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600">{description}</p>
                <Badge className={`${badgeColor} text-white text-xs`}>{badge}</Badge>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Token savings chart */}
        <div>
          <h3 className="font-semibold mb-1">Redução de Tokens por Cenário</h3>
          <p className="text-xs text-slate-500 mb-4">
            Verde = com RAG · Vermelho (restante) = sem RAG · "t" = tokens estimados
          </p>
          <div className="space-y-4">
            <SavingsRow label="Entender feature em projeto médio" withoutTokens={3200} withTokens={220} color="bg-teal-600" />
            <SavingsRow label="Buscar padrão em 200+ arquivos" withoutTokens={4800} withTokens={180} color="bg-teal-600" />
            <SavingsRow label="Consultar documentação interna (50 páginas)" withoutTokens={6500} withTokens={150} color="bg-teal-600" />
            <SavingsRow label="Debug com histórico do módulo" withoutTokens={2800} withTokens={200} color="bg-teal-600" />
          </div>
          <div className="mt-4 p-3 bg-teal-50 rounded-lg border border-teal-200">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-semibold text-teal-900">Economia média com RAG</span>
              <Badge className="bg-teal-600 text-white text-base px-3">~94% de tokens</Badge>
            </div>
          </div>
        </div>

        <Separator />

        {/* Comparison table */}
        <div>
          <h3 className="font-semibold mb-3">Comparativo: Contexto Manual vs. RAG</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 text-xs font-semibold text-slate-600 border border-slate-200">Critério</th>
                  <th className="text-center p-3 text-xs font-semibold text-red-700 border border-slate-200">Contexto Manual</th>
                  <th className="text-center p-3 text-xs font-semibold text-teal-700 border border-slate-200">RAG via MCP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Escala para projetos grandes", "❌ Não", "✅ Sim"],
                  ["Tokens por query", "❌ 2k–6k+", "✅ 150–300"],
                  ["Esforço para encontrar contexto", "❌ Manual (você)", "✅ Automático (Claude)"],
                  ["Precisão das respostas", "⚠️ Depende do que você envia", "✅ Só o relevante"],
                  ["Contexto sempre atualizado", "❌ Você precisa reabrir", "✅ Automático"],
                  ["Funciona com docs + código", "⚠️ Trabalhoso", "✅ Tudo indexado"],
                  ["Busca semântica por conceito", "❌ Não", "✅ Com vetores"],
                ].map(([criterion, manual, rag]) => (
                  <tr key={criterion} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-xs text-slate-700 border border-slate-200 font-medium">{criterion}</td>
                    <td className="p-3 text-xs text-center border border-slate-200">{manual}</td>
                    <td className="p-3 text-xs text-center border border-slate-200">{rag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Separator />

        {/* Regra de ouro */}
        <div className="p-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg text-white">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Quando Usar RAG
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center mb-4">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-xs text-teal-100">arquivos no projeto</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold mb-1">Docs</div>
              <div className="text-xs text-teal-100">internas para consultar</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold mb-1">Time</div>
              <div className="text-xs text-teal-100">com múltiplos devs</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "Projetos com mais de 50 arquivos de código",
              "Equipes com documentação interna extensa",
              "Quando você fica abrindo os mesmos arquivos repetidamente",
              "Para evitar reimplementar o que já existe no projeto",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <Zap className="w-3.5 h-3.5 text-teal-200 flex-shrink-0" />
                <span className="text-teal-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
