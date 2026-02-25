import { CheckCircle2, XCircle, ArrowRight, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface ComparisonProps {
  title: string;
  without: string[];
  with_: string;
  saving: string;
}

function PromptComparison({ title, without, with_, saving }: ComparisonProps) {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden">
      <div className="px-4 py-2 bg-slate-100 border-b border-slate-200">
        <span className="text-sm font-semibold text-slate-700">{title}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 border-b md:border-b-0 md:border-r border-slate-200 bg-red-50">
          <div className="flex items-center gap-1.5 mb-2">
            <XCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-semibold text-red-700">Sem agente</span>
          </div>
          <div className="bg-white rounded border border-red-200 p-2 font-mono text-xs text-slate-700 space-y-1">
            {without.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-green-50">
          <div className="flex items-center gap-1.5 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
            <span className="text-xs font-semibold text-green-700">Com agente</span>
          </div>
          <div className="bg-white rounded border border-green-200 p-2 font-mono text-xs text-slate-700">
            {with_}
          </div>
          <Badge className="mt-2 bg-green-600 text-white text-xs">{saving}</Badge>
        </div>
      </div>
    </div>
  );
}

interface WorkflowStepProps {
  step: number;
  agent: string;
  color: string;
  prompt: string;
  result: string;
}

function WorkflowStep({ step, agent, color, prompt, result }: WorkflowStepProps) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-full ${color} text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1`}>
        {step}
      </div>
      <div className="flex-1 bg-white rounded-lg border p-3">
        <div className="flex items-center gap-2 mb-2">
          <code className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-600">{agent}</code>
        </div>
        <p className="text-xs font-mono text-slate-700 bg-slate-50 p-2 rounded border mb-2">
          {prompt}
        </p>
        <p className="text-xs text-slate-500">→ {result}</p>
      </div>
    </div>
  );
}

export function AgentsExamplesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-purple-600" />
          Exemplos Práticos de Uso
        </CardTitle>
        <CardDescription>
          Veja a diferença real entre prompts com e sem agentes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">

        {/* Comparisons */}
        <div>
          <h3 className="font-semibold mb-3">Antes vs. Depois</h3>
          <div className="space-y-4">
            <PromptComparison
              title="Criando um componente de UI"
              without={[
                '"Crie um componente React funcional com',
                "TypeScript. Use Tailwind CSS para estilos.",
                "O componente deve ter props tipadas com",
                "interface. Nome em PascalCase, arquivo em",
                'kebab-case. Adicione ARIA se necessário.',
                'Siga nosso padrão de design system..."',
              ]}
              with_='"@agents/ui-agent.md crie um CartButton"'
              saving="~85% menos tokens"
            />

            <PromptComparison
              title="Adicionando uma rota de API"
              without={[
                '"Crie um endpoint POST /products usando',
                "nossa stack de backend. Adicione validação",
                "de dados de entrada, tratamento de erro,",
                "tipagem TypeScript para request/response",
                'e siga nosso padrão RESTful..."',
              ]}
              with_='"@agents/backend-agent.md endpoint POST /products com validação"'
              saving="~80% menos tokens"
            />

            <PromptComparison
              title="Escrevendo testes"
              without={[
                '"Escreva testes com Vitest e Testing',
                "Library. Cubra renderização, interações",
                "e edge cases. Use describe/it blocks,",
                "mock de dependências externas e siga",
                'nosso padrão de nomenclatura..."',
              ]}
              with_='"@agents/test-agent.md testes para o CartButton"'
              saving="~88% menos tokens"
            />
          </div>
        </div>

        <Separator />

        {/* Workflow completo */}
        <div>
          <h3 className="font-semibold mb-1">Workflow Completo com Múltiplos Agentes</h3>
          <p className="text-sm text-slate-500 mb-4">
            Um feature de checkout completo com 4 prompts curtos, trocando de agente conforme necessário:
          </p>
          <div className="space-y-3">
            <WorkflowStep
              step={1}
              agent="@agents/ui-agent.md"
              color="bg-pink-500"
              prompt="crie o modal de checkout com campos de cartão"
              result="Modal completo, tipado, acessível e responsivo"
            />
            <div className="flex justify-center">
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </div>
            <WorkflowStep
              step={2}
              agent="@agents/backend-agent.md"
              color="bg-green-600"
              prompt="crie a API POST /checkout com validação de cartão"
              result="Endpoint com validação, tipagem e tratamento de erro"
            />
            <div className="flex justify-center">
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </div>
            <WorkflowStep
              step={3}
              agent="@agents/test-agent.md"
              color="bg-blue-600"
              prompt="testes para o modal e para a API de checkout"
              result="Testes unitários e de integração com coverage"
            />
            <div className="flex justify-center">
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </div>
            <WorkflowStep
              step={4}
              agent="@agents/performance-agent.md"
              color="bg-yellow-600"
              prompt="otimize o carregamento do modal de checkout"
              result="Lazy load, memoization e otimização de re-renders"
            />
          </div>
          <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">Feature completa de checkout</span>
              <div className="flex gap-2">
                <Badge className="bg-purple-600 text-white">4 prompts</Badge>
                <Badge className="bg-green-600 text-white">~30 palavras no total</Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Dicas de uso */}
        <div>
          <h3 className="font-semibold mb-3">Padrões de Uso Recomendados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                label: "✅ Uma tarefa, um agente",
                code: "@agents/ui-agent.md crie o Header",
                note: "Escopo claro e resultado previsível",
              },
              {
                label: "✅ Troca explícita de agente",
                code: "@agents/test-agent.md testes para isso",
                note: "Claude muda de persona imediatamente",
              },
              {
                label: "✅ Contexto mínimo após o @",
                code: "@agents/backend-agent.md rota DELETE /user/:id",
                note: "O agente já sabe o que precisa fazer",
              },
              {
                label: "✅ Agente + skill juntos",
                code: "@agents/ui-agent.md use @skill/create-component.md para Avatar",
                note: "Combina persona e procedimento",
              },
            ].map(({ label, code, note }) => (
              <div key={label} className="bg-slate-50 rounded-lg border p-3">
                <p className="text-xs font-semibold text-slate-700 mb-2">{label}</p>
                <code className="block text-xs bg-white p-2 rounded border font-mono text-slate-700 mb-1">
                  {code}
                </code>
                <p className="text-xs text-slate-500">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
