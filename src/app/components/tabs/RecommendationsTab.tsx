import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { CheckCircle2, Sparkles } from "lucide-react";

export function RecommendationsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Recomendações Atuais</h1>
        <p className="text-slate-600 leading-relaxed">
          Configurações e workflows recomendados para máxima performance e economia com Claude Code.
        </p>
      </div>

      <Separator />

      {/* Destaque - Setup Recomendado */}
      <Card className="border-purple-200 bg-purple-50/50 pb-5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <CardTitle className="text-lg">Workflow Otimizado 2026</CardTitle>
          </div>
          <CardDescription>
            Stack completo de plugins + prompt especializado para desenvolvimento de alta qualidade
          </CardDescription>
        </CardHeader>
      </Card>

      <Accordion type="single" collapsible className="space-y-3">
        {/* Claude Code Workflow */}
        <AccordionItem value="claude-code-workflow" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Claude Code — Workflow Completo</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Setup otimizado: plugins essenciais + prompt especializado para tarefas complexas
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">Recomendado</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-5">
            {/* Etapa 1: Instalação de Plugins */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-900">Etapa 1: Instalar Plugins Essenciais</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Instale os 4 plugins fundamentais para otimização máxima:
              </p>
              <div className="bg-slate-900 rounded-lg p-4 space-y-2">
                <div className="text-xs text-slate-400 mb-2"># Claude-Mem (memória persistente)</div>
                <code className="text-sm text-green-400 block">npx claude-mem install</code>

                <div className="text-xs text-slate-400 mt-4 mb-2"># RTK (60-90% economia de tokens)</div>
                <code className="text-sm text-green-400 block">brew install rtk</code>

                <div className="text-xs text-slate-400 mt-4 mb-2"># Caveman (75% redução output)</div>
                <code className="text-sm text-green-400 block">claude plugin marketplace add JuliusBrussee/caveman</code>
                <code className="text-sm text-green-400 block">claude plugin install caveman@caveman</code>

                <div className="text-xs text-slate-400 mt-4 mb-2"># CodeRabbit (code review IA)</div>
                <code className="text-sm text-green-400 block">curl -fsSL https://cli.coderabbit.ai/install.sh | sh</code>
                <code className="text-sm text-green-400 block">coderabbit auth login</code>
                <code className="text-sm text-green-400 block">claude plugin marketplace update</code>
                <code className="text-sm text-green-400 block">claude plugin install coderabbit</code>
              </div>
            </div>

            {/* Etapa 2: Criar arquivo de instruções */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-900">Etapa 2: Criar Arquivo de Instruções</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Crie um arquivo <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">task.md</code> na raiz do projeto com descrição detalhada da tarefa:
              </p>
              <div className="bg-slate-900 rounded-lg p-4">
                <div className="text-xs text-slate-400 mb-2"># Exemplo: task.md</div>
                <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto">
{`# Tarefa: [Título da Feature/Bug]

## Objetivo
Descrição clara do que precisa ser implementado/corrigido

## Requisitos
- Requisito 1
- Requisito 2
- Requisito 3

## Contexto Técnico
- Stack: [tecnologias usadas]
- Arquivos principais: [lista de arquivos]
- Dependências: [libs/APIs relevantes]

## Critérios de Aceite
- [ ] Critério 1
- [ ] Critério 2
- [ ] Critério 3

## Observações
Qualquer detalhe adicional importante`}
                </pre>
              </div>
            </div>

            {/* Etapa 3: Abrir Claude Code */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-900">Etapa 3: Iniciar Claude Code</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Abra Claude Code no diretório do projeto:
              </p>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-sm text-green-400 block">cd /caminho/do/projeto</code>
                <code className="text-sm text-green-400 block mt-2">claude</code>
              </div>
            </div>

            {/* Etapa 4: Prompt Especializado */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-slate-900">Etapa 4: Executar Prompt Especializado</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Copie e cole o prompt otimizado, ajustando o caminho do arquivo:
              </p>
              <div className="bg-slate-900 rounded-lg p-4 relative">
                <pre className="text-sm text-green-400 leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`/caveman ultra
use caveman ultra
@task.md siga estas instruções utilizando agentes e skills
- crie um plano de ação especializado
- seja detalhista nas estruturas e variáveis
- refatore buscando performance e segurança
- codereview com agentes e resolva todos os pontos encontrados`}
                </pre>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                💡 Substitua <code className="bg-slate-100 px-1 rounded">@task.md</code> pelo caminho real do seu arquivo de instruções
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100">
              <h5 className="font-semibold text-slate-900 mb-3 text-sm">Por que este workflow?</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">✓</span>
                  <span className="text-slate-700">
                    <strong>Claude-Mem</strong> mantém contexto entre sessões, reduz re-explicação
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">✓</span>
                  <span className="text-slate-700">
                    <strong>RTK</strong> filtra outputs de CLI, economiza 60-90% tokens em comandos
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">✓</span>
                  <span className="text-slate-700">
                    <strong>Caveman Ultra</strong> modo máxima compressão, respostas telegráficas (75% economia)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">✓</span>
                  <span className="text-slate-700">
                    <strong>CodeRabbit</strong> review automático com IA, detecta bugs antes commit
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">✓</span>
                  <span className="text-slate-700">
                    <strong>Agentes + Skills</strong> paralelo, divide trabalho complexo em subtasks especializadas
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">✓</span>
                  <span className="text-slate-700">
                    <strong>Plano especializado</strong> Claude pensa antes de agir, evita retrabalho
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">✓</span>
                  <span className="text-slate-700">
                    <strong>Refactor + Security</strong> qualidade de código desde início, não depois
                  </span>
                </div>
              </div>
            </div>

            {/* Dicas Extras */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h5 className="font-semibold text-slate-900 mb-2 text-sm">Dicas Pro</h5>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Use <code className="bg-white px-1 rounded">/reload-plugins</code> após instalar plugins pra ativar sem restart</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Rode <code className="bg-white px-1 rounded">rtk gain</code> periodicamente pra ver economia de tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Acesse localhost:37777 pra ver memory stream do Claude-Mem em real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Use <code className="bg-white px-1 rounded">/coderabbit:review --base main</code> antes de abrir PR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Adicione <code className="bg-white px-1 rounded">CLAUDE.md</code> no projeto com padrões de código e arquitetura</span>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Card de Resultados Esperados */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-base text-green-900">Resultados Esperados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-green-800">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Economia de <strong>70-85%</strong> em custos de tokens</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Respostas <strong>3x mais rápidas</strong> com Caveman Ultra</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Contexto persistente, <strong>zero retrabalho</strong> entre sessões</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Code review automático detecta <strong>bugs antes commit</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Qualidade de código <strong>production-ready</strong> desde primeira iteração</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
