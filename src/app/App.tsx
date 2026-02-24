import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { StructureTab } from "./components/StructureTab";
import { 
  Zap, 
  DollarSign, 
  Gauge, 
  Target, 
  CheckCircle2, 
  XCircle, 
  Lightbulb,
  FileCode,
  MessageSquare,
  Sparkles,
  TrendingDown,
  ArrowRight
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Key Metrics */}
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

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="prompts">Prompts</TabsTrigger>
            <TabsTrigger value="context">Contexto</TabsTrigger>
            <TabsTrigger value="structure">Estrutura</TabsTrigger>
            <TabsTrigger value="advanced">Avançado</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
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
          </TabsContent>

          {/* Prompts Tab */}
          <TabsContent value="prompts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>✅ Bons Exemplos de Prompts</CardTitle>
                <CardDescription>Como estruturar prompts eficientes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <PromptExample
                  good={true}
                  title="Específico e Direto"
                  prompt="Adicione validação de email no campo de input usando regex"
                  explanation="Claro, específico, sem ambiguidade. Claude sabe exatamente o que fazer."
                />
                <PromptExample
                  good={true}
                  title="Com Escopo Limitado"
                  prompt="No componente UserCard, mude a cor do botão para azul"
                  explanation="Limita o escopo ao componente específico, evitando mudanças em outros lugares."
                />
                <PromptExample
                  good={true}
                  title="Iterativo e Incremental"
                  prompt="Agora adicione um ícone de loading quando o botão for clicado"
                  explanation="Constrói sobre o trabalho anterior sem repetir contexto."
                />
                <PromptExample
                  good={true}
                  title="Com Referência Específica"
                  prompt="Na linha 34, substitua useState por useReducer"
                  explanation="Referência direta economiza tokens de contexto."
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>❌ Exemplos de Prompts Ruins</CardTitle>
                <CardDescription>O que evitar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <PromptExample
                  good={false}
                  title="Vago e Aberto"
                  prompt="Melhore esse código"
                  explanation="Muito vago. Claude precisa adivinhar o que 'melhorar' significa, desperdiçando tokens."
                />
                <PromptExample
                  good={false}
                  title="Escopo Muito Amplo"
                  prompt="Refatore toda a aplicação para usar TypeScript e adicione testes"
                  explanation="Múltiplas tarefas grandes. Divida em prompts menores e específicos."
                />
                <PromptExample
                  good={false}
                  title="Excesso de Contexto"
                  prompt="Então, eu estava pensando que talvez seria legal se a gente pudesse..."
                  explanation="Linguagem natural excessiva. Seja direto e objetivo."
                />
                <PromptExample
                  good={false}
                  title="Sem Especificação"
                  prompt="Adicione animações"
                  explanation="Onde? Quais animações? Especifique: 'Adicione fade-in no modal ao abrir'."
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📋 Template de Prompt Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                  <div>[AÇÃO] + [ONDE] + [O QUE] + [COMO (opcional)]</div>
                  <Separator className="bg-slate-700" />
                  <div className="text-slate-300">Exemplos:</div>
                  <div>• Adicione + no Header + um botão de logout + com ícone</div>
                  <div>• Corrija + na função fetchData + o tratamento de erro + usando try-catch</div>
                  <div>• Remova + do componente Card + o padding interno</div>
                  <div>• Altere + na linha 23 + o fontSize + para 16px</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Context Tab */}
          <TabsContent value="context" className="space-y-4">
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
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Economia neste exemplo:</span>
                    <Badge className="bg-green-600 text-white text-lg px-4 py-1">
                      93.75% (~16x mais barato)
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Structure Tab - NEW */}
          <TabsContent value="structure">
            <StructureTab />
          </TabsContent>

          {/* Advanced Tab */}
          <TabsContent value="advanced" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>🚀 Técnicas Avançadas</CardTitle>
                <CardDescription>Para usuários experientes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <AdvancedTechnique
                  title="1. Chain of Prompts (Cadeia de Prompts)"
                  description="Em vez de pedir tudo de uma vez, divida em etapas:"
                  steps={[
                    "Prompt 1: 'Crie a estrutura básica do componente'",
                    "Prompt 2: 'Adicione a lógica de estado'",
                    "Prompt 3: 'Adicione estilos'",
                    "Prompt 4: 'Adicione tratamento de erro'"
                  ]}
                  benefit="Reduz tokens e permite validar cada etapa antes de prosseguir"
                />

                <Separator />

                <AdvancedTechnique
                  title="2. Reutilize Estruturas"
                  description="Para padrões repetitivos:"
                  steps={[
                    "Primeiro componente: Prompt detalhado",
                    "Componentes seguintes: 'Crie um componente similar ao UserCard mas para Products'",
                    "Claude reutiliza a estrutura sem precisar especificar tudo novamente"
                  ]}
                  benefit="Economia de 60-80% em prompts repetitivos"
                />

                <Separator />

                <AdvancedTechnique
                  title="3. Micro-edições com Referências"
                  description="Use referências precisas para mudanças pequenas:"
                  steps={[
                    "'linha 45: troque primary por secondary'",
                    "'função handleSubmit: adicione console.log no início'",
                    "'estado loading: inicialize como false'"
                  ]}
                  benefit="Economia de 70-90% vs descrições contextuais"
                />

                <Separator />

                <AdvancedTechnique
                  title="4. Session Management (Gestão de Sessões)"
                  description="Organize conversas por contexto:"
                  steps={[
                    "Conversa 1: UI/Components",
                    "Conversa 2: Logic/State",
                    "Conversa 3: Styling",
                    "Conversa 4: Bug fixes"
                  ]}
                  benefit="Mantém contexto focado e relevante em cada thread"
                />

                <Separator />

                <AdvancedTechnique
                  title="5. Code Snippets como Referência"
                  description="Use snippets mínimos:"
                  steps={[
                    "Ao invés de: 'No código onde tem o useEffect que faz fetch...'",
                    "Use: 'No useEffect da linha 23'"
                  ]}
                  benefit="Claude encontra rapidamente o contexto exato"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>💡 Dicas Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ProTip
                    emoji="⏱️"
                    tip="Timing"
                    description="Faça mudanças relacionadas na mesma sessão, mudanças diferentes em sessões novas"
                  />
                  <ProTip
                    emoji="🎨"
                    tip="Estilos"
                    description="Para múltiplas mudanças de estilo, liste todas de uma vez: 'cor azul, padding 4, borda arredondada'"
                  />
                  <ProTip
                    emoji="🔍"
                    tip="Debug"
                    description="Ao reportar bugs, inclua apenas: mensagem de erro + linha + o que esperava"
                  />
                  <ProTip
                    emoji="📝"
                    tip="Nomenclatura"
                    description="Use nomes consistentes. Se chamou de 'Header' antes, não use 'TopBar' depois"
                  />
                  <ProTip
                    emoji="🔄"
                    tip="Iterações"
                    description="Use 'agora' ou 'em seguida' para indicar mudanças incrementais"
                  />
                  <ProTip
                    emoji="🎯"
                    tip="Foco"
                    description="Uma tarefa por prompt. Evite 'e também' ou 'além disso'"
                  />
                  <ProTip
                    emoji="📦"
                    tip="Imports"
                    description="Não mencione imports. Claude adiciona automaticamente"
                  />
                  <ProTip
                    emoji="⚡"
                    tip="Velocidade"
                    description="Comandos de 3-7 palavras são os mais eficientes"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Checklist de Otimização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <ChecklistItem text="Meu prompt tem menos de 10 palavras?" />
                  <ChecklistItem text="Estou mencionando apenas 1-2 arquivos/componentes?" />
                  <ChecklistItem text="Selecionei apenas o código relevante?" />
                  <ChecklistItem text="Esta conversa tem menos de 10 mensagens?" />
                  <ChecklistItem text="Meu pedido é uma ação única e clara?" />
                  <ChecklistItem text="Evitei linguagem casual e fui direto?" />
                  <ChecklistItem text="Usei referências específicas (linha/função) quando possível?" />
                </div>
                <div className="mt-4 p-3 bg-white rounded border border-purple-300">
                  <p className="text-sm text-slate-700">
                    <strong>Regra de Ouro:</strong> Se você consegue explicar o que quer em uma frase curta, você está otimizando corretamente. ✨
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
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
      </div>
    </div>
  );
}

// Helper Components
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

function PromptExample({ 
  good, 
  title, 
  prompt, 
  explanation 
}: { 
  good: boolean; 
  title: string; 
  prompt: string; 
  explanation: string;
}) {
  const bgColor = good ? "bg-green-50" : "bg-red-50";
  const borderColor = good ? "border-green-200" : "border-red-200";
  const iconColor = good ? "text-green-600" : "text-red-600";
  const Icon = good ? CheckCircle2 : XCircle;

  return (
    <div className={`p-4 rounded-lg border ${bgColor} ${borderColor}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${iconColor} mt-0.5 flex-shrink-0`} />
        <div className="flex-1">
          <h4 className="font-semibold mb-2">{title}</h4>
          <div className="bg-white p-3 rounded border mb-2 font-mono text-sm">
            "{prompt}"
          </div>
          <p className="text-sm text-slate-600">{explanation}</p>
        </div>
      </div>
    </div>
  );
}

function ContextStrategy({ 
  number, 
  title, 
  description, 
  impact 
}: { 
  number: string; 
  title: string; 
  description: string; 
  impact: string;
}) {
  return (
    <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-slate-600 mb-2">{description}</p>
        <Badge className="bg-blue-600 text-white text-xs">{impact}</Badge>
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

function AdvancedTechnique({ 
  title, 
  description, 
  steps, 
  benefit 
}: { 
  title: string; 
  description: string; 
  steps: string[]; 
  benefit: string;
}) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-3">{description}</p>
      <div className="bg-slate-50 rounded-lg p-4 border mb-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-2 mb-2 last:mb-0">
            <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-slate-700">{step}</span>
          </div>
        ))}
      </div>
      <Badge className="bg-purple-600 text-white">
        {benefit}
      </Badge>
    </div>
  );
}

function ProTip({ 
  emoji, 
  tip, 
  description 
}: { 
  emoji: string; 
  tip: string; 
  description: string;
}) {
  return (
    <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200">
      <div className="text-2xl mb-2">{emoji}</div>
      <h4 className="font-semibold mb-1">{tip}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded border border-purple-200">
      <input
        type="checkbox"
        className="w-4 h-4 text-purple-600 rounded"
      />
      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
}
