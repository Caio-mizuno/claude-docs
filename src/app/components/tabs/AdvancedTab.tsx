import { ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface AdvancedTechniqueProps {
  title: string;
  description: string;
  steps: string[];
  benefit: string;
}

function AdvancedTechnique({ title, description, steps, benefit }: AdvancedTechniqueProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-3">{description}</p>
      <div className="bg-slate-50 rounded-lg p-4 border mb-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-2 mb-2 last:mb-0">
            <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-slate-700">{step}</span>
          </div>
        ))}
      </div>
      <Badge className="bg-purple-600 text-white">{benefit}</Badge>
    </div>
  );
}

function ProTip({ emoji, tip, description }: { emoji: string; tip: string; description: string }) {
  return (
    <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200">
      <div className="text-2xl mb-2">{emoji}</div>
      <h4 className="font-semibold mb-1">{tip}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded border border-purple-200">
      <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
}

export function AdvancedTab() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>🚀 Técnicas Avançadas</CardTitle>
          <CardDescription>Para usuários experientes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <AdvancedTechnique
            title="1. Chain of Prompts (Cadeia de Prompts)"
            description="Em vez de pedir tudo de uma vez, divida em etapas:"
            steps={[
              "Prompt 1: 'Crie a estrutura básica do componente'",
              "Prompt 2: 'Adicione a lógica de estado'",
              "Prompt 3: 'Adicione estilos'",
              "Prompt 4: 'Adicione tratamento de erro'",
            ]}
            benefit="Reduz tokens e permite validar cada etapa antes de prosseguir"
          />

          <Separator />

          <AdvancedTechnique
            title="2. Reutilize Estruturas"
            description="Para padrões repetitivos:"
            steps={[
              "Primeiro componente: Prompt detalhado",
              "Componentes seguintes: 'Crie um componente similar ao UserCard mas para Products'",
              "Claude reutiliza a estrutura sem precisar especificar tudo novamente",
            ]}
            benefit="Economia de 60-80% em prompts repetitivos"
          />

          <Separator />

          <AdvancedTechnique
            title="3. Micro-edições com Referências"
            description="Use referências precisas para mudanças pequenas:"
            steps={[
              "'linha 45: troque primary por secondary'",
              "'função handleSubmit: adicione console.log no início'",
              "'estado loading: inicialize como false'",
            ]}
            benefit="Economia de 70-90% vs descrições contextuais"
          />

          <Separator />

          <AdvancedTechnique
            title="4. Session Management (Gestão de Sessões)"
            description="Organize conversas por contexto:"
            steps={[
              "Conversa 1: UI/Components",
              "Conversa 2: Logic/State",
              "Conversa 3: Styling",
              "Conversa 4: Bug fixes",
            ]}
            benefit="Mantém contexto focado e relevante em cada thread"
          />

          <Separator />

          <AdvancedTechnique
            title="5. Code Snippets como Referência"
            description="Use snippets mínimos:"
            steps={[
              "Ao invés de: 'No código onde tem o useEffect que faz fetch...'",
              "Use: 'No useEffect da linha 23'",
            ]}
            benefit="Claude encontra rapidamente o contexto exato"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Dicas Pro</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProTip emoji="⏱️" tip="Timing" description="Faça mudanças relacionadas na mesma sessão, mudanças diferentes em sessões novas" />
            <ProTip emoji="🎨" tip="Estilos" description="Para múltiplas mudanças de estilo, liste todas de uma vez: 'cor azul, padding 4, borda arredondada'" />
            <ProTip emoji="🔍" tip="Debug" description="Ao reportar bugs, inclua apenas: mensagem de erro + linha + o que esperava" />
            <ProTip emoji="📝" tip="Nomenclatura" description="Use nomes consistentes. Se chamou de 'Header' antes, não use 'TopBar' depois" />
            <ProTip emoji="🔄" tip="Iterações" description="Use 'agora' ou 'em seguida' para indicar mudanças incrementais" />
            <ProTip emoji="🎯" tip="Foco" description="Uma tarefa por prompt. Evite 'e também' ou 'além disso'" />
            <ProTip emoji="📦" tip="Imports" description="Não mencione imports. Claude adiciona automaticamente" />
            <ProTip emoji="⚡" tip="Velocidade" description="Comandos de 3-7 palavras são os mais eficientes" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            Checklist de Otimização
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <ChecklistItem text="Meu prompt tem menos de 10 palavras?" />
            <ChecklistItem text="Estou mencionando apenas 1-2 arquivos/componentes?" />
            <ChecklistItem text="Selecionei apenas o código relevante?" />
            <ChecklistItem text="Esta conversa tem menos de 10 mensagens?" />
            <ChecklistItem text="Meu pedido é uma ação única e clara?" />
            <ChecklistItem text="Evitei linguagem casual e fui direto?" />
            <ChecklistItem text="Usei referências específicas (linha/função) quando possível?" />
          </div>
          <div className="mt-4 p-3 bg-white rounded border border-purple-300">
            <p className="text-sm text-slate-700">
              <strong>Regra de Ouro:</strong> Se você consegue explicar o que quer em uma frase curta, você está otimizando corretamente. ✨
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
