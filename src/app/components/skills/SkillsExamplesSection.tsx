import { CheckCircle2, XCircle, ArrowRight, BookOpen, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface ComparisonProps {
  title: string;
  withoutLines: string[];
  withPrompt: string;
  saving: string;
  steps: number;
}

function PromptComparison({ title, withoutLines, withPrompt, saving, steps }: ComparisonProps) {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden">
      <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-semibold text-slate-700">{title}</span>
        <Badge variant="outline" className="text-xs">{steps} passos automatizados</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 border-b md:border-b-0 md:border-r border-slate-200 bg-red-50">
          <div className="flex items-center gap-1.5 mb-2">
            <XCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-semibold text-red-700">Sem skill — prompt longo</span>
          </div>
          <div className="bg-white rounded border border-red-200 p-2 font-mono text-xs text-slate-700 space-y-0.5">
            {withoutLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-green-50">
          <div className="flex items-center gap-1.5 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
            <span className="text-xs font-semibold text-green-700">Com skill — uma linha</span>
          </div>
          <div className="bg-white rounded border border-green-200 p-2 font-mono text-xs text-slate-700">
            {withPrompt}
          </div>
          <Badge className="mt-2 bg-green-600 text-white text-xs">{saving}</Badge>
        </div>
      </div>
    </div>
  );
}

interface ReuseExampleProps {
  skill: string;
  invocations: string[];
  color: string;
}

function ReuseExample({ skill, invocations, color }: ReuseExampleProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div className={`px-3 py-2 ${color} border-b`}>
        <code className="text-xs font-semibold font-mono">{skill}</code>
      </div>
      <div className="bg-white p-3 space-y-1.5">
        {invocations.map((inv, i) => (
          <div key={i} className="flex items-center gap-2">
            <RefreshCw className="w-3 h-3 text-slate-400 flex-shrink-0" />
            <code className="text-xs font-mono text-slate-700">{inv}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsExamplesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-600" />
          Exemplos Práticos de Uso
        </CardTitle>
        <CardDescription>
          Veja a diferença real entre prompts com e sem skills
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">

        {/* Before/after comparisons */}
        <div>
          <h3 className="font-semibold mb-3">Antes vs. Depois</h3>
          <div className="space-y-4">
            <PromptComparison
              title="Criando um componente React"
              withoutLines={[
                '"Crie o arquivo em src/components/[nome]/',
                "Adicione interface TypeScript para props.",
                "Implemente functional component.",
                "Use Tailwind CSS para estilos.",
                "Crie arquivo de teste com Vitest.",
                "Exporte em index.ts.",
                'Adicione ao barrel export principal."',
              ]}
              withPrompt="Use @skill/create-component.md para ProductCard"
              saving="~92% menos tokens"
              steps={7}
            />

            <PromptComparison
              title="Adicionando rota de API"
              withoutLines={[
                '"Crie o handler em src/api/[rota].ts.',
                "Adicione validação com Zod.",
                "Implemente a lógica de negócio.",
                "Adicione tratamento de erros HTTP.",
                "Crie os tipos de request/response.",
                "Adicione testes de integração.",
                'Atualize a documentação da API."',
              ]}
              withPrompt="Siga @skill/add-api-endpoint.md para POST /orders"
              saving="~90% menos tokens"
              steps={7}
            />

            <PromptComparison
              title="Setup de testes para uma feature"
              withoutLines={[
                '"Configure o arquivo de testes.',
                "Importe render e screen do Testing Library.",
                "Escreva teste de renderização.",
                "Adicione testes de interação do usuário.",
                "Mock as dependências externas.",
                'Verifique coverage mínimo de 80%."',
              ]}
              withPrompt="Aplique @skill/setup-feature-tests.md no CheckoutFlow"
              saving="~88% menos tokens"
              steps={6}
            />
          </div>
        </div>

        <Separator />

        {/* Reutilização: mesma skill, vários alvos */}
        <div>
          <h3 className="font-semibold mb-1">O Poder da Reutilização</h3>
          <p className="text-sm text-slate-500 mb-4">
            Uma skill criada uma vez pode ser invocada infinitas vezes com alvos diferentes — e o resultado sempre será consistente.
          </p>
          <div className="space-y-3">
            <ReuseExample
              skill="@skill/create-component.md"
              color="bg-orange-50 border-orange-200 text-orange-800"
              invocations={[
                "Use @skill/create-component.md para Button",
                "Use @skill/create-component.md para Modal",
                "Use @skill/create-component.md para Dropdown",
                "Use @skill/create-component.md para DataTable",
              ]}
            />
            <ReuseExample
              skill="@skill/add-api-endpoint.md"
              color="bg-green-50 border-green-200 text-green-800"
              invocations={[
                "Siga @skill/add-api-endpoint.md para GET /users",
                "Siga @skill/add-api-endpoint.md para POST /orders",
                "Siga @skill/add-api-endpoint.md para DELETE /cart/:id",
              ]}
            />
          </div>
          <div className="mt-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-xs text-orange-800">
              <strong>Defina uma vez, use para sempre.</strong> Cada invocação produz o mesmo padrão de qualidade sem nenhum esforço extra.
            </p>
          </div>
        </div>

        <Separator />

        {/* Skill + Agente combinados */}
        <div>
          <h3 className="font-semibold mb-1">Skill + Agente: Combinação Poderosa</h3>
          <p className="text-sm text-slate-500 mb-4">
            O agente define <em>quem</em> o Claude é. A skill define <em>o que</em> ele vai fazer. Juntos, são imbatíveis.
          </p>
          <div className="space-y-3">
            {[
              {
                combo: "@agents/ui-agent.md + @skill/create-component.md",
                prompt: "@agents/ui-agent.md use @skill/create-component.md para Avatar",
                result: "Componente criado com expertise de UI + todos os passos da skill cumpridos",
                color: "bg-pink-50 border-pink-200",
              },
              {
                combo: "@agents/backend-agent.md + @skill/add-api-endpoint.md",
                prompt: "@agents/backend-agent.md siga @skill/add-api-endpoint.md para /payments",
                result: "Endpoint com toda a expertise de backend + procedimento padronizado",
                color: "bg-green-50 border-green-200",
              },
              {
                combo: "@agents/test-agent.md + @skill/setup-feature-tests.md",
                prompt: "@agents/test-agent.md aplique @skill/setup-feature-tests.md no Dashboard",
                result: "Testes escritos por especialista + checklist de cobertura cumprido",
                color: "bg-blue-50 border-blue-200",
              },
            ].map(({ combo, prompt, result, color }) => (
              <div key={combo} className={`rounded-lg border p-3 ${color}`}>
                <p className="text-xs font-semibold text-slate-600 mb-2">{combo}</p>
                <code className="block text-xs font-mono bg-white p-2 rounded border mb-1.5">{prompt}</code>
                <div className="flex items-start gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Padrões recomendados */}
        <div>
          <h3 className="font-semibold mb-3">Padrões de Invocação Recomendados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                label: "✅ Use para criar",
                code: "Use @skill/create-component.md para X",
                note: "Mais natural para tarefas de criação",
              },
              {
                label: "✅ Siga para processos",
                code: "Siga @skill/add-api-endpoint.md para Y",
                note: "Indica que é um processo a seguir",
              },
              {
                label: "✅ Aplique para transformações",
                code: "Aplique @skill/refactor-performance.md no Z",
                note: "Ideal para refatorações e melhorias",
              },
              {
                label: "✅ Skill + alvo específico",
                code: "Use @skill/create-component.md para Modal de Pagamento",
                note: "O alvo pode ter contexto extra",
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
