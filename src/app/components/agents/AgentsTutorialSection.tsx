import { Terminal, FolderPlus, FileText, Play, RefreshCw, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface TutorialStepProps {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
}

function TutorialStep({ number, icon: Icon, title, description, children }: TutorialStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
          {number}
        </div>
        <div className="w-px flex-1 bg-blue-200 mt-2" />
      </div>
      <div className="pb-6 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-blue-600" />
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

export function AgentsTutorialSection() {
  return (
    <Card className="border-2 border-blue-300">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
        <CardTitle className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-blue-600" />
          Tutorial: Criando um Agente no Claude Code
        </CardTitle>
        <CardDescription>
          Guia prático do zero para criar e ativar seu primeiro agente
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-slate-700">
            Agentes no Claude Code são arquivos <code className="bg-blue-100 px-1 rounded text-blue-800 font-mono">.md</code> que
            definem instruções permanentes para o Claude. Ao referenciar um agente com{" "}
            <code className="bg-blue-100 px-1 rounded text-blue-800 font-mono">@agents/nome.md</code>,
            o Claude lê o arquivo e adota aquela persona automaticamente — sem você precisar repetir nada.
          </p>
        </div>

        <div>
          <TutorialStep
            number={1}
            icon={FolderPlus}
            title="Crie a pasta /agents na raiz do projeto"
            description="Essa pasta fica no mesmo nível do CLAUDE.md e do package.json."
          >
            <CodeBlock>
              <div className="text-slate-400"># No terminal, na raiz do projeto:</div>
              <div className="text-green-400 mt-1">mkdir agents</div>
            </CodeBlock>
          </TutorialStep>

          <TutorialStep
            number={2}
            icon={FileText}
            title="Crie o arquivo markdown do agente"
            description="O nome do arquivo deve descrever a especialidade do agente."
          >
            <CodeBlock>
              <div className="text-slate-400"># Exemplos de nomes válidos:</div>
              <div className="text-green-400 mt-1">agents/ui-agent.md</div>
              <div className="text-green-400">agents/backend-agent.md</div>
              <div className="text-green-400">agents/test-agent.md</div>
              <div className="text-green-400">agents/refactor-agent.md</div>
            </CodeBlock>
          </TutorialStep>

          <TutorialStep
            number={3}
            icon={FileText}
            title="Escreva o conteúdo do agente"
            description="Use markdown simples. O Claude vai ler e seguir essas instruções automaticamente."
          >
            <CodeBlock>
              <div className="text-white font-bold"># agents/ui-agent.md</div>
              <div className="mt-3 text-slate-400">## Identidade</div>
              <div className="text-green-400">Você é especialista em UI com React e Tailwind CSS.</div>
              <div className="text-green-400">Crie componentes funcionais, tipados e acessíveis.</div>
              <div className="mt-3 text-slate-400">## Regras</div>
              <div className="text-green-400">- Sempre use TypeScript com interfaces tipadas</div>
              <div className="text-green-400">- Use Tailwind CSS, nunca CSS inline</div>
              <div className="text-green-400">- Componentes em PascalCase, arquivos em kebab-case</div>
              <div className="text-green-400">- Mobile-first, adicione ARIA quando necessário</div>
              <div className="mt-3 text-slate-400">## Não faça</div>
              <div className="text-green-400">- Class components</div>
              <div className="text-green-400">- Lógica de negócio em componentes de UI</div>
              <div className="mt-3 text-slate-400">## Stack do projeto</div>
              <div className="text-green-400">React 18, TypeScript, Tailwind v4, shadcn/ui</div>
            </CodeBlock>
            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-xs text-amber-800">
                <strong>Dica:</strong> Quanto mais específico e focado o arquivo, melhor. Evite colocar regras de múltiplas áreas no mesmo agente.
              </p>
            </div>
          </TutorialStep>

          <TutorialStep
            number={4}
            icon={Play}
            title="Invoque o agente no Claude Code"
            description="Referencie o arquivo com @ no início do prompt. O Claude lê e aplica as instruções."
          >
            <CodeBlock>
              <div className="text-slate-400"># Sintaxe básica:</div>
              <div className="text-green-400 mt-1">@agents/ui-agent.md crie um ProductCard</div>
              <div className="mt-3 text-slate-400"># Com contexto adicional:</div>
              <div className="text-green-400 mt-1">@agents/ui-agent.md crie um ProductCard com nome, preço e botão de compra</div>
              <div className="mt-3 text-slate-400"># Trocando de agente no meio da conversa:</div>
              <div className="text-green-400 mt-1">@agents/test-agent.md agora adicione testes para esse componente</div>
            </CodeBlock>
          </TutorialStep>

          <TutorialStep
            number={5}
            icon={RefreshCw}
            title="Registre o agente no CLAUDE.md (opcional)"
            description="Para que o Claude saiba quais agentes estão disponíveis no projeto."
          >
            <CodeBlock>
              <div className="text-slate-400"># No seu CLAUDE.md, adicione uma seção:</div>
              <div className="text-white font-bold mt-2">## Agentes Disponíveis</div>
              <div className="text-green-400 mt-1">- @agents/ui-agent.md — Componentes React/Tailwind</div>
              <div className="text-green-400">- @agents/backend-agent.md — APIs e banco de dados</div>
              <div className="text-green-400">- @agents/test-agent.md — Testes unitários e E2E</div>
            </CodeBlock>
          </TutorialStep>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
            <div className="pb-2 flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">Pronto! Agente ativo</h3>
              <p className="text-sm text-slate-500 mb-3">O Claude vai adotar a persona e seguir as regras do agente em toda a conversa.</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-600 text-white">Sem repetir contexto</Badge>
                <Badge className="bg-blue-600 text-white">Respostas consistentes</Badge>
                <Badge className="bg-purple-600 text-white">Economia de tokens</Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="p-4 bg-slate-50 rounded-lg border">
          <h4 className="font-semibold text-sm mb-3">Estrutura de pastas resultante:</h4>
          <CodeBlock>
            <div className="text-slate-400">projeto/</div>
            <div className="text-green-400">├── agents/</div>
            <div className="text-green-400">│   ├── ui-agent.md</div>
            <div className="text-green-400">│   ├── backend-agent.md</div>
            <div className="text-green-400">│   └── test-agent.md</div>
            <div className="text-slate-500">├── CLAUDE.md</div>
            <div className="text-slate-500">├── src/</div>
            <div className="text-slate-500">└── package.json</div>
          </CodeBlock>
        </div>
      </CardContent>
    </Card>
  );
}
