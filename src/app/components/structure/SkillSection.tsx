import { CheckCircle2, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { BenefitItem } from "./shared";

interface SkillCardProps {
  title: string;
  description: string;
  steps: string[];
}

function SkillCard({ title, description, steps }: SkillCardProps) {
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

export function SkillSection() {
  return (
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
                "7. Adicionar ao index exports",
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
                "7. Atualizar documentação",
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
                "6. Medir impacto",
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
  );
}
