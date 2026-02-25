import { CheckCircle2, Target, Zap, FileCode, MessageSquare, Lightbulb, Gauge, TrendingDown, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

function QuickWin({ text, savings }: { text: string; savings: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-sm text-slate-700">{text}</p>
        <Badge variant="outline" className="mt-1 text-xs bg-green-100 text-green-700 border-green-300">
          {savings}
        </Badge>
      </div>
    </div>
  );
}

export function OverviewTab() {
  return (
    <div className="space-y-4">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Performance</CardTitle>
              <Gauge className="w-5 h-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700">+85%</div>
            <p className="text-sm text-green-600 mt-1">Melhoria esperada</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Redução de Tokens</CardTitle>
              <TrendingDown className="w-5 h-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700">-60%</div>
            <p className="text-sm text-blue-600 mt-1">Economia de tokens</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Custo</CardTitle>
              <DollarSign className="w-5 h-5 text-yellow-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-700">-70%</div>
            <p className="text-sm text-yellow-600 mt-1">Redução de custos</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            Princípios Fundamentais
          </CardTitle>
          <CardDescription>
            Os 3 pilares para otimizar seu uso do Claude Code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
              <Zap className="w-6 h-6 text-purple-600 mb-2" />
              <h3 className="font-semibold mb-2">1. Seja Específico</h3>
              <p className="text-sm text-slate-600">
                Prompts claros e diretos reduzem iterações desnecessárias
              </p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <FileCode className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-semibold mb-2">2. Minimize Contexto</h3>
              <p className="text-sm text-slate-600">
                Envie apenas o código relevante para a tarefa
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <MessageSquare className="w-6 h-6 text-green-600 mb-2" />
              <h3 className="font-semibold mb-2">3. Use Iterações</h3>
              <p className="text-sm text-slate-600">
                Faça mudanças incrementais em vez de reescrever tudo
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Quick Wins - Ganhos Rápidos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <QuickWin
            text="Use seleção de código em vez de mencionar arquivos inteiros"
            savings="Economia: 80-90% de tokens"
          />
          <QuickWin
            text="Feche conversas antigas e inicie novas para tarefas distintas"
            savings="Reduz contexto acumulado"
          />
          <QuickWin
            text="Use comandos imperativos curtos: 'Adicione validação' vs 'Por favor, você poderia...'"
            savings="Economia: 30-40% em tokens de prompt"
          />
          <QuickWin
            text="Especifique o escopo: 'apenas este componente' ou 'só a função login'"
            savings="Evita mudanças desnecessárias"
          />
          <QuickWin
            text="Utilize referências diretas: 'mudar linha 45' em vez de descrever o contexto"
            savings="Economia: 60-70% em tokens"
          />
        </CardContent>
      </Card>
    </div>
  );
}
