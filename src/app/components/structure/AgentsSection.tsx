import { FolderOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { BenefitItem } from "./shared";

interface AgentCardProps {
  title: string;
  color: string;
  description: string;
  expertise: string[];
}

function AgentCard({ title, color, description, expertise }: AgentCardProps) {
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

export function AgentsSection() {
  return (
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
  );
}
