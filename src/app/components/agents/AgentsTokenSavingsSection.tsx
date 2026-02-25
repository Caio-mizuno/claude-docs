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
        <Badge className="bg-green-600 text-white text-xs">-{saving}%</Badge>
      </div>
      <div className="relative h-6 bg-red-100 rounded-full overflow-hidden border border-red-200">
        <div
          className="absolute left-0 top-0 h-full bg-green-500 rounded-full flex items-center justify-end pr-2 transition-all"
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
  good: string;
  bad: string;
  reason: string;
}

function TokenTip({ rule, good, bad, reason }: TipProps) {
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

export function AgentsTokenSavingsSection() {
  return (
    <Card className="border-2 border-green-300">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-green-600" />
          Economizando Tokens com Agentes
        </CardTitle>
        <CardDescription>
          Números reais e estratégias para maximizar a eficiência
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">

        {/* Why agents save tokens */}
        <div>
          <h3 className="font-semibold mb-3">Por que agentes reduzem tokens?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="font-semibold text-sm text-blue-900 mb-1">Contexto Permanente</h4>
              <p className="text-xs text-slate-600">
                As regras ficam no arquivo. Você não precisa repetir "use TypeScript, use Tailwind..." em cada prompt.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold text-sm text-purple-900 mb-1">Menos Iterações</h4>
              <p className="text-xs text-slate-600">
                Claude já sabe o que fazer na primeira tentativa. Menos idas e vindas de correção.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-sm text-green-900 mb-1">Prompts Curtos</h4>
              <p className="text-xs text-slate-600">
                Um prompt de 6 palavras substitui parágrafos de contexto técnico.
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Token comparison chart */}
        <div>
          <h3 className="font-semibold mb-1">Comparativo de Tokens por Tarefa</h3>
          <p className="text-xs text-slate-500 mb-4">
            Verde = com agente · Vermelho (restante) = sem agente · "t" = tokens estimados
          </p>
          <div className="space-y-4">
            <SavingsRow task="Criar componente React" withoutTokens={320} withTokens={45} />
            <SavingsRow task="Adicionar endpoint de API" withoutTokens={380} withTokens={55} />
            <SavingsRow task="Escrever testes unitários" withoutTokens={450} withTokens={60} />
            <SavingsRow task="Refatorar por performance" withoutTokens={500} withTokens={70} />
            <SavingsRow task="Revisar acessibilidade" withoutTokens={280} withTokens={40} />
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-green-900">Economia média</span>
              <Badge className="bg-green-600 text-white text-base px-3">~85% de tokens</Badge>
            </div>
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
              rule="Agentes focados, não genéricos"
              bad="@agents/full-stack-agent.md (cobre tudo)"
              good="@agents/ui-agent.md (só UI)"
              reason="Agentes focados têm arquivos menores e geram respostas mais precisas — menos tokens enviados e recebidos."
            />
            <TokenTip
              rule="Não repita o que o agente já sabe"
              bad='@agents/ui-agent.md crie um Card usando React TypeScript Tailwind'
              good="@agents/ui-agent.md crie um ProductCard"
              reason="O agente já sabe a stack. Repetir é desperdício puro de tokens."
            />
            <TokenTip
              rule="Troque de agente em vez de acumular contexto"
              bad="(continuar na mesma conversa mudando de assunto)"
              good="@agents/test-agent.md testes para o componente acima"
              reason="Trocar de agente limpa o contexto acumulado da conversa anterior."
            />
            <TokenTip
              rule="Mantenha arquivos de agente concisos"
              bad="agents/ui-agent.md com 800 palavras"
              good="agents/ui-agent.md com menos de 300 palavras"
              reason="O arquivo inteiro é enviado como contexto. Arquivos enxutos = menos tokens a cada invocação."
            />
          </div>
        </div>

        <Separator />

        {/* Resumo final */}
        <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Regra de Ouro dos Agentes
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold mb-1">1 agente</div>
              <div className="text-xs text-green-100">por especialidade</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold mb-1">&lt; 300</div>
              <div className="text-xs text-green-100">palavras por arquivo</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold mb-1">5-10</div>
              <div className="text-xs text-green-100">palavras no prompt</div>
            </div>
          </div>
          <p className="text-sm mt-3 text-green-100">
            Seguindo essa regra, você mantém a economia de ~85% de tokens em todas as interações.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
