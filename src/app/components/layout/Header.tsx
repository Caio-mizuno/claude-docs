import { Gauge, TrendingDown, DollarSign, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Header() {
  return (
    <>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-8 h-8 text-purple-600" />
          <h1 className="text-4xl font-bold text-slate-900">
            Claude Code - Guia de Otimização
          </h1>
        </div>
        <p className="text-slate-600 text-lg">
          Documentação completa para maximizar performance, reduzir tokens e economizar custos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
    </>
  );
}
