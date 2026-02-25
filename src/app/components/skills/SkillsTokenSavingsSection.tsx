import { TrendingDown, CheckCircle2, XCircle, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface SavingsRowProps {
  task: string;
  withoutTokens: number;
  withTokens: number;
}

function SavingsRow({ task, withoutTokens, withTokens }: SavingsRowProps) {
  const saving = Math.round(((withoutTokens - withTokens) / withoutTokens) * 100);
  const barWidth = Math.round((withTokens / withoutTokens) * 100);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-700 font-medium">{task}</span>
        <Badge className="bg-orange-500 text-white text-xs">-{saving}%</Badge>
      </div>
      <div className="relative h-6 bg-red-100 rounded-full overflow-hidden border border-red-200">
        <div
          className="absolute left-0 top-0 h-full bg-orange-500 rounded-full flex items-center justify-end pr-2 transition-all"
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

interface TipProps {
  rule: string;
  bad: string;
  good: string;
  reason: string;
}

function TokenTip({ rule, bad, good, reason }: TipProps) {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden">
      <div className="px-3 py-2 bg-slate-50 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-600">{rule}</span>
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-start gap-2">
          <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
          <code className="text-xs text-slate-600 font-mono">{bad}</code>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
          <code className="text-xs text-slate-600 font-mono">{good}</code>
        </div>
        <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">{reason}</p>
      </div>
    </div>
  );
}

export function SkillsTokenSavingsSection() {
  return (
    <Card className="border-2 border-orange-300">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-orange-600" />
          Economizando Tokens com Skills
        </CardTitle>
        <CardDescription>
          Skills economizam ainda mais tokens que agentes — veja os números
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">

        {/* Why skills save more */}
        <div>
          <h3 className="font-semibold mb-3">Por que skills economizam mais tokens que agentes?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 text-center">
              <div className="text-2xl mb-2">📋</div>
              <h4 className="font-semibold text-sm text-orange-900 mb-1">Substitui Listas de Passos</h4>
              <p className="text-xs text-slate-600">
                Sem a skill você listaria 6-10 passos a cada invocação. Com ela, são 6 palavras.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-center">
              <div className="text-2xl mb-2">✅</div>
              <h4 className="font-semibold text-sm text-amber-900 mb-1">Checklist Embutido</h4>
              <p className="text-xs text-slate-600">
                As validações ficam na skill. Você não precisa pedir verificações explícitas — estão no procedimento.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
              <div className="text-2xl mb-2">🔁</div>
              <h4 className="font-semibold text-sm text-yellow-900 mb-1">Reutilização sem Custo</h4>
              <p className="text-xs text-slate-600">
                Cada reutilização da mesma skill custa os mesmos ~8 tokens, independente da complexidade da tarefa.
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Token comparison chart */}
        <div>
          <h3 className="font-semibold mb-1">Comparativo de Tokens por Tarefa</h3>
          <p className="text-xs text-slate-500 mb-4">
            Laranja = com skill · Vermelho (restante) = sem skill · "t" = tokens estimados
          </p>
          <div className="space-y-4">
            <SavingsRow task="Criar componente React completo" withoutTokens={480} withTokens={10} />
            <SavingsRow task="Adicionar rota de API com testes" withoutTokens={520} withTokens={12} />
            <SavingsRow task="Setup de testes para feature" withoutTokens={400} withTokens={10} />
            <SavingsRow task="Refatorar para performance" withoutTokens={460} withTokens={10} />
            <SavingsRow task="Criar nova página com rota" withoutTokens={550} withTokens={12} />
          </div>
          <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-orange-900">Economia média com skills</span>
              <Badge className="bg-orange-600 text-white text-base px-3">~97% de tokens</Badge>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Skills economizam mais que agentes porque substituem instruções procedurais, que tendem a ser muito mais longas que instruções de persona.
            </p>
          </div>
        </div>

        <Separator />

        {/* Best practices */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-600" />
            Boas Práticas para Máxima Economia
          </h3>
          <div className="space-y-3">
            <TokenTip
              rule="Uma skill por tipo de tarefa"
              bad="skill/development.md (cria componentes, APIs e testes)"
              good="skill/create-component.md (só componentes)"
              reason="Skills genéricas ficam longas e imprecisas. Skills focadas são curtas e produzem resultados melhores."
            />
            <TokenTip
              rule="Não explique o que a skill já documenta"
              bad='Use @skill/create-component.md e adicione TypeScript, testes e exports'
              good="Use @skill/create-component.md para UserAvatar"
              reason="Se está no procedimento da skill, não precisa repetir no prompt. Isso dobra os tokens sem nenhum benefício."
            />
            <TokenTip
              rule="Mantenha o procedimento conciso"
              bad="skill/create-component.md com 15 passos detalhados"
              good="skill/create-component.md com 5-7 passos atômicos"
              reason="O arquivo inteiro é enviado ao Claude. Passos desnecessariamente verbosos aumentam o custo de cada invocação."
            />
            <TokenTip
              rule="Use o checklist no lugar de verificações manuais"
              bad='"verifique se tem TypeScript, se os testes passam, se está exportado..."'
              good="checklist embutido na skill com [ ] para cada critério"
              reason="O Claude valida automaticamente pelo checklist da skill. Você poupa tokens em pedidos de verificação."
            />
          </div>
        </div>

        <Separator />

        {/* Skills vs Agents comparison */}
        <div>
          <h3 className="font-semibold mb-3">Skills vs. Agentes: Quando usar cada um</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border-2 border-blue-300 overflow-hidden">
              <div className="px-4 py-3 bg-blue-50 border-b border-blue-200">
                <h4 className="font-semibold text-blue-900 text-sm">🤖 Agente</h4>
                <p className="text-xs text-blue-700">Define quem o Claude é</p>
              </div>
              <div className="p-3 space-y-1.5">
                {[
                  "Criar componentes com padrão de UI",
                  "Escrever código com estilo de backend",
                  "Manter consistência de nomenclatura",
                  "Aplicar regras de arquitetura",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border-2 border-orange-300 overflow-hidden">
              <div className="px-4 py-3 bg-orange-50 border-b border-orange-200">
                <h4 className="font-semibold text-orange-900 text-sm">🔧 Skill</h4>
                <p className="text-xs text-orange-700">Define o que o Claude faz</p>
              </div>
              <div className="p-3 space-y-1.5">
                {[
                  "Executar tarefas em múltiplos passos",
                  "Garantir que nada seja esquecido",
                  "Padronizar entregas repetitivas",
                  "Substituir checklists manuais",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3 h-3 text-orange-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg border">
            <p className="text-xs text-slate-700 text-center">
              <strong>Use os dois juntos</strong> para o máximo de eficiência:{" "}
              <code className="bg-white px-1 rounded font-mono">@agents/ui-agent.md use @skill/create-component.md para X</code>
            </p>
          </div>
        </div>

        {/* Regra de ouro */}
        <div className="p-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg text-white">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Regra de Ouro das Skills
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold mb-1">1 skill</div>
              <div className="text-xs text-orange-100">por tipo de tarefa</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold mb-1">5-7</div>
              <div className="text-xs text-orange-100">passos por skill</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold mb-1">6 palavras</div>
              <div className="text-xs text-orange-100">para invocar</div>
            </div>
          </div>
          <p className="text-sm mt-3 text-orange-100">
            Com essa fórmula, uma skill de 7 passos custa apenas ~10 tokens por invocação — e economiza ~490.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
