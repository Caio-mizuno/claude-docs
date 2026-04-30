import { Code2, Pencil } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { StepByStep } from "./shared";

export function CreateAgentSection() {
  return (
    <Card className="border-2 border-blue-300">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
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
  );
}
