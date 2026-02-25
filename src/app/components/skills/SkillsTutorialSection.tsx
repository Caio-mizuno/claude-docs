import { Terminal, FolderPlus, FileText, Search, Play, CheckCircle2, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface TutorialStepProps {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
  last?: boolean;
}

function TutorialStep({ number, icon: Icon, title, description, children, last }: TutorialStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
          {number}
        </div>
        {!last && <div className="w-px flex-1 bg-orange-200 mt-2" />}
      </div>
      <div className="pb-6 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-orange-600" />
          <h3 className="font-semibold text-slate-900">{title}</h3>
        </div>
        <p className="text-sm text-slate-500 mb-3">{description}</p>
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
      {children}
    </div>
  );
}

export function SkillsTutorialSection() {
  return (
    <Card className="border-2 border-orange-300">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
        <CardTitle className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-orange-600" />
          Tutorial: Criando uma Skill no Claude Code
        </CardTitle>
        <CardDescription>
          Guia prático do zero para criar e invocar sua primeira skill
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-sm text-slate-700">
            Skills são arquivos <code className="bg-orange-100 px-1 rounded text-orange-800 font-mono">.md</code> que
            descrevem um <strong>procedimento passo a passo</strong> para uma tarefa recorrente. Ao invocar{" "}
            <code className="bg-orange-100 px-1 rounded text-orange-800 font-mono">@skill/nome.md</code>,
            o Claude executa todos os passos automaticamente — sem você precisar listá-los de novo.
          </p>
          <div className="mt-3 p-3 bg-white rounded border border-orange-200">
            <div className="flex items-start gap-3">
              <div className="text-center flex-1">
                <p className="text-xs text-slate-500 mb-1">Agente define</p>
                <p className="font-semibold text-blue-700 text-sm">quem Claude é</p>
              </div>
              <div className="text-slate-400 self-center">vs</div>
              <div className="text-center flex-1">
                <p className="text-xs text-slate-500 mb-1">Skill define</p>
                <p className="font-semibold text-orange-700 text-sm">o que Claude faz</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <TutorialStep
            number={1}
            icon={Search}
            title="Identifique a tarefa repetitiva"
            description="Escolha uma tarefa que você executa frequentemente e que segue sempre os mesmos passos."
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Criar componente",
                "Adicionar rota de API",
                "Setup de testes",
                "Criar página",
                "Adicionar hook",
                "Deploy de feature",
              ].map((task) => (
                <div
                  key={task}
                  className="bg-orange-50 border border-orange-200 rounded px-2 py-1.5 text-xs text-orange-800 font-medium text-center"
                >
                  {task}
                </div>
              ))}
            </div>
          </TutorialStep>

          <TutorialStep
            number={2}
            icon={FolderPlus}
            title="Crie a pasta /skill na raiz do projeto"
            description="Fica no mesmo nível do CLAUDE.md, ao lado da pasta /agents se existir."
          >
            <CodeBlock>
              <div className="text-slate-400"># No terminal, na raiz do projeto:</div>
              <div className="text-green-400 mt-1">mkdir skill</div>
            </CodeBlock>
          </TutorialStep>

          <TutorialStep
            number={3}
            icon={FileText}
            title="Crie o arquivo markdown da skill"
            description="O nome do arquivo deve ser o verbo da ação, em kebab-case."
          >
            <CodeBlock>
              <div className="text-slate-400"># Exemplos de nomes válidos:</div>
              <div className="text-green-400 mt-1">skill/create-component.md</div>
              <div className="text-green-400">skill/add-api-endpoint.md</div>
              <div className="text-green-400">skill/setup-feature-tests.md</div>
              <div className="text-green-400">skill/deploy-to-staging.md</div>
            </CodeBlock>
          </TutorialStep>

          <TutorialStep
            number={4}
            icon={FileText}
            title="Escreva o conteúdo da skill"
            description="Use as seções padrão: Objetivo, Pré-requisitos, Procedimento, Checklist e Exemplo."
          >
            <CodeBlock>
              <div className="text-white font-bold"># skill/create-component.md</div>
              <div className="mt-3 text-slate-400">## Objetivo</div>
              <div className="text-green-400">Criar componente React tipado, estilizado e testado.</div>
              <div className="mt-3 text-slate-400">## Pré-requisitos</div>
              <div className="text-green-400">- Nome do componente definido</div>
              <div className="text-green-400">- Props necessárias identificadas</div>
              <div className="mt-3 text-slate-400">## Procedimento</div>
              <div className="text-yellow-400 mt-1">### 1. Criar arquivo</div>
              <div className="text-green-400">src/components/[nome]/[nome].tsx</div>
              <div className="text-yellow-400 mt-2">### 2. Implementar com TypeScript</div>
              <div className="text-green-400">interface, props tipadas, functional component</div>
              <div className="text-yellow-400 mt-2">### 3. Estilizar com Tailwind</div>
              <div className="text-green-400">classes utilitárias, responsivo, estados hover/focus</div>
              <div className="text-yellow-400 mt-2">### 4. Criar testes</div>
              <div className="text-green-400">src/components/[nome]/[nome].test.tsx</div>
              <div className="text-yellow-400 mt-2">### 5. Exportar</div>
              <div className="text-green-400">index.ts com named export</div>
              <div className="mt-3 text-slate-400">## Checklist</div>
              <div className="text-green-400">- [ ] Renderiza sem erros</div>
              <div className="text-green-400">- [ ] Props tipadas</div>
              <div className="text-green-400">- [ ] Responsivo</div>
              <div className="text-green-400">- [ ] Testes passando</div>
            </CodeBlock>
            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-xs text-amber-800">
                <strong>Dica:</strong> Cada passo do procedimento deve ser atômico e verificável. Se um passo tiver sub-passos, divida em passos separados.
              </p>
            </div>
          </TutorialStep>

          <TutorialStep
            number={5}
            icon={Play}
            title="Invoque a skill no Claude Code"
            description='Use "Use @skill/..." ou "Siga @skill/..." para invocar. O Claude executa todos os passos.'
          >
            <CodeBlock>
              <div className="text-slate-400"># Sintaxe básica:</div>
              <div className="text-green-400 mt-1">Use @skill/create-component.md para ProductCard</div>
              <div className="mt-3 text-slate-400"># Variações aceitas:</div>
              <div className="text-green-400 mt-1">Siga @skill/add-api-endpoint.md para POST /orders</div>
              <div className="text-green-400">Aplique @skill/create-component.md no CheckoutModal</div>
              <div className="mt-3 text-slate-400"># Combinando com agente:</div>
              <div className="text-green-400 mt-1">@agents/ui-agent.md use @skill/create-component.md para Avatar</div>
            </CodeBlock>
          </TutorialStep>

          <TutorialStep
            number={6}
            icon={RefreshCw}
            title="Registre a skill no CLAUDE.md (opcional)"
            description="Documente as skills disponíveis para que o Claude saiba o que pode invocar."
            last
          >
            <CodeBlock>
              <div className="text-slate-400"># No CLAUDE.md, adicione uma seção:</div>
              <div className="text-white font-bold mt-2">## Skills Disponíveis</div>
              <div className="text-green-400 mt-1">- @skill/create-component.md — Novo componente React</div>
              <div className="text-green-400">- @skill/add-api-endpoint.md — Nova rota de API</div>
              <div className="text-green-400">- @skill/setup-feature-tests.md — Setup de testes</div>
            </CodeBlock>
          </TutorialStep>

          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">Skill pronta para uso</h3>
              <p className="text-sm text-slate-500 mb-3">
                O Claude vai executar todos os passos do procedimento automaticamente, validando cada etapa pelo checklist.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-500 text-white">Procedimento padronizado</Badge>
                <Badge className="bg-green-600 text-white">Zero repetição</Badge>
                <Badge className="bg-blue-600 text-white">Resultado consistente</Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="p-4 bg-slate-50 rounded-lg border">
          <h4 className="font-semibold text-sm mb-3">Estrutura de pastas resultante:</h4>
          <CodeBlock>
            <div className="text-slate-400">projeto/</div>
            <div className="text-green-400">├── skill/</div>
            <div className="text-green-400">│   ├── create-component.md</div>
            <div className="text-green-400">│   ├── add-api-endpoint.md</div>
            <div className="text-green-400">│   └── setup-feature-tests.md</div>
            <div className="text-slate-500">├── agents/</div>
            <div className="text-slate-500">├── CLAUDE.md</div>
            <div className="text-slate-500">├── src/</div>
            <div className="text-slate-500">└── package.json</div>
          </CodeBlock>
        </div>
      </CardContent>
    </Card>
  );
}
