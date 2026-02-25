import { Brain, Star, ThumbsUp, Circle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

interface ProConProps {
  items: string[];
  type: "pro" | "con";
}

function ProConList({ items, type }: ProConProps) {
  const color = type === "pro" ? "text-green-700" : "text-red-700";
  const dot = type === "pro" ? "bg-green-500" : "bg-red-500";
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2 text-xs ${color}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dot} mt-1.5 flex-shrink-0`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

interface ModelRec {
  name: string;
  provider: string;
  providerColor: string;
  tier: "top" | "good" | "alt";
  reason: string;
}

const tierConfig = {
  top: {
    label: "Top Pick",
    icon: Star,
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    badge: "bg-yellow-500",
    icon_color: "text-yellow-500",
  },
  good: {
    label: "Recomendado",
    icon: ThumbsUp,
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-500",
    icon_color: "text-blue-500",
  },
  alt: {
    label: "Alternativa",
    icon: Circle,
    bg: "bg-slate-50",
    border: "border-slate-200",
    badge: "bg-slate-400",
    icon_color: "text-slate-400",
  },
};

function ModelsCard({ models }: { models: ModelRec[] }) {
  return (
    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
      <p className="text-xs font-semibold text-slate-700 mb-3 flex items-center gap-1.5">
        <span className="w-3.5 h-3.5 rounded bg-slate-700 inline-flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">AI</span>
        </span>
        Modelos mais indicados para essa técnica
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {models.map((model) => {
          const tier = tierConfig[model.tier];
          const TierIcon = tier.icon;
          return (
            <div
              key={model.name}
              className={`flex items-start gap-2.5 p-2.5 rounded-lg border ${tier.bg} ${tier.border}`}
            >
              <TierIcon className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${tier.icon_color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-800">{model.name}</span>
                  <Badge
                    className={`${model.providerColor} text-white text-[10px] px-1.5 py-0 h-4`}
                  >
                    {model.provider}
                  </Badge>
                  <Badge className={`${tier.badge} text-white text-[10px] px-1.5 py-0 h-4`}>
                    {tier.label}
                  </Badge>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{model.reason}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface TechniqueData {
  id: string;
  label: string;
  color: string;
  badgeColor: string;
  tagline: string;
  description: string;
  when: string;
  example: string;
  pros: string[];
  cons: string[];
  models: ModelRec[];
}

const techniques: TechniqueData[] = [
  {
    id: "zero-shot",
    label: "Zero-Shot",
    color: "text-purple-700",
    badgeColor: "bg-purple-600",
    tagline: "Instrução direta, sem exemplos",
    description:
      "Você dá a tarefa diretamente ao modelo sem fornecer nenhum exemplo. O Claude usa apenas seu conhecimento pré-treinado para interpretar e executar a instrução.",
    when: "Tarefas simples e bem definidas, como criar funções, corrigir bugs óbvios ou reformatar código.",
    example: "Crie uma função TypeScript que recebe um array de números e retorna a média aritmética.",
    pros: [
      "Mais econômico — usa poucos tokens",
      "Rápido de escrever, sem overhead de exemplos",
      "Suficiente para tarefas bem definidas",
    ],
    cons: [
      "Pode falhar em tarefas ambíguas ou complexas",
      "Sem exemplos, o modelo pode interpretar de forma inesperada",
      "Menor controle sobre formato de saída",
    ],
    models: [
      {
        name: "Claude Sonnet 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "top",
        reason: "Rápido, preciso e econômico — relação custo-benefício ideal para zero-shot.",
      },
      {
        name: "Claude Haiku 4.5",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "top",
        reason: "Ultra-rápido e barato; perfeito para tarefas simples e repetitivas.",
      },
      {
        name: "GPT-4o mini",
        provider: "OpenAI",
        providerColor: "bg-green-600",
        tier: "good",
        reason: "Alternativa rápida e acessível da OpenAI para instruções diretas.",
      },
      {
        name: "Gemini 2.0 Flash",
        provider: "Google",
        providerColor: "bg-blue-600",
        tier: "alt",
        reason: "Boa velocidade e custo baixo; opção válida no ecossistema Google.",
      },
    ],
  },
  {
    id: "few-shot",
    label: "Few-Shot",
    color: "text-blue-700",
    badgeColor: "bg-blue-600",
    tagline: "Aprenda com exemplos antes de agir",
    description:
      "Você fornece 2–5 exemplos do padrão esperado (entrada → saída) antes de pedir a tarefa real. O modelo aprende o padrão e o replica.",
    when: "Quando você precisa de um formato de saída específico, estilo de código consistente, ou quando zero-shot produz resultados inconsistentes.",
    example: `Converta os nomes de variáveis para camelCase seguindo os exemplos:
user_name → userName
get_user_id → getUserId
is_active_user → isActiveUser

Agora converta: fetch_all_orders`,
    pros: [
      "Controle preciso do formato e estilo de saída",
      "Reduz ambiguidade sem exigir regras explícitas",
      "Ótimo para estabelecer padrões do projeto",
    ],
    cons: [
      "Consome mais tokens que zero-shot",
      "Exige curadoria dos exemplos — exemplos ruins degradam a resposta",
      "Overhead de escrever os exemplos",
    ],
    models: [
      {
        name: "Claude Sonnet 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "top",
        reason: "Reconhecimento de padrão excepcional; segue exemplos com alta fidelidade.",
      },
      {
        name: "GPT-4o",
        provider: "OpenAI",
        providerColor: "bg-green-600",
        tier: "top",
        reason: "Muito forte em few-shot learning; replica padrões com precisão.",
      },
      {
        name: "Gemini 1.5 Pro",
        provider: "Google",
        providerColor: "bg-blue-600",
        tier: "good",
        reason: "Janela de contexto de 1M tokens — ideal quando os exemplos são longos.",
      },
      {
        name: "Claude Haiku 4.5",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "alt",
        reason: "Suficiente para padrões simples quando o custo é prioridade.",
      },
    ],
  },
  {
    id: "chain-of-thought",
    label: "Chain of Thought",
    color: "text-orange-700",
    badgeColor: "bg-orange-500",
    tagline: "Pense passo a passo antes de responder",
    description:
      'Instruir o modelo a "pensar em voz alta" — decompor o problema em etapas intermediárias antes de chegar à resposta final. Pode ser explícito ("pense passo a passo") ou implícito via exemplos de raciocínio.',
    when: "Debugging complexo, análise de algoritmos, refatoração com múltiplas dependências, ou qualquer tarefa que envolva raciocínio multi-etapa.",
    example: `Preciso entender por que essa função retorna NaN em produção mas funciona em dev.
Pense passo a passo: analise os tipos de entrada possíveis, trace a execução,
identifique onde o NaN pode ser introduzido, e só então sugira a correção.`,
    pros: [
      "Resultados muito mais precisos em problemas complexos",
      "O raciocínio explícito é auditável — você pode identificar onde ele errou",
      "Reduz alucinações em tarefas analíticas",
    ],
    cons: [
      "Gera muito mais tokens (raciocínio + resposta)",
      "Mais lento que respostas diretas",
      "Desnecessário para tarefas simples",
    ],
    models: [
      {
        name: "Claude Opus 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "top",
        reason: "Melhor raciocínio encadeado da Anthropic; excele em problemas multi-etapa.",
      },
      {
        name: "OpenAI o1 / o3",
        provider: "OpenAI",
        providerColor: "bg-green-600",
        tier: "top",
        reason: "CoT interno nativo — projetados especificamente para raciocínio profundo.",
      },
      {
        name: "Claude Sonnet 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "good",
        reason: "Bom raciocínio encadeado a custo menor que o Opus.",
      },
      {
        name: "Gemini 1.5 Pro",
        provider: "Google",
        providerColor: "bg-blue-600",
        tier: "alt",
        reason: "Alternativa sólida com bom desempenho em raciocínio analítico.",
      },
    ],
  },
  {
    id: "react",
    label: "ReAct",
    color: "text-teal-700",
    badgeColor: "bg-teal-600",
    tagline: "Raciocinar → Agir → Observar → Repetir",
    description:
      "Combina raciocínio (Reasoning) com ações concretas (Acting) em ciclos iterativos. O modelo pensa, executa uma ação (busca, leitura de arquivo, ferramenta), observa o resultado e decide o próximo passo.",
    when: "Tarefas que exigem uso de ferramentas, MCPs, buscas no codebase (RAG), ou qualquer workflow que envolva múltiplas etapas com feedback intermediário.",
    example: `Investigue por que o endpoint /api/orders está retornando 500.
1. Busque no codebase o handler desse endpoint
2. Verifique quais dependências ele usa
3. Procure por logs de erro recentes no módulo
4. Com base no que encontrar, proponha a correção`,
    pros: [
      "Ideal para agentes e tarefas multi-step com ferramentas (MCP, RAG)",
      "Permite correção de rota — o modelo adapta o plano ao que encontra",
      "Transparência total do processo de investigação",
    ],
    cons: [
      "Alto consumo de tokens por ciclo de ação",
      "Pode entrar em loops se o objetivo não estiver claro",
      "Requer que o modelo tenha acesso a ferramentas/ações",
    ],
    models: [
      {
        name: "Claude Opus 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "top",
        reason: "Melhor planejamento e uso de ferramentas; ideal para agentes complexos.",
      },
      {
        name: "Claude Sonnet 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "top",
        reason: "Excelente tool use com custo menor — o melhor equilíbrio para ReAct.",
      },
      {
        name: "GPT-4o",
        provider: "OpenAI",
        providerColor: "bg-green-600",
        tier: "good",
        reason: "Forte em function calling e orquestração de ferramentas externas.",
      },
      {
        name: "Gemini 2.0 Flash",
        provider: "Google",
        providerColor: "bg-blue-600",
        tier: "alt",
        reason: "Suporte nativo a ferramentas com boa velocidade de resposta.",
      },
    ],
  },
  {
    id: "role-prompting",
    label: "Role Prompting",
    color: "text-pink-700",
    badgeColor: "bg-pink-600",
    tagline: "Atribua uma persona especialista",
    description:
      'Você instrui o modelo a adotar uma persona específica (ex: "você é um senior frontend engineer especialista em performance"). Isso ativa padrões de resposta mais alinhados ao domínio. No Claude Code, é o conceito por trás dos Agents.',
    when: "Tarefas que exigem expertise especializada: code review rigoroso, análise de segurança, otimização de performance, design de APIs.",
    example: `Você é um senior engenheiro de segurança especialista em OWASP.
Revise esse endpoint de autenticação e aponte todas as vulnerabilidades,
ordenadas por severidade, com sugestão de correção para cada uma.`,
    pros: [
      "Respostas mais focadas e especializadas no domínio",
      "Reduz necessidade de instruções técnicas detalhadas",
      "Base dos Agents no Claude Code — reutilizável via @agents/nome.md",
    ],
    cons: [
      "Personas muito rígidas podem limitar respostas criativas",
      "Pode ignorar contexto fora do papel definido",
      "Requer definição cuidadosa da persona",
    ],
    models: [
      {
        name: "Claude Opus 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "top",
        reason: "Melhor aderência a personas complexas e instruções detalhadas de papel.",
      },
      {
        name: "Claude Sonnet 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "top",
        reason: "Ótimo seguimento de instruções de persona; base perfeita para Agents.",
      },
      {
        name: "GPT-4o",
        provider: "OpenAI",
        providerColor: "bg-green-600",
        tier: "good",
        reason: "Forte em system prompts; mantém a persona consistente ao longo da conversa.",
      },
      {
        name: "Llama 3.1 70B",
        provider: "Meta",
        providerColor: "bg-indigo-600",
        tier: "alt",
        reason: "Opção open-source auto-hospedada com bom desempenho em personas simples.",
      },
    ],
  },
  {
    id: "tree-of-thought",
    label: "Tree of Thought",
    color: "text-indigo-700",
    badgeColor: "bg-indigo-600",
    tagline: "Explore múltiplos caminhos, escolha o melhor",
    description:
      "Extensão do Chain of Thought: em vez de um único raciocínio linear, o modelo gera e avalia múltiplas abordagens em paralelo, então seleciona (ou combina) a melhor. Útil quando há trade-offs reais entre soluções.",
    when: "Decisões arquiteturais, escolha entre padrões de design, avaliação de abordagens de refatoração, ou qualquer escolha técnica com trade-offs significativos.",
    example: `Preciso implementar cache nessa API. Gere 3 abordagens distintas:
1. Cache em memória (in-process)
2. Redis externo
3. Cache no banco de dados

Para cada uma, analise: complexidade de implementação, escalabilidade,
consistência e custo. Ao final, recomende a melhor para um time de 3 devs.`,
    pros: [
      "Exploração sistemática de trade-offs — decisões mais informadas",
      "Evita fixação precoce em uma única solução",
      "Ótimo para documentar decisões arquiteturais (ADRs)",
    ],
    cons: [
      "Alto consumo de tokens — o mais caro das técnicas",
      "Pode ser overkill para decisões simples",
      "Requer síntese cuidadosa das alternativas geradas",
    ],
    models: [
      {
        name: "Claude Opus 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "top",
        reason: "Raciocínio mais profundo e síntese de alternativas — ideal para ToT.",
      },
      {
        name: "OpenAI o1 / o3",
        provider: "OpenAI",
        providerColor: "bg-green-600",
        tier: "top",
        reason: "Raciocínio estendido nativo; explora múltiplos caminhos internamente.",
      },
      {
        name: "Gemini 1.5 Pro",
        provider: "Google",
        providerColor: "bg-blue-600",
        tier: "good",
        reason: "Contexto longo permite manter múltiplos ramos de raciocínio sem truncar.",
      },
      {
        name: "Claude Sonnet 4.6",
        provider: "Anthropic",
        providerColor: "bg-orange-500",
        tier: "alt",
        reason: "Viável para ToT simples com custo consideravelmente menor que o Opus.",
      },
    ],
  },
];

export function PromptTechniquesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-600" />
          Técnicas de Prompting para IA
        </CardTitle>
        <CardDescription>
          Conheça os principais padrões de prompting, quando usar cada um e seus trade-offs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="zero-shot">
          <TabsList className="flex flex-wrap h-auto gap-1 w-full justify-start bg-slate-100 p-1.5 rounded-xl mb-4">
            {techniques.map(({ id, label, badgeColor }) => (
              <TabsTrigger
                key={id}
                value={id}
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs px-3 py-1.5 rounded-lg"
              >
                <span
                  className={`w-2 h-2 rounded-full ${badgeColor} inline-block mr-1.5 flex-shrink-0`}
                />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {techniques.map(({ id, label, color, badgeColor, tagline, description, when, example, pros, cons, models }) => (
            <TabsContent key={id} value={id}>
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className={`text-lg font-bold ${color}`}>{label}</h3>
                    <p className="text-sm text-slate-500 italic">{tagline}</p>
                  </div>
                  <Badge className={`${badgeColor} text-white text-xs flex-shrink-0`}>{label}</Badge>
                </div>

                {/* Descrição */}
                <p className="text-sm text-slate-700 leading-relaxed">{description}</p>

                {/* Quando usar */}
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-xs font-semibold text-amber-800 mb-1">Quando usar</p>
                  <p className="text-xs text-amber-900">{when}</p>
                </div>

                {/* Exemplo */}
                <div>
                  <p className="text-xs font-semibold text-slate-600 mb-2">Exemplo de prompt</p>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs font-mono whitespace-pre-wrap leading-relaxed">
                    {example}
                  </pre>
                </div>

                {/* Pros e Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-xs font-semibold text-green-800 mb-2">✅ Vantagens</p>
                    <ProConList items={pros} type="pro" />
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-xs font-semibold text-red-800 mb-2">❌ Desvantagens</p>
                    <ProConList items={cons} type="con" />
                  </div>
                </div>

                {/* Modelos recomendados */}
                <ModelsCard models={models} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
