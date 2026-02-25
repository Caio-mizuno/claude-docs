import { Database, ArrowRight, FileSearch, Cpu, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

function FlowStep({
  icon: Icon,
  label,
  description,
  color,
  last,
}: {
  icon: React.ElementType;
  label: string;
  description: string;
  color: string;
  last?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 flex-1 min-w-0">
      <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
        <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <p className="text-xs font-semibold text-slate-700 text-center">{label}</p>
        <p className="text-xs text-slate-500 text-center leading-tight hidden md:block">{description}</p>
      </div>
      {!last && <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0" />}
    </div>
  );
}

export function RAGOverviewSection() {
  return (
    <Card className="border-2 border-teal-300">
      <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
        <CardTitle className="flex items-center gap-2">
          <Database className="w-6 h-6 text-teal-600" />
          O que é RAG no Claude Code?
        </CardTitle>
        <CardDescription>
          Retrieval-Augmented Generation — recupere contexto relevante antes de gerar respostas
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">

        <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
          <p className="text-sm text-slate-700">
            <strong>RAG (Retrieval-Augmented Generation)</strong> é uma técnica que permite ao Claude Code
            buscar e recuperar apenas os trechos <em>mais relevantes</em> de uma base de conhecimento
            antes de gerar uma resposta — em vez de carregar arquivos inteiros como contexto.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge className="bg-teal-600 text-white">Codebase inteiro indexado</Badge>
            <Badge className="bg-cyan-600 text-white">Apenas trechos relevantes enviados</Badge>
            <Badge className="bg-green-600 text-white">Tokens drasticamente reduzidos</Badge>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Como funciona o fluxo RAG</h3>
          <div className="flex items-start gap-2 p-4 bg-slate-50 rounded-xl border">
            <FlowStep
              icon={MessageSquare}
              label="Sua pergunta"
              description="Prompt no Claude Code"
              color="bg-purple-600"
            />
            <FlowStep
              icon={Cpu}
              label="Embedding"
              description="Pergunta vira vetor"
              color="bg-blue-600"
            />
            <FlowStep
              icon={Database}
              label="Busca vetorial"
              description="Acha trechos similares"
              color="bg-teal-600"
            />
            <FlowStep
              icon={FileSearch}
              label="Top K chunks"
              description="Apenas o relevante"
              color="bg-orange-500"
            />
            <FlowStep
              icon={MessageSquare}
              label="Resposta precisa"
              description="Claude gera com contexto"
              color="bg-green-600"
              last
            />
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-3">RAG vs. Contexto Tradicional</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
              <h4 className="font-semibold text-red-900 mb-3 text-sm">❌ Sem RAG — Contexto Manual</h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="bg-white p-2 rounded border">Você menciona @src/services/payment.ts</div>
                <div className="bg-white p-2 rounded border">Claude recebe o arquivo inteiro (600 linhas)</div>
                <div className="bg-white p-2 rounded border">90% do arquivo é irrelevante para a pergunta</div>
                <div className="bg-white p-2 rounded border font-bold text-red-700">~2.400 tokens desnecessários</div>
              </div>
            </div>
            <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
              <h4 className="font-semibold text-green-900 mb-3 text-sm">✅ Com RAG — Recuperação Inteligente</h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="bg-white p-2 rounded border">Claude Code busca na base indexada</div>
                <div className="bg-white p-2 rounded border">Recupera apenas os 3-5 trechos relevantes</div>
                <div className="bg-white p-2 rounded border">Contexto cirúrgico e preciso</div>
                <div className="bg-white p-2 rounded border font-bold text-green-700">~180 tokens — 93% de economia</div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-3">RAG no Claude Code via MCP</h3>
          <p className="text-sm text-slate-600 mb-3">
            O Claude Code usa o <strong>MCP (Model Context Protocol)</strong> como camada de integração.
            Qualquer servidor MCP que implemente busca e recuperação de documentos atua como um pipeline RAG nativo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                name: "Chroma MCP",
                type: "Local",
                description: "Vector store local, sem custo. Ideal para projetos pessoais e times pequenos.",
                color: "bg-purple-50 border-purple-200 text-purple-800",
              },
              {
                name: "Pinecone MCP",
                type: "Cloud",
                description: "Vector store gerenciado na nuvem. Escala para grandes bases de conhecimento.",
                color: "bg-blue-50 border-blue-200 text-blue-800",
              },
              {
                name: "Filesystem MCP",
                type: "Nativo",
                description: "Servidor MCP oficial. Busca em arquivos locais sem indexação vetorial.",
                color: "bg-teal-50 border-teal-200 text-teal-800",
              },
            ].map(({ name, type, description, color }) => (
              <div key={name} className={`p-3 rounded-lg border ${color}`}>
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-sm">{name}</p>
                  <Badge variant="outline" className="text-xs">{type}</Badge>
                </div>
                <p className="text-xs">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
