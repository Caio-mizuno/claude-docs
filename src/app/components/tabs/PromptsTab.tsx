import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { PromptTechniquesSection } from "../prompts/PromptTechniquesSection";

interface PromptExampleProps {
  good: boolean;
  title: string;
  prompt: string;
  explanation: string;
}

function PromptExample({ good, title, prompt, explanation }: PromptExampleProps) {
  const bgColor = good ? "bg-green-50" : "bg-red-50";
  const borderColor = good ? "border-green-200" : "border-red-200";
  const iconColor = good ? "text-green-600" : "text-red-600";
  const Icon = good ? CheckCircle2 : XCircle;

  return (
    <div className={`p-4 rounded-lg border ${bgColor} ${borderColor}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${iconColor} mt-0.5 flex-shrink-0`} />
        <div className="flex-1">
          <h4 className="font-semibold mb-2">{title}</h4>
          <div className="bg-white p-3 rounded border mb-2 font-mono text-sm">
            "{prompt}"
          </div>
          <p className="text-sm text-slate-600">{explanation}</p>
        </div>
      </div>
    </div>
  );
}

export function PromptsTab() {
  return (
    <div className="space-y-4">
      <PromptTechniquesSection />
      <Card>
        <CardHeader>
          <CardTitle>✅ Bons Exemplos de Prompts</CardTitle>
          <CardDescription>Como estruturar prompts eficientes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PromptExample
            good={true}
            title="Específico e Direto"
            prompt="Adicione validação de email no campo de input usando regex"
            explanation="Claro, específico, sem ambiguidade. Claude sabe exatamente o que fazer."
          />
          <PromptExample
            good={true}
            title="Com Escopo Limitado"
            prompt="No componente UserCard, mude a cor do botão para azul"
            explanation="Limita o escopo ao componente específico, evitando mudanças em outros lugares."
          />
          <PromptExample
            good={true}
            title="Iterativo e Incremental"
            prompt="Agora adicione um ícone de loading quando o botão for clicado"
            explanation="Constrói sobre o trabalho anterior sem repetir contexto."
          />
          <PromptExample
            good={true}
            title="Com Referência Específica"
            prompt="Na linha 34, substitua useState por useReducer"
            explanation="Referência direta economiza tokens de contexto."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>❌ Exemplos de Prompts Ruins</CardTitle>
          <CardDescription>O que evitar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PromptExample
            good={false}
            title="Vago e Aberto"
            prompt="Melhore esse código"
            explanation="Muito vago. Claude precisa adivinhar o que 'melhorar' significa, desperdiçando tokens."
          />
          <PromptExample
            good={false}
            title="Escopo Muito Amplo"
            prompt="Refatore toda a aplicação para usar TypeScript e adicione testes"
            explanation="Múltiplas tarefas grandes. Divida em prompts menores e específicos."
          />
          <PromptExample
            good={false}
            title="Excesso de Contexto"
            prompt="Então, eu estava pensando que talvez seria legal se a gente pudesse..."
            explanation="Linguagem natural excessiva. Seja direto e objetivo."
          />
          <PromptExample
            good={false}
            title="Sem Especificação"
            prompt="Adicione animações"
            explanation="Onde? Quais animações? Especifique: 'Adicione fade-in no modal ao abrir'."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>📋 Template de Prompt Eficiente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
            <div>[AÇÃO] + [ONDE] + [O QUE] + [COMO (opcional)]</div>
            <Separator className="bg-slate-700" />
            <div className="text-slate-300">Exemplos:</div>
            <div>• Adicione + no Header + um botão de logout + com ícone</div>
            <div>• Corrija + na função fetchData + o tratamento de erro + usando try-catch</div>
            <div>• Remova + do componente Card + o padding interno</div>
            <div>• Altere + na linha 23 + o fontSize + para 16px</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
