import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function Footer() {
  return (
    <Card className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white border-slate-700">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-1">Resumo Executivo</h3>
            <p className="text-slate-300 text-sm">
              Seguindo estas práticas, você pode reduzir custos em até 70% e melhorar a performance em 85%
            </p>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <span className="text-2xl font-bold">$$$</span>
            <ArrowRight className="w-6 h-6" />
            <span className="text-2xl font-bold">$</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
