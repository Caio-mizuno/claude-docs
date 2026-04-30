import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { ExternalLink, Zap, MessageSquare, Shield, Wrench, GitBranch, FileSearch, Rabbit, Brain, Gauge, Code2, Layers, FileText, Globe, ShieldCheck, RotateCw, Palette, Users, Download, Eye, Github } from "lucide-react";

export function PluginsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Plugins Claude Code</h1>
        <p className="text-slate-600 leading-relaxed">
          Extensões que otimizam performance, reduzem custos e expandem as capacidades do Claude Code.
        </p>
      </div>

      <Separator />

      {/* Destaque - Plugins de Otimização */}
      <Card className="border-purple-200 bg-purple-50/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600" />
            <CardTitle className="text-lg">Plugins de Otimização Essenciais</CardTitle>
          </div>
          <CardDescription>
            Economize até 90% em tokens e reduza drasticamente seus custos com IA
          </CardDescription>
        </CardHeader>
      </Card>

      <Accordion type="single" collapsible className="space-y-3">
        {/* RTK - Rust Token Killer */}
        <AccordionItem value="rtk" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Zap className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">RTK — Rust Token Killer</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  CLI proxy de alta performance que reduz 60-90% dos tokens em operações de desenvolvimento
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">60-90% economia</Badge>
              <Badge variant="default" className="ml-2 bg-green-600 text-white">recomendado</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                RTK é um proxy CLI escrito em Rust que filtra e resume automaticamente outputs de sistema antes de chegarem
                ao contexto do LLM. Suporta mais de 30 comandos otimizados (git, npm, docker, aws, etc).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="bg-slate-900 rounded-lg p-4 space-y-2">
                <div className="text-xs text-slate-400 mb-2"># Via Homebrew (recomendado)</div>
                <code className="text-sm text-green-400 block">brew install rtk</code>

                <div className="text-xs text-slate-400 mt-4 mb-2"># Verificar instalação</div>
                <code className="text-sm text-green-400 block">rtk --version</code>
                <code className="text-sm text-green-400 block">rtk gain</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Como Usar</h4>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-sm font-medium text-slate-900 mb-1">Uso Automático (via Hook)</p>
                  <p className="text-xs text-slate-600">
                    Comandos são automaticamente reescritos: <code className="bg-white px-1 py-0.5 rounded">git status</code> → <code className="bg-white px-1 py-0.5 rounded">rtk git status</code>
                  </p>
                </div>

                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-sm font-medium text-slate-900 mb-2">Comandos Meta</p>
                  <div className="space-y-1 text-xs">
                    <div><code className="bg-white px-1.5 py-0.5 rounded">rtk gain</code> — Analytics de economia</div>
                    <div><code className="bg-white px-1.5 py-0.5 rounded">rtk gain --history</code> — Histórico de uso</div>
                    <div><code className="bg-white px-1.5 py-0.5 rounded">rtk discover</code> — Oportunidades perdidas</div>
                    <div><code className="bg-white px-1.5 py-0.5 rounded">rtk proxy &lt;cmd&gt;</code> — Executar sem filtro</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/psyto/rtk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub Repository
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="https://brew.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Instalar Homebrew
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Caveman */}
        <AccordionItem value="caveman" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <MessageSquare className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Caveman</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Modo de output comprimido que reduz ~75% dos tokens de saída mantendo precisão técnica
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">~75% economia</Badge>
              <Badge variant="default" className="ml-2 bg-green-600 text-white">recomendado</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin que faz Claude falar como "homem das cavernas" — remove artigos, palavras de preenchimento e
                formalidades desnecessárias. Resposta mais rápida, mais fácil de ler, mesma precisão técnica.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="bg-slate-900 rounded-lg p-4 space-y-2">
                <div className="text-xs text-slate-400 mb-2"># Instalar via plugin marketplace</div>
                <code className="text-sm text-green-400 block">claude plugin marketplace add JuliusBrussee/caveman</code>
                <code className="text-sm text-green-400 block">claude plugin install caveman@caveman</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Modos de Intensidade</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3 text-sm">
                  <Badge variant="outline" className="mt-0.5 flex-shrink-0">Lite</Badge>
                  <p className="text-slate-600">Remove fluff, mantém gramática. Profissional sem formalidade excessiva</p>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Badge variant="outline" className="mt-0.5 flex-shrink-0">Full</Badge>
                  <p className="text-slate-600">Modo caveman padrão. Remove artigos, usa fragmentos, máximo grunt</p>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Badge variant="outline" className="mt-0.5 flex-shrink-0">Ultra</Badge>
                  <p className="text-slate-600">Compressão máxima. Telegráfico. Abrevia tudo possível</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Comandos</h4>
              <div className="bg-slate-50 rounded p-3 border border-slate-200 space-y-1 text-xs">
                <div><code className="bg-white px-1.5 py-0.5 rounded">/caveman</code> — Ativar modo caveman</div>
                <div><code className="bg-white px-1.5 py-0.5 rounded">/caveman lite|full|ultra</code> — Mudar intensidade</div>
                <div><code className="bg-white px-1.5 py-0.5 rounded">/caveman-commit</code> — Mensagens de commit tersas</div>
                <div><code className="bg-white px-1.5 py-0.5 rounded">/caveman-review</code> — Code review de uma linha</div>
                <div><code className="bg-white px-1.5 py-0.5 rounded">/caveman:compress &lt;file&gt;</code> — Comprimir CLAUDE.md</div>
                <div className="pt-1 text-slate-500">Desativar: "stop caveman" ou "normal mode"</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/JuliusBrussee/caveman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub Repository
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="https://arxiv.org/abs/2604.00025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Paper: Brevity Constraints
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Code Review */}
        <AccordionItem value="code-review" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <FileSearch className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Code Review</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Agentes especializados para code review automatizado com scoring por confiança
                </div>
              </div>
              <Badge variant="outline" className="ml-2">Oficial</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin oficial que roda 5 agentes especializados em paralelo para revisar PRs: arquitetura, segurança,
                performance, estilo e testes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-sm text-green-400 block">claude plugin install code-review@claude-plugins-official</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Como Usar</h4>
              <div className="bg-slate-50 rounded p-3 border border-slate-200">
                <code className="text-sm block mb-2">/code-review</code>
                <p className="text-xs text-slate-600">Executa review completo do PR com 5 agentes em paralelo</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/anthropics/claude-code/tree/main/plugins/code-review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Documentação Oficial
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Feature Dev */}
        <AccordionItem value="feature-dev" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Wrench className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Feature Dev</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Workflow completo de 7 fases para desenvolvimento de features
                </div>
              </div>
              <Badge variant="outline" className="ml-2">Oficial</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin que guia o desenvolvimento de features através de 7 fases: exploração, arquitetura,
                planejamento, implementação, testes, review e documentação.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-sm text-green-400 block">claude plugin install feature-dev@claude-plugins-official</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Como Usar</h4>
              <div className="bg-slate-50 rounded p-3 border border-slate-200">
                <code className="text-sm block mb-2">/feature-dev "descrição da feature"</code>
                <p className="text-xs text-slate-600">Inicia workflow completo com agentes especializados</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/anthropics/claude-code/tree/main/plugins/feature-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Documentação Oficial
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Hookify */}
        <AccordionItem value="hookify" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Shield className="w-5 h-5 text-red-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Hookify</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Crie hooks customizados para prevenir comportamentos indesejados
                </div>
              </div>
              <Badge variant="outline" className="ml-2">Oficial</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Analisa conversas e cria hooks automaticamente para prevenir comportamentos que você não quer que
                Claude repita (ex: commits sem testes, código sem documentação, etc).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-sm text-green-400 block">claude plugin install hookify@claude-plugins-official</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Como Usar</h4>
              <div className="bg-slate-50 rounded p-3 border border-slate-200 space-y-1 text-xs">
                <div><code className="bg-white px-1.5 py-0.5 rounded">/hookify</code> — Analisar conversa e sugerir hooks</div>
                <div><code className="bg-white px-1.5 py-0.5 rounded">/hookify install</code> — Instalar hooks sugeridos</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/anthropics/claude-code/tree/main/plugins/hookify"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Documentação Oficial
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Commit Commands */}
        <AccordionItem value="commit-commands" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <GitBranch className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Commit Commands</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Automação de workflows Git com commits inteligentes
                </div>
              </div>
              <Badge variant="outline" className="ml-2">Oficial</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Comandos que automatizam fluxos Git comuns: commits com mensagens inteligentes, commit + push + PR
                em um comando, limpeza de branches merged.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-sm text-green-400 block">claude plugin install commit-commands@claude-plugins-official</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Comandos</h4>
              <div className="bg-slate-50 rounded p-3 border border-slate-200 space-y-1 text-xs">
                <div><code className="bg-white px-1.5 py-0.5 rounded">/commit</code> — Commit com mensagem inteligente</div>
                <div><code className="bg-white px-1.5 py-0.5 rounded">/commit-push-pr</code> — Commit + push + abrir PR</div>
                <div><code className="bg-white px-1.5 py-0.5 rounded">/clean_gone</code> — Limpar branches já merged</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/anthropics/claude-code/tree/main/plugins/commit-commands"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Documentação Oficial
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* CodeRabbit */}
        <AccordionItem value="coderabbit" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Rabbit className="w-5 h-5 text-indigo-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">CodeRabbit</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Code review com IA, análise detalhada por severidade
                </div>
              </div>
              <Badge variant="outline" className="ml-2">Oficial</Badge>
              <Badge variant="default" className="ml-2 bg-green-600 text-white">recomendado</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin que integra CodeRabbit AI no Claude Code. Analisa código com insights detalhados,
                agrupa por severidade (critical/high/medium/low), detecta bugs, vulnerabilidades e code smells.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-sm font-medium text-slate-900 mb-2">Passo 1: Instalar CodeRabbit CLI</p>
                  <div className="bg-slate-900 rounded p-3 space-y-1">
                    <code className="text-xs text-green-400 block">curl -fsSL https://cli.coderabbit.ai/install.sh | sh</code>
                    <code className="text-xs text-green-400 block">coderabbit auth login</code>
                  </div>
                </div>

                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-sm font-medium text-slate-900 mb-2">Passo 2: Instalar Plugin</p>
                  <div className="bg-slate-900 rounded p-3 space-y-1">
                    <code className="text-xs text-green-400 block">claude plugin marketplace update</code>
                    <code className="text-xs text-green-400 block">claude plugin install coderabbit</code>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Como Usar</h4>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-sm font-medium text-slate-900 mb-2">Via Comando</p>
                  <div className="space-y-1 text-xs">
                    <div><code className="bg-white px-1.5 py-0.5 rounded">/coderabbit:review</code> — Review all changes</div>
                    <div><code className="bg-white px-1.5 py-0.5 rounded">/coderabbit:review committed</code> — Só committed</div>
                    <div><code className="bg-white px-1.5 py-0.5 rounded">/coderabbit:review uncommitted</code> — Só uncommitted</div>
                    <div><code className="bg-white px-1.5 py-0.5 rounded">/coderabbit:review --base main</code> — Comparar com main</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-sm font-medium text-slate-900 mb-1">Via Linguagem Natural</p>
                  <p className="text-xs text-slate-600">
                    "Review my code" / "Check for security issues" / "What's wrong with my changes?"
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Vídeo Tutorial</h4>
              <div className="bg-slate-50 rounded p-3 border border-slate-200">
                <a
                  href="https://www.reddit.com/r/coderabbit/comments/1qut14s/how_to_use_coderabbit_in_claude_code/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-700 hover:text-purple-800 font-medium flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  How to use CodeRabbit in Claude Code (Reddit)
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://coderabbit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                CodeRabbit Website
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="https://docs.coderabbit.ai/cli/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                CLI Documentation
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="https://github.com/coderabbitai/skills"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub Skills
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Claude-Mem */}
        <AccordionItem value="claude-mem" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Brain className="w-5 h-5 text-teal-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Claude-Mem</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Sistema de memória persistente que captura e comprime contexto automaticamente
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">Persistência</Badge>
              <Badge variant="default" className="ml-2 bg-green-600 text-white">recomendado</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Captura automaticamente tudo que Claude faz durante sessões, comprime com IA (Agent SDK),
                e injeta contexto relevante em sessões futuras. Usa SQLite + Chroma vector DB pra busca híbrida.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="bg-slate-900 rounded-lg p-4 space-y-2">
                <div className="text-xs text-slate-400 mb-2"># Install rápido</div>
                <code className="text-sm text-green-400 block">npx claude-mem install</code>

                <div className="text-xs text-slate-400 mt-4 mb-2"># Via marketplace</div>
                <code className="text-sm text-green-400 block">/plugin marketplace add thedotmack/claude-mem</code>
                <code className="text-sm text-green-400 block">/plugin install claude-mem</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Features</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Memória Persistente</strong> — Contexto sobrevive reinícios</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Progressive Disclosure</strong> — Retrieval em camadas com custo token</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Web Viewer</strong> — UI real-time em localhost:37777</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Privacy Control</strong> — Tag <code className="bg-slate-100 px-1 rounded">&lt;private&gt;</code> exclui conteúdo sensível</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Citations</strong> — Referência observações passadas por ID</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">MCP Search Tools</h4>
              <div className="bg-slate-50 rounded p-3 border border-slate-200 space-y-1 text-xs">
                <div><code className="bg-white px-1.5 py-0.5 rounded">search</code> — Query memory (~50-100 tokens/result)</div>
                <div><code className="bg-white px-1.5 py-0.5 rounded">timeline</code> — Contexto cronológico</div>
                <div><code className="bg-white px-1.5 py-0.5 rounded">get_observations</code> — Fetch por IDs</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/thedotmack/claude-mem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Claude HUD */}
        <AccordionItem value="claude-hud" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Gauge className="w-5 h-5 text-cyan-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Claude HUD</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Display real-time de métricas na statusline: contexto, tools, agents, todos
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">Monitoring</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin que mostra métricas de sessão direto na statusline do terminal. Contexto usado,
                ferramentas ativas, subagents rodando, progresso de todos — sem janela separada.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="bg-slate-900 rounded-lg p-4 space-y-1">
                <code className="text-sm text-green-400 block">/plugin marketplace add jarrodwatts/claude-hud</code>
                <code className="text-sm text-green-400 block">/plugin install claude-hud</code>
                <code className="text-sm text-green-400 block">/claude-hud:setup</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Métricas Exibidas</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Context Health</strong> — Barra visual + % + token usage</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Tool Activity</strong> — Reads, edits, grep operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Agent Tracking</strong> — Subagents rodando + tasks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Todo Progress</strong> — Task completion real-time</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Git Info</strong> — Branch, dirty status, ahead/behind</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span className="text-slate-600"><strong>Rate Limits</strong> — Subscriber usage consumption</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Configuração</h4>
              <div className="bg-slate-50 rounded p-3 border border-slate-200">
                <code className="text-sm block mb-1">/claude-hud:configure</code>
                <p className="text-xs text-slate-600">
                  Presets (Full/Essential/Minimal) ou edição manual. 30+ opções configuráveis.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/jarrodwatts/claude-hud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Superpowers Framework */}
        <AccordionItem value="superpowers" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Layers className="w-5 h-5 text-violet-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Superpowers Framework</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Framework estruturado: planejamento, TDD, debugging, code review, lifecycle completo
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">Mais instalado</Badge>
              <Badge variant="default" className="ml-2 bg-green-600 text-white">recomendado</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Metodologia completa de desenvolvimento de software. Não começa escrevendo código — faz brainstorming,
                valida design, cria plano detalhado e então executa com subagentes em modo TDD rigoroso (RED-GREEN-REFACTOR).
                Workflows automáticos, não sugestões.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Como Funciona</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p>1. <strong>Brainstorming</strong> — Extrai informação específica antes de qualquer código</p>
                <p>2. <strong>Design em blocos curtos</strong> — Valida projeto em seções legíveis</p>
                <p>3. <strong>Plano de implementação claro</strong> — TDD vermelho/verde, YAGNI, DRY</p>
                <p>4. <strong>Execução com subagentes</strong> — Agentes executam tarefas com inspeção e review</p>
                <p>5. <strong>Autonomia por horas</strong> — Segue plano sem desviar</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Instalação</h4>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-sm font-medium text-slate-900 mb-2">Claude Code (Marketplace Oficial)</p>
                  <div className="bg-slate-900 rounded p-2">
                    <code className="text-xs text-green-400 block">/plugin install superpowers@claude-plugins-official</code>
                  </div>
                </div>

                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-sm font-medium text-slate-900 mb-2">Superpowers Marketplace (alternativo)</p>
                  <div className="bg-slate-900 rounded p-2 space-y-1">
                    <code className="text-xs text-green-400 block">/plugin marketplace add obra/superpowers-marketplace</code>
                    <code className="text-xs text-green-400 block">/plugin install superpowers@superpowers-marketplace</code>
                  </div>
                </div>

                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-sm font-medium text-slate-900 mb-2">Cursor</p>
                  <div className="bg-slate-900 rounded p-2">
                    <code className="text-xs text-green-400 block">/add-plugin superpowers</code>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Ou busque "superpowers" na plugin store</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Fluxo de Trabalho (Skills)</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-white rounded p-2 border border-slate-200">
                  <p className="font-semibold text-slate-900">brainstorming</p>
                  <p className="text-slate-600">Ativa antes de código. Refina ideias, explora alternativas, valida design em seções</p>
                </div>
                <div className="bg-white rounded p-2 border border-slate-200">
                  <p className="font-semibold text-slate-900">using-git-worktrees</p>
                  <p className="text-slate-600">Cria workspace isolado em branch novo, setup, verifica baseline de testes</p>
                </div>
                <div className="bg-white rounded p-2 border border-slate-200">
                  <p className="font-semibold text-slate-900">writing-plans</p>
                  <p className="text-slate-600">Divide trabalho em tarefas 2-5 min. Paths exatos, código completo, verificação</p>
                </div>
                <div className="bg-white rounded p-2 border border-slate-200">
                  <p className="font-semibold text-slate-900">subagent-driven-development</p>
                  <p className="text-slate-600">Um subagente por tarefa. Review em 2 etapas: spec compliance + code quality</p>
                </div>
                <div className="bg-white rounded p-2 border border-slate-200">
                  <p className="font-semibold text-slate-900">test-driven-development</p>
                  <p className="text-slate-600">TDD rigoroso: RED (teste falha) → GREEN (mínimo código) → REFACTOR → commit</p>
                </div>
                <div className="bg-white rounded p-2 border border-slate-200">
                  <p className="font-semibold text-slate-900">code-review-request</p>
                  <p className="text-slate-600">Analisa código vs plano. Reporta por severidade. Issues críticos bloqueiam</p>
                </div>
                <div className="bg-white rounded p-2 border border-slate-200">
                  <p className="font-semibold text-slate-900">finishing-a-development-branch</p>
                  <p className="text-slate-600">Verifica testes, opções (merge/PR/keep/discard), cleanup worktree</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/obra/superpowers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Context7 */}
        <AccordionItem value="context7" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <FileText className="w-5 h-5 text-sky-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Context7</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Injeta documentação atualizada e contexto em tempo real no Claude
                </div>
              </div>
              <Badge variant="outline" className="ml-2">Oficial</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin oficial MCP citado como essencial. Mantém Claude atualizado com docs de bibliotecas,
                frameworks e APIs em tempo real. Reduz alucinações sobre sintaxe e APIs.
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4">
              <code className="text-sm text-green-400 block">claude plugin install context7@claude-plugins-official</code>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Playwright */}
        <AccordionItem value="playwright" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Globe className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Playwright</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Controla navegador (Chrome) via comandos em linguagem natural
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">MCP</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Servidor MCP altamente usado pra automação web. Claude controla Chrome/Firefox via Playwright:
                navegar, clicar, preencher forms, scraping, testes E2E — tudo em linguagem natural.
              </p>
            </div>
            <div className="bg-slate-50 rounded p-3 border border-slate-200">
              <p className="text-xs text-slate-600">
                Instale Playwright localmente e configure como MCP server no settings.json
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Security Guidance */}
        <AccordionItem value="security-guidance" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-red-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Security Guidance</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Analisa edições de código em busca de vulnerabilidades e bloqueia mudanças perigosas
                </div>
              </div>
              <Badge variant="outline" className="ml-2">Oficial</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin oficial considerado must-have pra segurança. Hook PreToolUse monitora 9 security patterns
                (SQL injection, XSS, command injection, hardcoded secrets, etc) e bloqueia edits perigosos.
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4">
              <code className="text-sm text-green-400 block">claude plugin install security-guidance@claude-plugins-official</code>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Ralph Loop */}
        <AccordionItem value="ralph-loop" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <RotateCw className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Ralph Loop (Ralph Wiggum)</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Loops autônomos de agente pra long-running tasks
                </div>
              </div>
              <Badge variant="outline" className="ml-2">Oficial</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin oficial pra tarefas complexas e iterativas. Implementa loops autônomos onde agente
                roda, avalia resultado, ajusta approach, repete até convergir. Bom pra refactoring grande, debugging difícil.
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 space-y-1">
              <code className="text-sm text-green-400 block">claude plugin install ralph-loop@claude-plugins-official</code>
              <code className="text-sm text-green-400 block mt-2">/ralph-loop "task description"</code>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Frontend Design */}
        <AccordionItem value="frontend-design" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Palette className="w-5 h-5 text-pink-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Frontend Design</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Gera UIs mais profissionais e bem desenhadas, evita estética genérica de IA
                </div>
              </div>
              <Badge variant="outline" className="ml-2">Oficial</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin oficial popular entre devs frontend. Skill que guia Claude pra criar interfaces com
                design profissional: hierarquia visual, espaçamento consistente, cores acessíveis, evita clichês de IA.
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4">
              <code className="text-sm text-green-400 block">claude plugin install frontend-design@claude-plugins-official</code>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* gstack */}
        <AccordionItem value="gstack" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">gstack</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Slash commands que simulam time inteiro de startup: PM, designer, dev, QA
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">Plugin</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugin que ganhou muita tração rapidamente. Conjunto de comandos que simulam papéis de startup:
                product manager, designer, desenvolvedor, QA. Workflow coordenado de ponta a ponta.
              </p>
            </div>
            <div className="bg-slate-50 rounded p-3 border border-slate-200">
              <p className="text-xs text-slate-600">
                Busque "gstack claude code plugin" no GitHub pra instalação e comandos disponíveis.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Firecrawl */}
        <AccordionItem value="firecrawl" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Download className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Firecrawl</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Scraping e contexto web rápido e confiável pra pesquisa
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">MCP</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Servidor MCP útil pra pesquisa e dados externos. Scraping web com Firecrawl API: extrai conteúdo
                limpo de sites, converte pra markdown, crawl páginas múltiplas. Mais rápido e confiável que scraping manual.
              </p>
            </div>
            <div className="bg-slate-50 rounded p-3 border border-slate-200">
              <p className="text-xs text-slate-600">
                Requer API key do Firecrawl. Configure como MCP server no settings.json
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Local-Review */}
        <AccordionItem value="local-review" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Eye className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Local-Review</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Code review local em paralelo (múltiplos agentes) antes do commit
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">Plugin</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Substituto local pra code reviews. Spawn múltiplos agentes em paralelo que analisam diff antes de commit:
                bugs, performance, security, style, tests. Bom pra catch issues cedo.
              </p>
            </div>
            <div className="bg-slate-50 rounded p-3 border border-slate-200">
              <p className="text-xs text-slate-600">
                Busque "local-review claude code" pra instalação e uso.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* GitHub MCP Server */}
        <AccordionItem value="github-mcp" className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-3 text-left">
              <Github className="w-5 h-5 text-slate-900 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">GitHub MCP Server</div>
                <div className="text-sm text-slate-600 mt-0.5">
                  Integração profunda com GitHub: issues, PRs, repos, actions
                </div>
              </div>
              <Badge variant="secondary" className="ml-2">MCP</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">O que é</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Servidor MCP essencial pra workflows com GitHub. Claude lê/cria/atualiza issues e PRs, lista repos,
                busca código, monitora Actions, comenta em discussions — tudo via API do GitHub.
              </p>
            </div>
            <div className="bg-slate-50 rounded p-3 border border-slate-200">
              <p className="text-xs text-slate-600">
                Requer GitHub token. Configure como MCP server no settings.json com permissões apropriadas.
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <a
                href="https://github.com/modelcontextprotocol/servers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                MCP Servers Repository
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Code Intelligence (LSP) */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Code Intelligence (LSP)</h2>
        <p className="text-sm text-slate-600 mb-4">
          Plugins LSP habilitam diagnostics automáticos, jump-to-definition, find references.
          Requerem language server instalado no sistema.
        </p>

        <Card className="bg-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-slate-600" />
              <CardTitle className="text-base">Plugins LSP Oficiais</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">Python</Badge>
                <div>
                  <code className="text-xs">pyright-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: pyright-langserver</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">TypeScript</Badge>
                <div>
                  <code className="text-xs">typescript-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: typescript-language-server</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">Rust</Badge>
                <div>
                  <code className="text-xs">rust-analyzer-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: rust-analyzer</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">Go</Badge>
                <div>
                  <code className="text-xs">gopls-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: gopls</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">C/C++</Badge>
                <div>
                  <code className="text-xs">clangd-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: clangd</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">Java</Badge>
                <div>
                  <code className="text-xs">jdtls-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: jdtls</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">PHP</Badge>
                <div>
                  <code className="text-xs">php-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: intelephense</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">C#</Badge>
                <div>
                  <code className="text-xs">csharp-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: csharp-ls</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">Swift</Badge>
                <div>
                  <code className="text-xs">swift-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: sourcekit-lsp</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5 flex-shrink-0">Kotlin</Badge>
                <div>
                  <code className="text-xs">kotlin-lsp</code>
                  <p className="text-xs text-slate-500 mt-0.5">Requer: kotlin-language-server</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-slate-500">
              Install: <code className="bg-slate-100 px-1.5 py-0.5 rounded">/plugin install &lt;plugin&gt;@claude-plugins-official</code>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Links Úteis */}
      <Card className="bg-slate-50 border-slate-200">
        <CardHeader>
          <CardTitle className="text-base">Links Úteis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <a
            href="https://github.com/anthropics/claude-code/tree/main/plugins"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-700 hover:text-purple-800"
          >
            <ExternalLink className="w-4 h-4" />
            Todos os Plugins Oficiais
          </a>
          <a
            href="https://code.claude.com/docs/en/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-700 hover:text-purple-800"
          >
            <ExternalLink className="w-4 h-4" />
            Documentação Claude Code
          </a>
          <a
            href="https://www.youtube.com/results?search_query=claude+code+plugins"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-700 hover:text-purple-800"
          >
            <ExternalLink className="w-4 h-4" />
            Vídeos sobre Plugins (YouTube)
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
