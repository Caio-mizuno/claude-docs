import { Layers, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface UseCaseProps {
  emoji: string;
  title: string;
  scenario: string;
  prompt: string;
  result: string;
  saving: string;
}

function UseCase({ emoji, title, scenario, prompt, result, saving }: UseCaseProps) {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{emoji}</span>
          <h4 className="font-semibold text-sm text-slate-800">{title}</h4>
        </div>
        <Badge className="bg-green-600 text-white text-xs">{saving}</Badge>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-slate-500 mb-1">Cenário</p>
          <p className="text-sm text-slate-700">{scenario}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1">Prompt</p>
          <code className="block text-xs font-mono bg-slate-900 text-green-400 p-2 rounded">{prompt}</code>
        </div>
        <div className="flex items-start gap-2">
          <ArrowRight className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-slate-600">{result}</p>
        </div>
      </div>
    </div>
  );
}

interface ComparisonProps {
  title: string;
  withoutLines: string[];
  withLines: string[];
  withoutTokens: string;
  withTokens: string;
}

function Comparison({ title, withoutLines, withLines, withoutTokens, withTokens }: ComparisonProps) {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden">
      <div className="px-4 py-2 bg-slate-100 border-b border-slate-200">
        <span className="text-sm font-semibold text-slate-700">{title}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 border-b md:border-b-0 md:border-r border-slate-200 bg-red-50">
          <div className="flex items-center gap-1.5 mb-2">
            <XCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-semibold text-red-700">Sem RAG</span>
          </div>
          <div className="bg-white rounded border border-red-200 p-2 font-mono text-xs text-slate-700 space-y-0.5 mb-2">
            {withoutLines.map((line, i) => <div key={i}>{line}</div>)}
          </div>
          <Badge variant="outline" className="text-red-600 border-red-300 text-xs">{withoutTokens}</Badge>
        </div>
        <div className="p-4 bg-green-50">
          <div className="flex items-center gap-1.5 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
            <span className="text-xs font-semibold text-green-700">Com RAG</span>
          </div>
          <div className="bg-white rounded border border-green-200 p-2 font-mono text-xs text-slate-700 space-y-0.5 mb-2">
            {withLines.map((line, i) => <div key={i}>{line}</div>)}
          </div>
          <Badge className="bg-green-600 text-white text-xs">{withTokens}</Badge>
        </div>
      </div>
    </div>
  );
}

export function RAGExamplesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-green-600" />
          Exemplos Práticos de Uso
        </CardTitle>
        <CardDescription>
          Cenários reais onde o RAG transforma a qualidade das respostas
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">

        {/* Casos de uso */}
        <div>
          <h3 className="font-semibold mb-3">Casos de Uso Principais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UseCase
              emoji="🔍"
              title="Busca em Codebase Grande"
              scenario="Projeto com 200+ arquivos. Você quer saber como a autenticação foi implementada."
              prompt='"Busque no codebase como o fluxo de autenticação JWT funciona"'
              result="Claude recupera apenas os 4 arquivos relevantes (auth.ts, middleware.ts, etc.) sem carregar todo o projeto."
              saving="~95% menos contexto"
            />
            <UseCase
              emoji="📚"
              title="Consulta a Documentação Interna"
              scenario="Sua empresa tem 500 páginas de docs. Você precisa da spec de um endpoint."
              prompt='"Encontre na documentação a spec do endpoint de criação de pedidos"'
              result="Claude recupera somente a seção relevante da spec, não as 500 páginas completas."
              saving="~98% menos contexto"
            />
            <UseCase
              emoji="♻️"
              title="Evitar Reimplementação"
              scenario="Você vai criar um hook novo, mas talvez já exista algo similar no projeto."
              prompt='"Existe algum hook customizado para gerenciar estado de formulário no projeto?"'
              result="Claude busca e encontra useFormState.ts existente — você reutiliza em vez de duplicar."
              saving="Evita código duplicado"
            />
            <UseCase
              emoji="🐛"
              title="Debug com Contexto de Histórico"
              scenario="Um bug em produção. Você precisa entender o contexto histórico do módulo."
              prompt='"Busque no codebase onde o campo discount é calculado e quais componentes o usam"'
              result="Claude mapeia todos os pontos relevantes sem você precisar navegar manualmente."
              saving="Debug 3x mais rápido"
            />
          </div>
        </div>

        <Separator />

        {/* Comparativo before/after */}
        <div>
          <h3 className="font-semibold mb-3">Antes vs. Depois com RAG</h3>
          <div className="space-y-4">
            <Comparison
              title="Entender uma feature complexa"
              withoutLines={[
                "@src/features/checkout/index.ts",
                "@src/features/checkout/hooks.ts",
                "@src/features/checkout/api.ts",
                "@src/features/checkout/types.ts",
                '"Como o fluxo de checkout funciona?"',
              ]}
              withLines={[
                '"Como o fluxo de checkout funciona?"',
                "(Claude usa MCP para buscar automaticamente)",
              ]}
              withoutTokens="~3.200 tokens enviados"
              withTokens="~220 tokens — 93% menor"
            />
            <Comparison
              title="Encontrar padrões no código"
              withoutLines={[
                "Abrir 12 arquivos manualmente",
                "@utils/formatters.ts @utils/validators.ts",
                "@helpers/date.ts @helpers/currency.ts ...",
                '"Quais utilitários de formatação existem?"',
              ]}
              withLines={[
                '"Quais funções utilitárias de formatação',
                ' existem no projeto?"',
              ]}
              withoutTokens="~4.800 tokens"
              withTokens="~180 tokens — 96% menor"
            />
          </div>
        </div>

        <Separator />

        {/* Workflow combinado */}
        <div>
          <h3 className="font-semibold mb-1">RAG + Agentes + Skills: O Workflow Completo</h3>
          <p className="text-sm text-slate-500 mb-4">
            Combinando os três, você tem o setup de máxima eficiência:
          </p>
          <div className="space-y-2">
            {[
              {
                step: "1",
                color: "bg-green-600",
                prompt: '"Busque no codebase como fazemos validação de formulários atualmente"',
                note: "RAG recupera os trechos relevantes → Claude entende o padrão existente",
              },
              {
                step: "2",
                color: "bg-blue-600",
                prompt: "@agents/ui-agent.md — Claude adota a persona de UI specialist",
                note: "Agente garante que o novo código siga os padrões do projeto",
              },
              {
                step: "3",
                color: "bg-yellow-500",
                prompt: "Use @skill/create-component.md para FormField com validação",
                note: "Skill executa o procedimento completo — componente, tipos, testes, exports",
              },
            ].map(({ step, color, prompt, note }) => (
              <div key={step} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full ${color} text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1`}>
                  {step}
                </div>
                <div className="flex-1 bg-white rounded-lg border p-3">
                  <code className="block text-xs font-mono text-slate-700 bg-slate-50 p-2 rounded border mb-1.5">
                    {prompt}
                  </code>
                  <p className="text-xs text-slate-500">{note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-green-200">
            <p className="text-xs text-slate-700 text-center">
              <strong>Resultado:</strong> componente criado consistentemente com o padrão do projeto, aproveitando código existente, com testes — tudo com 3 prompts curtos.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
