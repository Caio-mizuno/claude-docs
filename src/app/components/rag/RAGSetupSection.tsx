import { Settings, FolderPlus, Download, FileText, Play, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface SetupStepProps {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
  last?: boolean;
}

function SetupStep({ number, icon: Icon, title, description, children, last }: SetupStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
          {number}
        </div>
        {!last && <div className="w-px flex-1 bg-teal-200 mt-2" />}
      </div>
      <div className="pb-6 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-teal-600" />
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

export function RAGSetupSection() {
  return (
    <Card className="border-2 border-teal-300">
      <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-6 h-6 text-teal-600" />
          Como Configurar RAG no Claude Code
        </CardTitle>
        <CardDescription>
          Setup completo usando MCP — do zero ao primeiro query em 5 passos
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">

        <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs text-amber-800">
            <strong>Pré-requisito:</strong> Claude Code instalado (
            <code className="bg-amber-100 px-1 rounded font-mono">npm install -g @anthropic-ai/claude-code</code>
            ) e Node.js 18+.
          </p>
        </div>

        <div>
          <SetupStep
            number={1}
            icon={Download}
            title="Instale um servidor MCP com suporte a RAG"
            description="O filesystem MCP já vem disponível. Para RAG com vetores, use o mcp-server-rag."
          >
            <CodeBlock>
              <div className="text-slate-400"># Opção A: Filesystem MCP (nativo, sem indexação vetorial)</div>
              <div className="text-green-400 mt-1">npx @modelcontextprotocol/server-filesystem --help</div>
              <div className="mt-3 text-slate-400"># Opção B: RAG com embeddings locais (Chroma)</div>
              <div className="text-green-400 mt-1">pip install chromadb</div>
              <div className="text-green-400">npm install -g mcp-server-chroma</div>
              <div className="mt-3 text-slate-400"># Opção C: RAG simples via npx (sem instalação)</div>
              <div className="text-green-400 mt-1">npx -y @anthropic-ai/mcp-server-filesystem</div>
            </CodeBlock>
          </SetupStep>

          <SetupStep
            number={2}
            icon={FolderPlus}
            title="Crie o arquivo de configuração MCP"
            description="O Claude Code lê as configurações MCP de .claude/settings.json na raiz do projeto."
          >
            <CodeBlock>
              <div className="text-slate-400"># Crie o diretório de configuração:</div>
              <div className="text-green-400 mt-1">mkdir -p .claude</div>
              <div className="text-green-400">touch .claude/settings.json</div>
            </CodeBlock>
          </SetupStep>

          <SetupStep
            number={3}
            icon={FileText}
            title="Configure o servidor MCP no settings.json"
            description='Adicione a entrada "mcpServers" com o servidor escolhido e os diretórios a indexar.'
          >
            <CodeBlock>
              <div className="text-slate-400">{"// .claude/settings.json"}</div>
              <div className="text-green-400 mt-1">{"{"}</div>
              <div className="text-green-400">{"  \"mcpServers\": {"}</div>
              <div className="text-green-400">{"    \"filesystem\": {"}</div>
              <div className="text-green-400">{"      \"command\": \"npx\","}</div>
              <div className="text-green-400">{"      \"args\": ["}</div>
              <div className="text-green-400">{"        \"-y\","}</div>
              <div className="text-green-400">{"        \"@modelcontextprotocol/server-filesystem\","}</div>
              <div className="text-yellow-400">{"        \"/caminho/para/seu/projeto\","}</div>
              <div className="text-yellow-400">{"        \"/caminho/para/sua/documentacao\""}</div>
              <div className="text-green-400">{"      ]"}</div>
              <div className="text-green-400">{"    }"}</div>
              <div className="text-green-400">{"  }"}</div>
              <div className="text-green-400">{"}"}</div>
            </CodeBlock>
            <div className="mt-3 p-3 bg-teal-50 border border-teal-200 rounded-lg">
              <p className="text-xs text-teal-800">
                <strong>Dica:</strong> Você pode adicionar múltiplos diretórios ao array <code className="bg-teal-100 px-1 rounded font-mono">args</code>.
                O Claude Code vai conseguir buscar em todos eles simultaneamente.
              </p>
            </div>
          </SetupStep>

          <SetupStep
            number={4}
            icon={FileText}
            title="Documente o MCP no CLAUDE.md"
            description="Informe ao Claude quais servidores estão disponíveis e para que servem."
          >
            <CodeBlock>
              <div className="text-slate-400"># Adicione ao seu CLAUDE.md:</div>
              <div className="text-white font-bold mt-2">## MCP e RAG Disponíveis</div>
              <div className="text-green-400 mt-1">### filesystem</div>
              <div className="text-green-400">Acesso a arquivos em:</div>
              <div className="text-green-400">- /src — código-fonte do projeto</div>
              <div className="text-green-400">- /docs — documentação interna</div>
              <div className="text-green-400 mt-2">Use para buscar implementações existentes</div>
              <div className="text-green-400">antes de criar código novo.</div>
            </CodeBlock>
          </SetupStep>

          <SetupStep
            number={5}
            icon={Play}
            title="Inicie o Claude Code e use o MCP"
            description="O servidor MCP sobe automaticamente. Use a ferramenta de busca nos prompts."
            last
          >
            <CodeBlock>
              <div className="text-slate-400"># Inicie o Claude Code normalmente:</div>
              <div className="text-green-400 mt-1">claude</div>
              <div className="mt-3 text-slate-400"># Verifique se o MCP está ativo:</div>
              <div className="text-green-400 mt-1">/mcp</div>
              <div className="mt-3 text-slate-400"># Use nos prompts (o Claude chama o MCP automaticamente):</div>
              <div className="text-green-400 mt-1">"Busque no codebase como tratamos erros de autenticação"</div>
              <div className="text-green-400">"Encontre todos os componentes que usam o hook useCart"</div>
            </CodeBlock>
          </SetupStep>

          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">RAG configurado e ativo</h3>
              <p className="text-sm text-slate-500 mb-3">
                O Claude Code agora consegue buscar no seu codebase e documentação em vez de depender de arquivos abertos manualmente.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-600 text-white">Busca automática</Badge>
                <Badge className="bg-green-600 text-white">Contexto sob demanda</Badge>
                <Badge className="bg-blue-600 text-white">Tokens otimizados</Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="p-4 bg-slate-50 rounded-lg border">
          <h4 className="font-semibold text-sm mb-3">Estrutura de arquivos resultante:</h4>
          <CodeBlock>
            <div className="text-slate-400">projeto/</div>
            <div className="text-green-400">├── .claude/</div>
            <div className="text-green-400">│   └── settings.json  ← configuração MCP</div>
            <div className="text-slate-500">├── agents/</div>
            <div className="text-slate-500">├── skill/</div>
            <div className="text-slate-500">├── CLAUDE.md</div>
            <div className="text-slate-500">├── docs/            ← indexado pelo MCP</div>
            <div className="text-slate-500">└── src/             ← indexado pelo MCP</div>
          </CodeBlock>
        </div>
      </CardContent>
    </Card>
  );
}
