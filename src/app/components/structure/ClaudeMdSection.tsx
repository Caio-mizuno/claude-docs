import { FileCode } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { BenefitItem } from "./shared";

export function ClaudeMdSection() {
  return (
    <Card className="border-2 border-purple-300">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
        <CardTitle className="flex items-center gap-2">
          <FileCode className="w-6 h-6 text-purple-600" />
          CLAUDE.md - Documentação do Projeto
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2">O que é?</h3>
          <p className="text-slate-700 mb-3">
            Um arquivo na raiz do projeto que serve como "manual de instruções" permanente para o Claude.
            Ele lê este arquivo automaticamente e usa como contexto base para todas as interações.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold text-lg mb-2">Por que usar?</h3>
          <div className="space-y-2">
            <BenefitItem
              icon="🎯"
              title="Contexto Automático"
              description="Você não precisa repetir informações sobre o projeto em cada conversa"
            />
            <BenefitItem
              icon="📋"
              title="Padrões Consistentes"
              description="Claude segue suas convenções de código automaticamente"
            />
            <BenefitItem
              icon="⚡"
              title="Respostas Mais Rápidas"
              description="Claude já sabe a arquitetura, não precisa adivinhar"
            />
            <BenefitItem
              icon="💰"
              title="Economia Massiva"
              description="Evita repetir o mesmo contexto em múltiplas mensagens"
            />
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold text-lg mb-2">O que incluir no CLAUDE.md?</h3>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-3">
            <div className="text-white font-bold"># CLAUDE.md</div>
            <div className="text-slate-400">## Visão Geral do Projeto</div>
            <div>- Nome e descrição breve</div>
            <div>- Stack principal (React, TypeScript, etc.)</div>
            <div>- Propósito da aplicação</div>
            <div className="text-slate-400 mt-3">## Estrutura de Pastas</div>
            <div>/src/components - Componentes reutilizáveis</div>
            <div>/src/pages - Páginas da aplicação</div>
            <div>/src/utils - Funções utilitárias</div>
            <div className="text-slate-400 mt-3">## Convenções de Código</div>
            <div>- Usar functional components</div>
            <div>- Props sempre tipadas</div>
            <div>- Tailwind para estilos</div>
            <div className="text-slate-400 mt-3">## Regras Importantes</div>
            <div>- Não modificar arquivos em /legacy</div>
            <div>- Sempre adicionar testes para novas features</div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-2">💡 Resultado Prático:</h4>
          <p className="text-sm text-slate-700">
            Ao invés de: <em>"Crie um componente usando React functional component com TypeScript e Tailwind..."</em>
          </p>
          <p className="text-sm text-slate-700 mt-2">
            Você escreve: <strong>"Crie um componente Button"</strong>
          </p>
          <Badge className="mt-2 bg-green-600 text-white">Claude já sabe o resto!</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
