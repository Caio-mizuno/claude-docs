import { 
  CheckCircle2, 
  Brain, 
  FileCode, 
  FolderOpen, 
  Wrench,
  Sparkles,
  ArrowRight,
  Code2,
  Pencil
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function StructureTab() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            Por que usar CLAUDE.md + /agents + /skill?
          </CardTitle>
          <CardDescription>
            Organize seu projeto para maximizar a eficiência do Claude
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200 mb-6">
            <p className="text-slate-700">
              Essa estrutura reduz <strong>drasticamente</strong> a necessidade de explicar contexto em cada prompt,
              permitindo que Claude entenda seu projeto de forma automática e consistente.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Badge className="bg-purple-600 text-white">Economia: 70-90% de tokens</Badge>
              <Badge className="bg-blue-600 text-white">Respostas mais precisas</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CLAUDE.md Section */}
      <Card className="border-2 border-purple-300">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardTitle className="flex items-center gap-2">
            <FileCode className="w-6 h-6 text-purple-600" />
            CLAUDE.md - Documentação do Projeto
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">O que é?</h3>
            <p className="text-slate-700 mb-3">
              Um arquivo na raiz do projeto que serve como "manual de instruções" permanente para o Claude.
              Ele lê este arquivo automaticamente e usa como contexto base para todas as interações.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-2">Por que usar?</h3>
            <div className="space-y-2">
              <BenefitItem
                icon="🎯"
                title="Contexto Automático"
                description="Você não precisa repetir informações sobre o projeto em cada conversa"
              />
              <BenefitItem
                icon="📋"
                title="Padrões Consistentes"
                description="Claude segue suas convenções de código automaticamente"
              />
              <BenefitItem
                icon="⚡"
                title="Respostas Mais Rápidas"
                description="Claude já sabe a arquitetura, não precisa adivinhar"
              />
              <BenefitItem
                icon="💰"
                title="Economia Massiva"
                description="Evita repetir o mesmo contexto em múltiplas mensagens"
              />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-2">O que incluir no CLAUDE.md?</h3>
            <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-3">
              <div className="text-white font-bold"># CLAUDE.md</div>
              <div className="text-slate-400">## Visão Geral do Projeto</div>
              <div>- Nome e descrição breve</div>
              <div>- Stack principal (React, TypeScript, etc.)</div>
              <div>- Propósito da aplicação</div>
              <div className="text-slate-400 mt-3">## Estrutura de Pastas</div>
              <div>/src/components - Componentes reutilizáveis</div>
              <div>/src/pages - Páginas da aplicação</div>
              <div>/src/utils - Funções utilitárias</div>
              <div className="text-slate-400 mt-3">## Convenções de Código</div>
              <div>- Usar functional components</div>
              <div>- Props sempre tipadas</div>
              <div>- Tailwind para estilos</div>
              <div className="text-slate-400 mt-3">## Regras Importantes</div>
              <div>- Não modificar arquivos em /legacy</div>
              <div>- Sempre adicionar testes para novas features</div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">💡 Resultado Prático:</h4>
            <p className="text-sm text-slate-700">
              Ao invés de: <em>"Crie um componente usando React functional component com TypeScript e Tailwind..."</em>
            </p>
            <p className="text-sm text-slate-700 mt-2">
              Você escreve: <strong>"Crie um componente Button"</strong>
            </p>
            <Badge className="mt-2 bg-green-600 text-white">Claude já sabe o resto!</Badge>
          </div>
        </CardContent>
      </Card>

      {/* /agents Section */}
      <Card className="border-2 border-blue-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="w-6 h-6 text-blue-600" />
            /agents - Agentes Especializados
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">O que é?</h3>
            <p className="text-slate-700 mb-3">
              Uma pasta contendo arquivos markdown que definem "personas" ou "especialistas" para diferentes tipos de tarefas.
              Cada agente tem expertise e instruções específicas.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-2">Por que usar?</h3>
            <div className="space-y-2">
              <BenefitItem
                icon="🎭"
                title="Especialização"
                description="Cada agente é expert em uma área específica (UI, Backend, Testes, etc.)"
              />
              <BenefitItem
                icon="🔄"
                title="Mudança de Contexto"
                description="Troque de agente conforme a tarefa, sem perder qualidade"
              />
              <BenefitItem
                icon="📚"
                title="Conhecimento Focado"
                description="Cada agente carrega apenas o conhecimento relevante para sua área"
              />
              <BenefitItem
                icon="🚀"
                title="Eficiência Máxima"
                description="Respostas mais precisas com menos tokens de contexto"
              />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-2">Exemplos de Agentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <AgentCard
                title="ui-agent.md"
                color="bg-pink-50 border-pink-300"
                description="Especialista em componentes visuais, UX, acessibilidade e design systems"
                expertise={["React components", "CSS/Tailwind", "Responsividade", "A11y"]}
              />
              <AgentCard
                title="backend-agent.md"
                color="bg-green-50 border-green-300"
                description="Expert em APIs, banco de dados, autenticação e lógica de negócio"
                expertise={["REST/GraphQL", "Database", "Auth", "Server logic"]}
              />
              <AgentCard
                title="test-agent.md"
                color="bg-blue-50 border-blue-300"
                description="Focado em testes unitários, integração, E2E e qualidade de código"
                expertise={["Jest/Vitest", "Testing Library", "Cypress", "Coverage"]}
              />
              <AgentCard
                title="performance-agent.md"
                color="bg-yellow-50 border-yellow-300"
                description="Otimização de performance, bundle size, caching e lazy loading"
                expertise={["Optimization", "Profiling", "Caching", "Code splitting"]}
              />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-2">Como usar agentes?</h3>
            <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
              <div className="text-white">// No prompt, referencie o agente:</div>
              <div>"@agents/ui-agent.md crie um card component"</div>
              <div className="text-slate-500 mt-3">// Ou troque de agente no meio da conversa:</div>
              <div>"Agora usando @agents/test-agent.md, adicione testes para isso"</div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Poder dos Agentes:</h4>
            <p className="text-sm text-slate-700">
              Cada agente carrega apenas o contexto necessário para sua especialidade, reduzindo tokens
              e aumentando a precisão das respostas. É como ter uma equipe de especialistas disponível!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* /skill Section */}
      <Card className="border-2 border-orange-300">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-orange-600" />
            /skill - Habilidades e Procedimentos
          </CardTitle>
          <CardDescription>
            Guia completo para criar procedimentos reutilizáveis
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">O que é?</h3>
            <p className="text-slate-700 mb-3">
              Uma pasta contendo "receitas" ou "procedimentos" passo-a-passo para tarefas comuns.
              São instruções reutilizáveis que Claude pode seguir automaticamente.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-2">Por que usar?</h3>
            <div className="space-y-2">
              <BenefitItem
                icon="📖"
                title="Procedimentos Padronizados"
                description="Tarefas complexas se tornam simples comandos"
              />
              <BenefitItem
                icon="🔁"
                title="Reutilização Total"
                description="Defina uma vez, use infinitas vezes sem repetir instruções"
              />
              <BenefitItem
                icon="✅"
                title="Consistência"
                description="Mesma tarefa sempre executada da mesma forma"
              />
              <BenefitItem
                icon="⏱️"
                title="Velocidade"
                description="Transforme tarefas de 10 passos em um comando único"
              />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-2">Exemplos de Skills</h3>
            <div className="space-y-3">
              <SkillCard
                title="create-component.md"
                description="Procedimento completo para criar um novo componente"
                steps={[
                  "1. Criar arquivo em /components",
                  "2. Adicionar tipos TypeScript",
                  "3. Criar componente funcional",
                  "4. Adicionar PropTypes/JSDoc",
                  "5. Exportar corretamente",
                  "6. Criar arquivo de teste",
                  "7. Adicionar ao index exports"
                ]}
              />
              <SkillCard
                title="add-api-endpoint.md"
                description="Checklist para adicionar nova rota de API"
                steps={[
                  "1. Criar handler em /api",
                  "2. Adicionar validação de dados",
                  "3. Implementar lógica de negócio",
                  "4. Adicionar tratamento de erro",
                  "5. Criar tipos de resposta",
                  "6. Adicionar testes unitários",
                  "7. Atualizar documentação"
                ]}
              />
              <SkillCard
                title="refactor-for-performance.md"
                description="Processo de otimização de performance"
                steps={[
                  "1. Identificar componentes pesados",
                  "2. Adicionar React.memo onde necessário",
                  "3. Implementar code splitting",
                  "4. Otimizar re-renders",
                  "5. Lazy load componentes",
                  "6. Medir impacto"
                ]}
              />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-2">Como usar skills?</h3>
            <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
              <div className="text-white">// Invoque a skill diretamente:</div>
              <div>"Use @skill/create-component.md para criar um Modal"</div>
              <div className="text-slate-500 mt-3">// Claude executa todos os passos automaticamente</div>
              <div className="text-slate-500">// Você não precisa especificar cada detalhe!</div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-900 mb-2">💡 Magia das Skills:</h4>
            <p className="text-sm text-slate-700 mb-2">
              <strong>Sem skill:</strong> "Crie um componente Button, adicione TypeScript, crie testes, exporte no index, adicione PropTypes..."
            </p>
            <p className="text-sm text-slate-700">
              <strong>Com skill:</strong> "Use create-component para Button"
            </p>
            <Badge className="mt-2 bg-orange-600 text-white">Economia de 95% em instruções!</Badge>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🎯 Invocando Skills no Prompt:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-2 rounded border font-mono">
                "Use @skill/create-component.md para criar um Modal"
              </div>
              <div className="bg-white p-2 rounded border font-mono">
                "Siga @skill/add-api.md para endpoint /users"
              </div>
              <div className="bg-white p-2 rounded border font-mono">
                "Aplique @skill/refactor-for-performance.md no Dashboard"
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How They Work Together */}
      <Card className="bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Como Tudo Funciona Junto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
            <h3 className="font-semibold mb-3">Exemplo Prático Completo:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <p className="font-semibold text-sm">CLAUDE.md define o projeto</p>
                  <p className="text-xs text-slate-600">Claude sabe: React + TypeScript + Tailwind + estrutura de pastas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <p className="font-semibold text-sm">Você escolhe o agente certo</p>
                  <p className="text-xs text-slate-600">"@agents/ui-agent.md" para trabalho de interface</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <p className="font-semibold text-sm">Invoca uma skill</p>
                  <p className="text-xs text-slate-600">"Use @skill/create-component.md para ProductCard"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <p className="font-semibold text-sm">Resultado</p>
                  <p className="text-xs text-slate-600">Componente completo, tipado, testado, seguindo todos os padrões!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-3xl font-bold text-purple-600 mb-1">1</div>
              <div className="text-sm font-semibold">Prompt Curto</div>
              <div className="text-xs text-slate-600 mt-1">8-12 palavras</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-3xl font-bold text-blue-600 mb-1">-85%</div>
              <div className="text-sm font-semibold">Menos Tokens</div>
              <div className="text-xs text-slate-600 mt-1">vs. explicar tudo</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm font-semibold">Consistente</div>
              <div className="text-xs text-slate-600 mt-1">Sempre igual</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Resultado Final
            </h4>
            <p className="text-sm mb-3">
              Com essa estrutura, você economiza <strong>70-90% de tokens</strong>, obtém respostas mais precisas
              e mantém consistência total no projeto, tudo com prompts de 1 linha!
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white text-purple-600">Menos repetição</Badge>
              <Badge className="bg-white text-purple-600">Mais velocidade</Badge>
              <Badge className="bg-white text-purple-600">Maior qualidade</Badge>
              <Badge className="bg-white text-purple-600">Custo menor</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>🚀 Como Começar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <SetupStep
            number={1}
            title="Crie CLAUDE.md na raiz"
            description="Documente visão geral, estrutura de pastas e convenções"
          />
          <SetupStep
            number={2}
            title="Crie pasta /agents"
            description="Comece com 2-3 agentes básicos (ui, backend, test)"
          />
          <SetupStep
            number={3}
            title="Crie pasta /skill"
            description="Adicione suas tarefas mais comuns como skills"
          />
          <SetupStep
            number={4}
            title="Comece a usar"
            description="Referencie @agents e @skill nos seus prompts"
          />
          <SetupStep
            number={5}
            title="Itere e melhore"
            description="Adicione novos agentes e skills conforme necessário"
          />
        </CardContent>
      </Card>

      {/* How to Create an Agent */}
      <Card className="border-2 border-blue-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center gap-2">
            <Pencil className="w-6 h-6 text-blue-600" />
            Como Criar um Agent (Passo a Passo)
          </CardTitle>
          <CardDescription>
            Guia completo para criar seu próprio agente especializado
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-3">
            <StepByStep
              number="1"
              title="Escolha a Especialidade"
              description="Defina qual área o agente vai cobrir"
              examples={["UI/UX Design", "Backend API", "Database", "Testing", "Performance", "Security"]}
            />
            <StepByStep
              number="2"
              title="Crie o arquivo"
              description="Dentro de /agents/, crie um arquivo .md com nome descritivo"
              examples={["ui-agent.md", "api-agent.md", "test-agent.md"]}
            />
            <StepByStep
              number="3"
              title="Defina a Persona"
              description="Descreva quem é o agente e qual sua expertise"
            />
            <StepByStep
              number="4"
              title="Liste Responsabilidades"
              description="O que o agente deve fazer e não fazer"
            />
            <StepByStep
              number="5"
              title="Adicione Regras Específicas"
              description="Convenções, padrões e boas práticas da área"
            />
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600" />
              Template Completo de um Agent
            </h3>
            <div className="bg-slate-900 text-green-400 p-5 rounded-lg font-mono text-sm space-y-2 overflow-x-auto">
              <div className="text-white font-bold"># UI Agent</div>
              <div className="text-slate-400 mt-3">## Identidade</div>
              <div>Você é um especialista em desenvolvimento de interfaces com React,</div>
              <div>focado em criar componentes acessíveis, responsivos e reutilizáveis.</div>
              
              <div className="text-slate-400 mt-3">## Expertise</div>
              <div>- React (Hooks, Context, Performance)</div>
              <div>- CSS/Tailwind CSS</div>
              <div>- Design Systems e Component Libraries</div>
              <div>- Acessibilidade (WCAG 2.1)</div>
              <div>- Responsive Design</div>
              <div>- Animações e Transições</div>
              
              <div className="text-slate-400 mt-3">## Responsabilidades</div>
              <div>✅ FAZER:</div>
              <div>- Criar componentes funcionais com TypeScript</div>
              <div>- Usar Tailwind CSS para estilização</div>
              <div>- Garantir responsividade mobile-first</div>
              <div>- Adicionar atributos ARIA quando necessário</div>
              <div>- Seguir padrões de nomenclatura consistentes</div>
              <div>- Otimizar re-renders com memo/useMemo/useCallback</div>
              
              <div className="mt-2">❌ NÃO FAZER:</div>
              <div>- Usar class components</div>
              <div>- Adicionar lógica de negócio em componentes UI</div>
              <div>- Criar estilos inline sem Tailwind</div>
              <div>- Ignorar feedback de acessibilidade</div>
              
              <div className="text-slate-400 mt-3">## Convenções de Código</div>
              <div>{'- Props: sempre tipadas com interface'}</div>
              <div>- Naming: PascalCase para componentes</div>
              <div>- Files: kebab-case (user-card.tsx)</div>
              <div>- Exports: named exports + default export do componente</div>
              
              <div className="text-slate-400 mt-3">## Estrutura de Componente</div>
              <div>{'```typescript'}</div>
              <div>{'interface ComponentProps {'}</div>
              <div>{'  // props aqui'}</div>
              <div>{'}'}</div>
              <div className="mt-2">{'export function Component({ props }: ComponentProps) {'}</div>
              <div>{'  // hooks'}</div>
              <div>{'  // handlers'}</div>
              <div>{'  // render'}</div>
              <div>{'}'}</div>
              <div>{'```'}</div>
              
              <div className="text-slate-400 mt-3">## Referências</div>
              <div>- Design System: /docs/design-system.md</div>
              <div>- Componentes Base: /src/components/ui/</div>
              <div>- Guia de Acessibilidade: /docs/a11y.md</div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Dica Pro:</h4>
            <p className="text-sm text-slate-700 mb-2">
              Quanto mais específico for o agent, melhores serão as respostas. Inclua exemplos
              de código, links para documentação interna e casos de uso comuns.
            </p>
            <Badge className="bg-blue-600 text-white">
              Agents detalhados = Respostas precisas
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* How to Create a Skill */}
      <Card className="border-2 border-orange-300">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-orange-600" />
            Como Criar uma Skill (Passo a Passo)
          </CardTitle>
          <CardDescription>
            Guia completo para criar procedimentos reutilizáveis
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-3">
            <StepByStep
              number="1"
              title="Identifique Tarefas Repetitivas"
              description="Quais tarefas você faz frequentemente que seguem sempre os mesmos passos?"
              examples={["Criar componente", "Adicionar API route", "Setup de teste", "Deploy"]}
            />
            <StepByStep
              number="2"
              title="Crie o arquivo"
              description="Dentro de /skill/, crie um arquivo .md com nome da tarefa"
              examples={["create-component.md", "add-api.md", "setup-test.md"]}
            />
            <StepByStep
              number="3"
              title="Liste Pré-requisitos"
              description="O que precisa existir antes de executar a skill"
            />
            <StepByStep
              number="4"
              title="Documente Cada Passo"
              description="Escreva passo a passo, de forma clara e sequencial"
            />
            <StepByStep
              number="5"
              title="Adicione Validações"
              description="Checkpoints para garantir que cada etapa foi concluída"
            />
            <StepByStep
              number="6"
              title="Inclua Exemplos"
              description="Mostre código exemplo do resultado esperado"
            />
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-orange-600" />
              Template Completo de uma Skill
            </h3>
            <div className="bg-slate-900 text-green-400 p-5 rounded-lg font-mono text-sm space-y-2 overflow-x-auto">
              <div className="text-white font-bold"># Skill: Create React Component</div>
              
              <div className="text-slate-400 mt-3">## Objetivo</div>
              <div>Criar um novo componente React completo, tipado, testado e documentado</div>
              <div>seguindo os padrões do projeto.</div>
              
              <div className="text-slate-400 mt-3">## Pré-requisitos</div>
              <div>- Nome do componente definido</div>
              <div>- Propósito do componente claro</div>
              <div>- Props necessárias identificadas</div>
              
              <div className="text-slate-400 mt-3">## Procedimento</div>
              
              <div className="text-yellow-400 mt-2">### 1. Criar Estrutura de Arquivos</div>
              <div>Localização: /src/components/[nome-componente]/</div>
              <div>Criar arquivos:</div>
              <div>- [nome-componente].tsx (componente principal)</div>
              <div>- [nome-componente].test.tsx (testes)</div>
              <div>- index.ts (exports)</div>
              
              <div className="text-yellow-400 mt-2">### 2. Implementar Componente</div>
              <div>{'```typescript'}</div>
              <div>// [nome-componente].tsx</div>
              <div>{'import { FC } from "react";'}</div>
              <div className="mt-2">{'export interface [Nome]Props {'}</div>
              <div>{'  // Definir props com JSDoc'}</div>
              <div>{'}'}</div>
              <div className="mt-2">{'export const [Nome]: FC<[Nome]Props> = (props) => {'}</div>
              <div>{'  // 1. Hooks (useState, useEffect, custom hooks)'}</div>
              <div>{'  // 2. Derived state e computações'}</div>
              <div>{'  // 3. Event handlers'}</div>
              <div>{'  // 4. Effects'}</div>
              <div>{'  // 5. Render'}</div>
              <div>{'  return (...);'}</div>
              <div>{'};'}</div>
              <div>{'```'}</div>
              
              <div className="text-yellow-400 mt-2">### 3. Adicionar TypeScript</div>
              <div>- Tipar todas as props</div>
              <div>- Adicionar tipos para estados</div>
              <div>- Tipar event handlers</div>
              <div>- Usar tipos do React (FC, ReactNode, etc.)</div>
              
              <div className="text-yellow-400 mt-2">### 4. Aplicar Estilos</div>
              <div>- Usar classes Tailwind CSS</div>
              <div>- Seguir design system do projeto</div>
              <div>- Garantir responsividade (mobile-first)</div>
              <div>- Adicionar estados hover/focus/active</div>
              
              <div className="text-yellow-400 mt-2">### 5. Garantir Acessibilidade</div>
              <div>- Adicionar atributos ARIA se necessário</div>
              <div>- Garantir navegação por teclado</div>
              <div>- Testar com screen reader (mental check)</div>
              <div>- Adicionar alt texts em imagens</div>
              
              <div className="text-yellow-400 mt-2">### 6. Criar Testes</div>
              <div>{'```typescript'}</div>
              <div>// [nome-componente].test.tsx</div>
              <div>{'import { render, screen } from "@testing-library/react";'}</div>
              <div>{'import { [Nome] } from "./[nome-componente]";'}</div>
              <div className="mt-2">{'describe("[Nome]", () => {'}</div>
              <div>{'  it("renders correctly", () => {'}</div>
              <div>{'    render(<[Nome] {...props} />);'}</div>
              <div>{'    // assertions'}</div>
              <div>{'  });'}</div>
              <div>{'});'}</div>
              <div>{'```'}</div>
              
              <div className="text-yellow-400 mt-2">### 7. Criar Barrel Export</div>
              <div>{'```typescript'}</div>
              <div>// index.ts</div>
              <div>{'export * from "./[nome-componente]";'}</div>
              <div>{'```'}</div>
              
              <div className="text-yellow-400 mt-2">### 8. Adicionar ao Index Principal</div>
              <div>Atualizar /src/components/index.ts:</div>
              <div>{'export * from "./[nome-componente]";'}</div>
              
              <div className="text-slate-400 mt-3">## Checklist de Validação</div>
              <div>- [ ] Componente renderiza sem erros</div>
              <div>- [ ] Props estão tipadas corretamente</div>
              <div>- [ ] Estilos aplicados e responsivos</div>
              <div>- [ ] Acessibilidade verificada</div>
              <div>- [ ] Testes passando</div>
              <div>- [ ] Exports configurados</div>
              <div>- [ ] Documentação JSDoc presente</div>
              
              <div className="text-slate-400 mt-3">## Exemplo de Uso</div>
              <div>{'```typescript'}</div>
              <div>{'import { Button } from "@/components";'}</div>
              <div className="mt-2">{'<Button '}</div>
              <div>{'  variant="primary" '}</div>
              <div>{'  onClick={handleClick}'}</div>
              <div>{'>'}</div>
              <div>{'  Click me'}</div>
              <div>{'</Button>'}</div>
              <div>{'```'}</div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-900 mb-2">💡 Dica Pro:</h4>
            <p className="text-sm text-slate-700 mb-2">
              Skills devem ser como receitas de cozinha: claras, sequenciais e completas.
              Qualquer desenvolvedor (ou IA) deve conseguir executar seguindo os passos.
            </p>
            <Badge className="bg-orange-600 text-white">
              Skills detalhadas = Zero ambiguidade
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Helper Components
function BenefitItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
    </div>
  );
}

function AgentCard({ 
  title, 
  color, 
  description, 
  expertise 
}: { 
  title: string; 
  color: string; 
  description: string; 
  expertise: string[];
}) {
  return (
    <div className={`p-4 rounded-lg border-2 ${color}`}>
      <h4 className="font-mono font-semibold mb-2">{title}</h4>
      <p className="text-xs text-slate-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-1">
        {expertise.map((skill, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SkillCard({ 
  title, 
  description, 
  steps 
}: { 
  title: string; 
  description: string; 
  steps: string[];
}) {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
      <h4 className="font-mono font-semibold mb-1">{title}</h4>
      <p className="text-xs text-slate-600 mb-3">{description}</p>
      <div className="bg-white rounded p-3 border">
        {steps.map((step, index) => (
          <div key={index} className="text-xs text-slate-700 py-1 flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-orange-600 flex-shrink-0" />
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

function SetupStep({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border">
      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
    </div>
  );
}

function StepByStep({ 
  number, 
  title, 
  description,
  examples
}: { 
  number: string; 
  title: string; 
  description: string;
  examples?: string[];
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
          {number}
        </div>
        <div>
          <h4 className="font-semibold text-sm">{title}</h4>
          <p className="text-xs text-slate-600">{description}</p>
        </div>
      </div>
      {examples && (
        <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
          {examples.map((example, index) => (
            <div key={index} className="text-xs text-slate-700">
              - {example}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}