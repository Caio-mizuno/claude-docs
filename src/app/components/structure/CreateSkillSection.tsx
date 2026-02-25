import { Code2, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { StepByStep } from "./shared";

export function CreateSkillSection() {
  return (
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
  );
}
