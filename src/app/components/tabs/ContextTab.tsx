import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface ContextStrategyProps {
  number: string;
  title: string;
  description: string;
  impact: string;
}

function ContextStrategy({ number, title, description, impact }: ContextStrategyProps) {
  return (
    <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-slate-600 mb-2">{description}</p>
        <Badge className="bg-blue-600 text-white text-xs whitespace-normal">{impact}</Badge>
      </div>
    </div>
  );
}

function ContextTrap({ text }: { text: string }) {
  return (
    <div className="p-2 bg-red-50 rounded border border-red-200 text-sm text-slate-700">
      {text}
    </div>
  );
}

export function ContextTab() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>🎯 Gestão de Contexto</CardTitle>
          <CardDescription>Como controlar o que Claude "vê"</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Estratégias de Redução de Contexto
            </h3>
            <div className="space-y-3">
              <ContextStrategy
                number="1"
                title="Use Seleção de Código"
                description="Selecione apenas as linhas relevantes em vez de mencionar o arquivo inteiro"
                impact="🔥 Economia: 80-95% de tokens"
              />
              <ContextStrategy
                number="2"
                title="Feche Conversas Longas"
                description="Após 10-15 interações, inicie uma nova conversa. O histórico acumula tokens."
                impact="💰 Economia: 50-70% por mensagem"
              />
              <ContextStrategy
                number="3"
                title="Evite @mentions Desnecessários"
                description="Não mencione múltiplos arquivos. Claude pode inferir dependências do código selecionado."
                impact="⚡ Economia: 40-60% de tokens"
              />
              <ContextStrategy
                number="4"
                title="Descreva em vez de Colar"
                description="Para referências externas, descreva a API em vez de colar documentação completa"
                impact="📉 Economia: 70-90% de tokens"
              />
              <ContextStrategy
                number="5"
                title="Use Referências Diretas"
                description="'linha 45' ou 'função handleClick' em vez de colar o código novamente"
                impact="✅ Economia: 60-80% de tokens"
              />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Armadilhas de Contexto a Evitar
            </h3>
            <div className="space-y-2">
              <ContextTrap text="❌ Mencionar 5+ arquivos em uma única mensagem" />
              <ContextTrap text="❌ Copiar logs de erro completos (extraia apenas a mensagem relevante)" />
              <ContextTrap text="❌ Incluir dependências node_modules ou código gerado" />
              <ContextTrap text="❌ Repetir instruções dadas anteriormente na mesma conversa" />
              <ContextTrap text="❌ Colar documentação completa de APIs (resuma em 2-3 linhas)" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>📊 Comparação: Antes vs Depois</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-red-200 bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                ❌ Antes (Ineficiente)
              </h4>
              <div className="text-sm text-slate-700 space-y-2">
                <div className="bg-white p-2 rounded border">
                  Mensagem: "Olá! Então, eu estava olhando o código e pensei..."
                </div>
                <div className="bg-white p-2 rounded border">
                  Arquivos: @App.tsx @Header.tsx @Footer.tsx @utils.ts
                </div>
                <div className="bg-white p-2 rounded border">
                  Contexto: Toda conversa anterior (15 mensagens)
                </div>
                <div className="font-bold text-red-700 mt-3">
                  Total: ~8.000 tokens
                </div>
              </div>
            </div>

            <div className="border-2 border-green-200 bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                ✅ Depois (Otimizado)
              </h4>
              <div className="text-sm text-slate-700 space-y-2">
                <div className="bg-white p-2 rounded border">
                  Mensagem: "Adicione validação de email"
                </div>
                <div className="bg-white p-2 rounded border">
                  Código: Apenas linhas 23-45 selecionadas do componente
                </div>
                <div className="bg-white p-2 rounded border">
                  Contexto: Nova conversa focada
                </div>
                <div className="font-bold text-green-700 mt-3">
                  Total: ~500 tokens
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border border-green-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="font-semibold">Economia neste exemplo:</span>
              <Badge className="bg-green-600 text-white text-lg px-4 py-1 self-start sm:self-auto">
                93.75% (~16x mais barato)
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
