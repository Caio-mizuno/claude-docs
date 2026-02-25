import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function SetupStep({
  number,
  title,
  description,
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

export function GettingStartedSection() {
  return (
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
  );
}
