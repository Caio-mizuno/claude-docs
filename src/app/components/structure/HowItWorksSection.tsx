import { CheckCircle2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function HowItWorksSection() {
  return (
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
  );
}
