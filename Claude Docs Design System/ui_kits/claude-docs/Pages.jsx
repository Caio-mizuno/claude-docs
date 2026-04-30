// Pages.jsx — All 10 page content components with full content

// ── OVERVIEW ─────────────────────────────────────────────────
function OverviewPage() {
  return (
    <Stack gap={16}>
      <Grid cols={3} gap={12}>
        <MetricCard title="Performance" stat="+85%" label="Melhoria esperada"
          icon={ICONS.gauge} from="#f0fdf4" to="#ecfdf5" borderColor="#bbf7d0" statColor="#15803d"/>
        <MetricCard title="Redução de Tokens" stat="-60%" label="Economia de tokens"
          icon={ICONS.trending} from="#eff6ff" to="#e0f2fe" borderColor="#bfdbfe" statColor="#1d4ed8"/>
        <MetricCard title="Custo" stat="-70%" label="Redução de custos"
          icon={ICONS.dollar} from="#fffbeb" to="#fef9c3" borderColor="#fde68a" statColor="#a16207"/>
      </Grid>

      <Card>
        <CardHeader>
          <CardTitle icon={ICONS.target}>Princípios Fundamentais</CardTitle>
          <CardDesc>Os 3 pilares para otimizar seu uso do Claude Code</CardDesc>
        </CardHeader>
        <CardBody>
          <Grid cols={3} gap={10}>
            {[
              { icon: ICONS.zap,  n:'1', title:'Seja Específico', desc:'Prompts claros e diretos reduzem iterações desnecessárias', bg:'#faf7ff', border:'#ddd6fe' },
              { icon: ICONS.file, n:'2', title:'Minimize Contexto', desc:'Envie apenas o código relevante para a tarefa', bg:'#eff6ff', border:'#bfdbfe' },
              { icon: ICONS.bot,  n:'3', title:'Use Iterações', desc:'Faça mudanças incrementais em vez de reescrever tudo', bg:'#f0fdf4', border:'#bbf7d0' },
            ].map(p => (
              <div key={p.n} style={{ padding: '14px 16px', borderRadius: 8, background: p.bg, border: `1px solid ${p.border}` }}>
                <div style={{ marginBottom: 8 }}>{p.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: DS.fg1, marginBottom: 4 }}>{p.n}. {p.title}</div>
                <div style={{ fontSize: 12.5, color: DS.fg2, lineHeight: 1.45 }}>{p.desc}</div>
              </div>
            ))}
          </Grid>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle icon={ICONS.lightbulb}>Quick Wins — Ganhos Rápidos</CardTitle>
        </CardHeader>
        <CardBody>
          <Stack gap={8}>
            <QuickWin text="Use seleção de código em vez de mencionar arquivos inteiros" savings="Economia: 80-90% de tokens"/>
            <QuickWin text="Feche conversas antigas e inicie novas para tarefas distintas" savings="Reduz contexto acumulado"/>
            <QuickWin text="Use comandos imperativos curtos: 'Adicione validação' vs 'Por favor, você poderia...'" savings="Economia: 30-40% em tokens de prompt"/>
            <QuickWin text="Especifique o escopo: 'apenas este componente' ou 'só a função login'" savings="Evita mudanças desnecessárias"/>
            <QuickWin text="Utilize referências diretas: 'mudar linha 45' em vez de descrever o contexto" savings="Economia: 60-70% em tokens"/>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}

// ── RECOMMENDATIONS ───────────────────────────────────────────
function RecommendationsPage() {
  return (
    <Stack gap={16}>
      <PageTitle title="Recomendações Atuais" subtitle="Configurações e workflows recomendados para máxima performance e economia com Claude Code."/>
      <Divider/>

      <Callout variant="brand">
        <div style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
          {ICONS.sparkles}
          <div style={{ flex:1 }}>
            <div style={{ fontSize:14, fontWeight:600, color:DS.fg1, marginBottom:3 }}>Workflow Otimizado 2026</div>
            <div style={{ fontSize:13, color:DS.fg2 }}>Stack completo de plugins + prompt especializado para desenvolvimento de alta qualidade</div>
          </div>
          <Badge variant="secondary">Recomendado</Badge>
        </div>
      </Callout>

      <Accordion title="Claude Code — Workflow Completo"
        subtitle="Setup otimizado: plugins essenciais + prompt especializado para tarefas complexas"
        badges={[{label:'Recomendado', v:'brand'}]}>
        <Stack gap={16}>
          <div>
            <StepHead n="1">Instalar Plugins Essenciais</StepHead>
            <div style={{ fontSize:13, color:DS.fg2, marginBottom:10 }}>Instale os 4 plugins fundamentais para otimização máxima:</div>
            <Terminal comment="# Claude-Mem (memória persistente)" lines={[
              'npx claude-mem install','',
              '# RTK (60-90% economia de tokens)','brew install rtk','',
              '# Caveman (75% redução output)',
              'claude plugin marketplace add JuliusBrussee/caveman',
              'claude plugin install caveman@caveman','',
              '# CodeRabbit (code review IA)',
              'curl -fsSL https://cli.coderabbit.ai/install.sh | sh',
              'coderabbit auth login',
              'claude plugin install coderabbit',
            ]}/>
          </div>
          <div>
            <StepHead n="2">Criar Arquivo de Instruções</StepHead>
            <div style={{ fontSize:13, color:DS.fg2, marginBottom:10 }}>Crie um arquivo <InlineCode>task.md</InlineCode> na raiz do projeto:</div>
            <Terminal lines={[
              '# Tarefa: [Título da Feature/Bug]','',
              '## Objetivo','Descrição clara do que precisa ser implementado','',
              '## Requisitos','- Requisito 1','- Requisito 2','',
              '## Critérios de Aceite','- [ ] Critério 1','- [ ] Critério 2',
            ]}/>
          </div>
          <div>
            <StepHead n="3">Iniciar Claude Code</StepHead>
            <Terminal lines={['cd /caminho/do/projeto','claude']}/>
          </div>
          <div>
            <StepHead n="4">Executar Prompt Especializado</StepHead>
            <div style={{ fontSize:13, color:DS.fg2, marginBottom:10 }}>Copie e cole o prompt otimizado:</div>
            <Terminal lines={[
              '/caveman ultra','use caveman ultra',
              '@task.md siga estas instruções utilizando agentes e skills',
              '- crie um plano de ação especializado',
              '- seja detalhista nas estruturas e variáveis',
              '- refatore buscando performance e segurança',
              '- codereview com agentes e resolva todos os pontos encontrados',
            ]}/>
            <div style={{ fontSize:12, color:DS.fg3, marginTop:8 }}>💡 Substitua <InlineCode>@task.md</InlineCode> pelo caminho real do seu arquivo</div>
          </div>
          <Callout variant="brand">
            <div style={{ fontSize:13, fontWeight:600, color:DS.fg1, marginBottom:10 }}>Por que este workflow?</div>
            <Stack gap={6}>
              {[
                ['Claude-Mem','mantém contexto entre sessões, reduz re-explicação'],
                ['RTK','filtra outputs de CLI, economiza 60-90% tokens em comandos'],
                ['Caveman Ultra','modo máxima compressão, respostas telegráficas (75% economia)'],
                ['CodeRabbit','review automático com IA, detecta bugs antes commit'],
                ['Agentes + Skills','paralelo, divide trabalho complexo em subtasks especializadas'],
              ].map(([k,v]) => (
                <div key={k} style={{ display:'flex', gap:8, fontSize:13 }}>
                  <span style={{ color:DS.brand, fontWeight:600 }}>✓</span>
                  <span style={{ color:DS.fg2 }}><strong style={{ color:DS.fg1 }}>{k}</strong> — {v}</span>
                </div>
              ))}
            </Stack>
          </Callout>
          <Callout variant="dark">
            <div style={{ fontSize:13, fontWeight:600, color:DS.fg1, marginBottom:8 }}>Dicas Pro</div>
            <Stack gap={5}>
              {[
                ['Use','/reload-plugins','após instalar plugins pra ativar sem restart'],
                ['Rode','rtk gain','periodicamente pra ver economia de tokens'],
                ['Acesse','localhost:37777','pra ver memory stream do Claude-Mem em real-time'],
                ['Use','/coderabbit:review --base main','antes de abrir PR'],
              ].map(([pre,code,suf], i) => (
                <div key={i} style={{ fontSize:12.5, color:DS.fg2 }}>{pre} <InlineCode>{code}</InlineCode> {suf}</div>
              ))}
            </Stack>
          </Callout>
        </Stack>
      </Accordion>

      <Card tint="green">
        <CardHeader><CardTitle icon={ICONS.check}>Resultados Esperados</CardTitle></CardHeader>
        <CardBody>
          <Stack gap={7}>
            {[
              'Economia de 70-85% em custos de tokens',
              'Respostas 3x mais rápidas com Caveman Ultra',
              'Contexto persistente, zero retrabalho entre sessões',
              'Code review automático detecta bugs antes commit',
              'Qualidade de código production-ready desde primeira iteração',
            ].map((t,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:8 }}>
                {ICONS.check}
                <span style={{ fontSize:13, color:DS.fg1 }}>{t}</span>
              </div>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}

// ── PROMPTS ───────────────────────────────────────────────────
function PromptsPage() {
  return (
    <Stack gap={16}>
      <Card>
        <CardHeader><CardTitle icon={ICONS.check}>Bons Exemplos de Prompts</CardTitle><CardDesc>Como estruturar prompts eficientes</CardDesc></CardHeader>
        <CardBody>
          <Stack gap={8}>
            {[
              ['Específico e Direto','Adicione validação de email no campo de input usando regex','Claro, específico, sem ambiguidade. Claude sabe exatamente o que fazer.'],
              ['Com Escopo Limitado','No componente UserCard, mude a cor do botão para azul','Limita o escopo ao componente específico, evitando mudanças em outros lugares.'],
              ['Iterativo e Incremental','Agora adicione um ícone de loading quando o botão for clicado','Constrói sobre o trabalho anterior sem repetir contexto.'],
              ['Com Referência Específica','Na linha 34, substitua useState por useReducer','Referência direta economiza tokens de contexto.'],
            ].map(([title, prompt, explanation]) => (
              <div key={title} style={{ padding:'12px 14px', background:DS.greenBg, borderRadius:DS.rsm, border:`1px solid ${DS.greenBorder}` }}>
                <div style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                  {ICONS.check}
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13, fontWeight:600, color:DS.fg1, marginBottom:6 }}>{title}</div>
                    <div style={{ background:'#fff', padding:'8px 10px', borderRadius:DS.rxs, border:`1px solid ${DS.border}`, fontFamily:'JetBrains Mono, Consolas, monospace', fontSize:12, color:DS.fg1, marginBottom:6 }}>"{prompt}"</div>
                    <div style={{ fontSize:12.5, color:DS.fg2 }}>{explanation}</div>
                  </div>
                </div>
              </div>
            ))}
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader><CardTitle icon={ICONS.x}>Exemplos de Prompts Ruins</CardTitle><CardDesc>O que evitar</CardDesc></CardHeader>
        <CardBody>
          <Stack gap={8}>
            {[
              ['Vago e Aberto','Melhore esse código','Muito vago. Claude precisa adivinhar o que "melhorar" significa, desperdiçando tokens.'],
              ['Escopo Muito Amplo','Refatore toda a aplicação para usar TypeScript e adicione testes','Múltiplas tarefas grandes. Divida em prompts menores e específicos.'],
              ['Excesso de Contexto','Então, eu estava pensando que talvez seria legal se a gente pudesse...','Linguagem natural excessiva. Seja direto e objetivo.'],
              ['Sem Especificação','Adicione animações','Onde? Quais animações? Especifique: "Adicione fade-in no modal ao abrir".'],
            ].map(([title, prompt, explanation]) => (
              <div key={title} style={{ padding:'12px 14px', background:DS.redBg, borderRadius:DS.rsm, border:`1px solid ${DS.redBorder}` }}>
                <div style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                  {ICONS.x}
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13, fontWeight:600, color:DS.fg1, marginBottom:6 }}>{title}</div>
                    <div style={{ background:'#fff', padding:'8px 10px', borderRadius:DS.rxs, border:`1px solid ${DS.border}`, fontFamily:'JetBrains Mono, Consolas, monospace', fontSize:12, color:DS.fg1, marginBottom:6 }}>"{prompt}"</div>
                    <div style={{ fontSize:12.5, color:DS.fg2 }}>{explanation}</div>
                  </div>
                </div>
              </div>
            ))}
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader><CardTitle>📋 Template de Prompt Eficiente</CardTitle></CardHeader>
        <CardBody>
          <Terminal comment="[AÇÃO] + [ONDE] + [O QUE] + [COMO (opcional)]" lines={[
            '','# Exemplos:',
            '• Adicione + no Header + um botão de logout + com ícone',
            '• Corrija + na função fetchData + o tratamento de erro + usando try-catch',
            '• Remova + do componente Card + o padding interno',
            '• Altere + na linha 23 + o fontSize + para 16px',
          ]}/>
        </CardBody>
      </Card>
    </Stack>
  );
}

// ── CONTEXT ───────────────────────────────────────────────────
function ContextPage() {
  return (
    <Stack gap={16}>
      <Card>
        <CardHeader><CardTitle icon={ICONS.target}>Gestão de Contexto</CardTitle><CardDesc>Como controlar o que Claude "vê"</CardDesc></CardHeader>
        <CardBody>
          <SectionHead icon={ICONS.check} color={DS.green}>Estratégias de Redução de Contexto</SectionHead>
          <Stack gap={8}>
            <Strategy number="1" title="Use Seleção de Código" desc="Selecione apenas as linhas relevantes em vez de mencionar o arquivo inteiro" impact="🔥 Economia: 80-95% de tokens"/>
            <Strategy number="2" title="Feche Conversas Longas" desc="Após 10-15 interações, inicie uma nova conversa. O histórico acumula tokens." impact="💰 Economia: 50-70% por mensagem"/>
            <Strategy number="3" title="Evite @mentions Desnecessários" desc="Não mencione múltiplos arquivos. Claude pode inferir dependências do código selecionado." impact="⚡ Economia: 40-60% de tokens"/>
            <Strategy number="4" title="Descreva em vez de Colar" desc="Para referências externas, descreva a API em vez de colar documentação completa" impact="📉 Economia: 70-90% de tokens"/>
            <Strategy number="5" title="Use Referências Diretas" desc="'linha 45' ou 'função handleClick' em vez de colar o código novamente" impact="✅ Economia: 60-80% de tokens"/>
          </Stack>
          <div style={{ height:16 }}/>
          <SectionHead icon={ICONS.x} color={DS.red}>Armadilhas de Contexto a Evitar</SectionHead>
          <Stack gap={6}>
            <DangerItem text="❌ Mencionar 5+ arquivos em uma única mensagem"/>
            <DangerItem text="❌ Copiar logs de erro completos (extraia apenas a mensagem relevante)"/>
            <DangerItem text="❌ Incluir dependências node_modules ou código gerado"/>
            <DangerItem text="❌ Repetir instruções dadas anteriormente na mesma conversa"/>
            <DangerItem text="❌ Colar documentação completa de APIs (resuma em 2-3 linhas)"/>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader><CardTitle icon={ICONS.target}>📊 Comparação: Antes vs Depois</CardTitle></CardHeader>
        <CardBody>
          <Grid cols={2} gap={12}>
            <div style={{ border:`2px solid ${DS.redBorder}`, background:DS.redBg, borderRadius:DS.r, padding:14 }}>
              <div style={{ fontSize:13, fontWeight:600, color:'#b91c1c', marginBottom:10, display:'flex', gap:6 }}>{ICONS.x} Antes (Ineficiente)</div>
              <Stack gap={5}>
                {['Mensagem: "Olá! Então, eu estava olhando o código e pensei..."','Arquivos: @App.tsx @Header.tsx @Footer.tsx @utils.ts','Contexto: Toda conversa anterior (15 mensagens)'].map((t,i)=>(
                  <div key={i} style={{ background:'#fff', padding:'6px 9px', borderRadius:6, fontSize:12, color:DS.fg2 }}>{t}</div>
                ))}
              </Stack>
              <div style={{ fontSize:12.5, fontWeight:700, color:'#b91c1c', marginTop:10 }}>Total: ~8.000 tokens</div>
            </div>
            <div style={{ border:`2px solid ${DS.greenBorder}`, background:DS.greenBg, borderRadius:DS.r, padding:14 }}>
              <div style={{ fontSize:13, fontWeight:600, color:DS.green, marginBottom:10, display:'flex', gap:6 }}>{ICONS.check} Depois (Otimizado)</div>
              <Stack gap={5}>
                {['Mensagem: "Adicione validação de email"','Código: Apenas linhas 23-45 selecionadas','Contexto: Nova conversa focada'].map((t,i)=>(
                  <div key={i} style={{ background:'#fff', padding:'6px 9px', borderRadius:6, fontSize:12, color:DS.fg2 }}>{t}</div>
                ))}
              </Stack>
              <div style={{ fontSize:12.5, fontWeight:700, color:DS.green, marginTop:10 }}>Total: ~500 tokens</div>
            </div>
          </Grid>
          <div style={{ marginTop:12, padding:'11px 14px', background:'linear-gradient(90deg,#f0fdf4,#ecfdf5)', borderRadius:DS.r, border:`1px solid ${DS.greenBorder}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ fontSize:13, fontWeight:600, color:DS.fg1 }}>Economia neste exemplo:</span>
            <span style={{ background:DS.green, color:'#fff', fontSize:13, fontWeight:700, padding:'4px 14px', borderRadius:DS.rpill }}>93.75% (~16x mais barato)</span>
          </div>
        </CardBody>
      </Card>
    </Stack>
  );
}

// ── STRUCTURE ─────────────────────────────────────────────────
function StructurePage() {
  return (
    <Stack gap={16}>
      <Card style={{ border:`2px solid #ddd6fe` }}>
        <CardHeader style={{ background:'linear-gradient(135deg,#faf7ff,#f3eeff)' }}>
          <CardTitle icon={ICONS.file}>CLAUDE.md — Documentação do Projeto</CardTitle>
        </CardHeader>
        <CardBody>
          <Stack gap={12}>
            <div>
              <div style={{ fontSize:14, fontWeight:600, color:DS.fg1, marginBottom:6 }}>O que é?</div>
              <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.55 }}>Um arquivo na raiz do projeto que serve como "manual de instruções" permanente para o Claude. Ele lê este arquivo automaticamente e usa como contexto base para todas as interações.</p>
            </div>
            <Divider/>
            <div>
              <div style={{ fontSize:14, fontWeight:600, color:DS.fg1, marginBottom:8 }}>Por que usar?</div>
              <BenefitItem icon="🎯" title="Contexto Automático" desc="Você não precisa repetir informações sobre o projeto em cada conversa"/>
              <BenefitItem icon="📋" title="Padrões Consistentes" desc="Claude segue suas convenções de código automaticamente"/>
              <BenefitItem icon="⚡" title="Respostas Mais Rápidas" desc="Claude já sabe a arquitetura, não precisa adivinhar"/>
              <BenefitItem icon="💰" title="Economia Massiva" desc="Evita repetir o mesmo contexto em múltiplas mensagens"/>
            </div>
            <Divider/>
            <div>
              <div style={{ fontSize:14, fontWeight:600, color:DS.fg1, marginBottom:8 }}>O que incluir no CLAUDE.md?</div>
              <Terminal lines={[
                '# CLAUDE.md','',
                '## Visão Geral do Projeto',
                '- Nome e descrição breve',
                '- Stack principal (React, TypeScript, etc.)',
                '- Propósito da aplicação','',
                '## Estrutura de Pastas',
                '/src/components - Componentes reutilizáveis',
                '/src/pages - Páginas da aplicação','',
                '## Convenções de Código',
                '- Usar functional components',
                '- Props sempre tipadas',
                '- Tailwind para estilos','',
                '## Regras Importantes',
                '- Não modificar arquivos em /legacy',
                '- Sempre adicionar testes para novas features',
              ]}/>
            </div>
            <Callout variant="green">
              <div style={{ fontSize:13, fontWeight:600, color:DS.greenDark, marginBottom:4 }}>💡 Resultado Prático:</div>
              <p style={{ fontSize:13, color:DS.fg2 }}>Ao invés de: <em>"Crie um componente usando React functional component com TypeScript e Tailwind..."</em> — simplesmente peça: <strong>"Crie um componente de botão"</strong>. Claude já sabe tudo o mais.</p>
            </Callout>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}

// ── AGENTS ─────────────────────────────────────────────────────
function AgentsPage() {
  return (
    <Stack gap={16}>
      <PageTitle title="Agentes Claude Code" subtitle="Use múltiplos agentes em paralelo para acelerar tarefas complexas e reduzir custo total."/>
      <Divider/>
      <Callout variant="brand">
        <div style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
          {ICONS.bot}
          <div>
            <div style={{ fontSize:14, fontWeight:600, color:DS.fg1, marginBottom:3 }}>O que são Agentes?</div>
            <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.5 }}>Agentes são instâncias paralelas do Claude Code que podem trabalhar em subtarefas independentes simultaneamente. Um agente "team lead" coordena múltiplos "teammates" especializados.</p>
          </div>
        </div>
      </Callout>
      <Card>
        <CardHeader><CardTitle icon={ICONS.zap}>Como Usar Agentes</CardTitle></CardHeader>
        <CardBody>
          <Stack gap={10}>
            <div style={{ fontSize:13, color:DS.fg2 }}>Delegue tarefas paralelas com o comando <InlineCode>/agents</InlineCode>:</div>
            <Terminal lines={[
              '# Iniciar task com agentes especializados',
              '/agents "implemente o sistema de autenticação"','',
              '# O team lead vai criar subtarefas:',
              '→ Agent 1: Criar rotas de login/logout',
              '→ Agent 2: Implementar JWT middleware',
              '→ Agent 3: Criar componentes de UI',
              '→ Agent 4: Escrever testes',
            ]}/>
            <Callout variant="brand">
              <div style={{ fontSize:13, fontWeight:600, color:DS.fg1, marginBottom:8 }}>Exemplo Real — QuantBrasil</div>
              <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.5, marginBottom:10 }}>Agent Teams com Opus 4.6 para criar uma feature complexa: coordenação de team lead + teammates trabalhando em paralelo. Resultado final analisado vs custo elevado de tokens.</p>
              <ExtLink href="https://www.youtube.com/watch?v=ZiWW0mzRc7c" label="Como usar múltiplos agentes no Claude Code (Tutorial Completo)"/>
            </Callout>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardHeader><CardTitle icon={ICONS.target}>Quando Usar Agentes</CardTitle></CardHeader>
        <CardBody>
          <Grid cols={2} gap={10}>
            <div style={{ padding:'12px', background:DS.greenBg, border:`1px solid ${DS.greenBorder}`, borderRadius:DS.rsm }}>
              <div style={{ fontSize:13, fontWeight:600, color:DS.green, marginBottom:6 }}>✅ Bom uso</div>
              <Stack gap={4}>
                {['Features com múltiplos componentes independentes','Testes + implementação em paralelo','Refactoring de módulos separados','Análise de código + geração de docs'].map(t=>(
                  <div key={t} style={{ fontSize:12.5, color:DS.fg2 }}>• {t}</div>
                ))}
              </Stack>
            </div>
            <div style={{ padding:'12px', background:DS.redBg, border:`1px solid ${DS.redBorder}`, borderRadius:DS.rsm }}>
              <div style={{ fontSize:13, fontWeight:600, color:DS.red, marginBottom:6 }}>❌ Evitar</div>
              <Stack gap={4}>
                {['Tarefas com dependências sequenciais fortes','Mudanças em arquivos compartilhados','Tasks de menos de 5 min (overhead não compensa)','Quando contexto precisa ser compartilhado'].map(t=>(
                  <div key={t} style={{ fontSize:12.5, color:DS.fg2 }}>• {t}</div>
                ))}
              </Stack>
            </div>
          </Grid>
        </CardBody>
      </Card>
    </Stack>
  );
}

// ── SKILLS ─────────────────────────────────────────────────────
function SkillsPage() {
  return (
    <Stack gap={16}>
      <PageTitle title="Skills Claude Code" subtitle="Skills são capacidades especializadas que o Claude pode invocar para tarefas específicas."/>
      <Divider/>
      <Card>
        <CardHeader><CardTitle icon={ICONS.wrench}>O que são Skills?</CardTitle></CardHeader>
        <CardBody>
          <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.55, marginBottom:14 }}>Skills são instruções estruturadas que ensinam o Claude a executar tarefas complexas com um workflow definido. Diferentes de prompts simples — são procedimentos repetíveis e auditáveis.</p>
          <Terminal lines={[
            '# Criar uma skill personalizada',
            '/skill create "deploy-checklist"','',
            '# Usar uma skill existente',
            '/skill deploy-checklist',
          ]}/>
        </CardBody>
      </Card>
      <Card>
        <CardHeader><CardTitle>Skills Populares</CardTitle></CardHeader>
        <CardBody>
          <Stack gap={8}>
            {[
              ['brainstorming','Explora ideias antes de escrever código. Valida design em seções.','Superpowers'],
              ['test-driven-development','TDD rigoroso: RED → GREEN → REFACTOR → commit automático.','Superpowers'],
              ['code-review-request','Analisa código vs plano, reporta por severidade, bloqueia críticos.','Superpowers'],
              ['writing-plans','Divide trabalho em tarefas de 2-5 min com paths exatos.','Superpowers'],
              ['deploy-workflow','Checklist completo de deploy: testes, build, staging, prod.','Custom'],
            ].map(([name, desc, source]) => (
              <div key={name} style={{ padding:'12px 14px', background:'#fafbfd', border:`1px solid ${DS.border}`, borderRadius:DS.rsm }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:4 }}>
                  <InlineCode>/{name}</InlineCode>
                  <Badge variant="secondary">{source}</Badge>
                </div>
                <div style={{ fontSize:12.5, color:DS.fg2, marginTop:6 }}>{desc}</div>
              </div>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}

// ── PLUGINS ────────────────────────────────────────────────────
function PluginsPage() {
  const plugins = [
    {
      id:'rtk', title:'RTK — Rust Token Killer', sub:'CLI proxy que reduz 60-90% dos tokens em operações de desenvolvimento',
      badges:[{label:'60-90% economia',v:'brand'},{label:'recomendado',v:'success'}],
      content: (
        <Stack gap={14}>
          <div>
            <SectionHead>O que é</SectionHead>
            <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.55 }}>Proxy CLI escrito em Rust que filtra e resume automaticamente outputs de sistema antes de chegarem ao contexto do LLM. Suporta mais de 30 comandos otimizados (git, npm, docker, aws, etc).</p>
          </div>
          <div><SectionHead>Instalação</SectionHead>
            <Terminal comment="# Via Homebrew (recomendado)" lines={['brew install rtk','','# Verificar instalação','rtk --version','rtk gain']}/>
          </div>
          <div><SectionHead>Comandos</SectionHead>
            <Callout variant="dark">
              <Stack gap={4}>
                {[['rtk gain','Analytics de economia'],['rtk gain --history','Histórico de uso'],['rtk discover','Oportunidades perdidas'],['rtk proxy <cmd>','Executar sem filtro']].map(([c,d])=>(
                  <div key={c} style={{ fontSize:12.5, color:DS.fg2 }}><InlineCode>{c}</InlineCode> — {d}</div>
                ))}
              </Stack>
            </Callout>
          </div>
          <div style={{ display:'flex', gap:16 }}>
            <ExtLink href="https://github.com/psyto/rtk" label="GitHub Repository"/>
            <ExtLink href="https://brew.sh" label="Instalar Homebrew"/>
          </div>
        </Stack>
      )
    },
    {
      id:'caveman', title:'Caveman', sub:'Modo de output comprimido que reduz ~75% dos tokens mantendo precisão técnica',
      badges:[{label:'~75% economia',v:'brand'},{label:'recomendado',v:'success'}],
      content: (
        <Stack gap={14}>
          <div><SectionHead>O que é</SectionHead>
            <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.55 }}>Plugin que faz Claude falar como "homem das cavernas" — remove artigos, palavras de preenchimento e formalidades desnecessárias. Resposta mais rápida, mais fácil de ler, mesma precisão técnica.</p>
          </div>
          <div><SectionHead>Instalação</SectionHead>
            <Terminal lines={['claude plugin marketplace add JuliusBrussee/caveman','claude plugin install caveman@caveman']}/>
          </div>
          <div><SectionHead>Modos de Intensidade</SectionHead>
            <Stack gap={6}>
              {[['Lite','Remove fluff, mantém gramática. Profissional sem formalidade excessiva'],['Full','Modo caveman padrão. Remove artigos, usa fragmentos, máximo grunt'],['Ultra','Compressão máxima. Telegráfico. Abrevia tudo possível']].map(([m,d])=>(
                <div key={m} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                  <Badge variant="secondary">{m}</Badge>
                  <span style={{ fontSize:12.5, color:DS.fg2 }}>{d}</span>
                </div>
              ))}
            </Stack>
          </div>
          <div><SectionHead>Comandos</SectionHead>
            <Callout variant="dark">
              <Stack gap={4}>
                {[['/caveman','Ativar modo caveman'],['/caveman lite|full|ultra','Mudar intensidade'],['/caveman-commit','Mensagens de commit tersas'],['/caveman-review','Code review de uma linha']].map(([c,d])=>(
                  <div key={c} style={{ fontSize:12.5, color:DS.fg2 }}><InlineCode>{c}</InlineCode> — {d}</div>
                ))}
              </Stack>
            </Callout>
          </div>
          <ExtLink href="https://github.com/JuliusBrussee/caveman" label="GitHub Repository"/>
        </Stack>
      )
    },
    {
      id:'coderabbit', title:'CodeRabbit', sub:'Code review com IA, análise detalhada por severidade',
      badges:[{label:'Oficial',v:'outline'},{label:'recomendado',v:'success'}],
      content: (
        <Stack gap={14}>
          <div><SectionHead>O que é</SectionHead>
            <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.55 }}>Integra CodeRabbit AI no Claude Code. Analisa código com insights detalhados, agrupa por severidade (critical/high/medium/low), detecta bugs, vulnerabilidades e code smells.</p>
          </div>
          <div><SectionHead>Instalação</SectionHead>
            <Stack gap={8}>
              <div>
                <div style={{ fontSize:12.5, fontWeight:600, color:DS.fg1, marginBottom:6 }}>Passo 1: Instalar CodeRabbit CLI</div>
                <Terminal lines={['curl -fsSL https://cli.coderabbit.ai/install.sh | sh','coderabbit auth login']}/>
              </div>
              <div>
                <div style={{ fontSize:12.5, fontWeight:600, color:DS.fg1, marginBottom:6 }}>Passo 2: Instalar Plugin</div>
                <Terminal lines={['claude plugin marketplace update','claude plugin install coderabbit']}/>
              </div>
            </Stack>
          </div>
          <div><SectionHead>Como Usar</SectionHead>
            <Callout variant="dark">
              <Stack gap={4}>
                {[['/coderabbit:review','Review all changes'],['/coderabbit:review committed','Só committed'],['/coderabbit:review uncommitted','Só uncommitted'],['/coderabbit:review --base main','Comparar com main']].map(([c,d])=>(
                  <div key={c} style={{ fontSize:12.5, color:DS.fg2 }}><InlineCode>{c}</InlineCode> — {d}</div>
                ))}
              </Stack>
            </Callout>
          </div>
          <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
            <ExtLink href="https://coderabbit.ai" label="CodeRabbit Website"/>
            <ExtLink href="https://docs.coderabbit.ai/cli/overview" label="CLI Documentation"/>
          </div>
        </Stack>
      )
    },
    {
      id:'claude-mem', title:'Claude-Mem', sub:'Sistema de memória persistente que captura e comprime contexto automaticamente',
      badges:[{label:'Persistência',v:'secondary'},{label:'recomendado',v:'success'}],
      content: (
        <Stack gap={14}>
          <div><SectionHead>O que é</SectionHead>
            <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.55 }}>Captura automaticamente tudo que Claude faz durante sessões, comprime com IA (Agent SDK), e injeta contexto relevante em sessões futuras. Usa SQLite + Chroma vector DB pra busca híbrida.</p>
          </div>
          <div><SectionHead>Instalação</SectionHead>
            <Terminal comment="# Install rápido" lines={['npx claude-mem install','','# Via marketplace','/plugin marketplace add thedotmack/claude-mem','/plugin install claude-mem']}/>
          </div>
          <div><SectionHead>Features</SectionHead>
            <Stack gap={5}>
              {[['Memória Persistente','Contexto sobrevive reinícios'],['Progressive Disclosure','Retrieval em camadas com custo token'],['Web Viewer','UI real-time em localhost:37777'],['Privacy Control','Tag <private> exclui conteúdo sensível']].map(([k,v])=>(
                <div key={k} style={{ fontSize:12.5, color:DS.fg2 }}>• <strong style={{ color:DS.fg1 }}>{k}</strong> — {v}</div>
              ))}
            </Stack>
          </div>
          <ExtLink href="https://github.com/thedotmack/claude-mem" label="GitHub Repository"/>
        </Stack>
      )
    },
    {
      id:'superpowers', title:'Superpowers Framework', sub:'Framework estruturado: planejamento, TDD, debugging, code review, lifecycle completo',
      badges:[{label:'Mais instalado',v:'secondary'},{label:'recomendado',v:'success'}],
      content: (
        <Stack gap={14}>
          <div><SectionHead>O que é</SectionHead>
            <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.55 }}>Metodologia completa de desenvolvimento. Não começa escrevendo código — faz brainstorming, valida design, cria plano detalhado e executa com subagentes em modo TDD rigoroso (RED-GREEN-REFACTOR).</p>
          </div>
          <div><SectionHead>Instalação</SectionHead>
            <Terminal lines={['/plugin install superpowers@claude-plugins-official']}/>
          </div>
          <div><SectionHead>Fluxo de Trabalho</SectionHead>
            <Stack gap={6}>
              {[['brainstorming','Explora alternativas, valida design em seções'],['writing-plans','Divide em tarefas 2-5 min com paths exatos'],['subagent-driven-development','Um subagente por tarefa com review em 2 etapas'],['test-driven-development','RED → GREEN → REFACTOR → commit'],['code-review-request','Analisa por severidade, issues críticos bloqueiam'],['finishing-a-development-branch','Verifica testes, opções merge/PR/keep/discard']].map(([cmd,desc])=>(
                <div key={cmd} style={{ background:'#fff', border:`1px solid ${DS.border}`, borderRadius:DS.rsm, padding:'9px 12px' }}>
                  <div style={{ fontSize:12, fontWeight:600, color:DS.fg1, marginBottom:2, fontFamily:'JetBrains Mono, monospace' }}>{cmd}</div>
                  <div style={{ fontSize:12, color:DS.fg2 }}>{desc}</div>
                </div>
              ))}
            </Stack>
          </div>
          <ExtLink href="https://github.com/obra/superpowers" label="GitHub Repository"/>
        </Stack>
      )
    },
  ];

  return (
    <Stack gap={16}>
      <PageTitle title="Plugins Claude Code" subtitle="Extensões que otimizam performance, reduzem custos e expandem as capacidades do Claude Code."/>
      <Divider/>
      <Callout variant="brand">
        <div style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
          {ICONS.zap}
          <div>
            <div style={{ fontSize:14, fontWeight:600, color:DS.fg1, marginBottom:3 }}>Plugins de Otimização Essenciais</div>
            <div style={{ fontSize:13, color:DS.fg2 }}>Economize até 90% em tokens e reduza drasticamente seus custos com IA</div>
          </div>
        </div>
      </Callout>
      <Stack gap={8}>
        {plugins.map(p => (
          <Accordion key={p.id} title={p.title} subtitle={p.sub} badges={p.badges}>
            {p.content}
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
}

// ── RAG ────────────────────────────────────────────────────────
function RAGPage() {
  return (
    <Stack gap={16}>
      <PageTitle title="RAG — Retrieval-Augmented Generation" subtitle="Técnicas para enriquecer o contexto do Claude com informações externas relevantes."/>
      <Divider/>
      <Card>
        <CardHeader><CardTitle icon={ICONS.target}>O que é RAG?</CardTitle></CardHeader>
        <CardBody>
          <p style={{ fontSize:13, color:DS.fg2, lineHeight:1.55, marginBottom:14 }}>RAG combina a capacidade generativa do Claude com retrieval de informações relevantes de bases de conhecimento externas. Permite trabalhar com documentação interna, bases de código grandes e dados proprietários sem estourar o contexto.</p>
          <Grid cols={2} gap={10}>
            {[['Documentação interna','Políticas, RFCs, ADRs, wikis de engenharia'],['Codebase grande','Busca semântica em repositórios de milhares de arquivos'],['Dados proprietários','Esquemas de banco, APIs internas, configs'],['Histórico de decisões','Por que certas escolhas técnicas foram feitas']].map(([k,v])=>(
              <div key={k} style={{ padding:'11px', background:'#fafbfd', border:`1px solid ${DS.border}`, borderRadius:DS.rsm }}>
                <div style={{ fontSize:13, fontWeight:600, color:DS.fg1, marginBottom:3 }}>{k}</div>
                <div style={{ fontSize:12, color:DS.fg2 }}>{v}</div>
              </div>
            ))}
          </Grid>
        </CardBody>
      </Card>
      <Card>
        <CardHeader><CardTitle icon={ICONS.zap}>Implementação Básica</CardTitle></CardHeader>
        <CardBody>
          <Terminal comment="# Setup com Context7 MCP" lines={[
            'claude plugin install context7@claude-plugins-official','',
            '# Indexar codebase local','claude index --path ./src --depth 3','',
            '# Usar com busca semântica','@codebase como funciona o sistema de auth?',
          ]}/>
        </CardBody>
      </Card>
    </Stack>
  );
}

// ── ADVANCED ───────────────────────────────────────────────────
function AdvancedPage() {
  return (
    <Stack gap={16}>
      <Card>
        <CardHeader><CardTitle icon={ICONS.rocket}>🚀 Técnicas Avançadas</CardTitle><CardDesc>Para usuários experientes</CardDesc></CardHeader>
        <CardBody>
          <Stack gap={16}>
            {[
              { title:'1. Chain of Prompts', desc:'Em vez de pedir tudo de uma vez, divida em etapas:', steps:["Prompt 1: 'Crie a estrutura básica do componente'",'Prompt 2: "Adicione a lógica de estado"','Prompt 3: "Adicione estilos"','Prompt 4: "Adicione tratamento de erro"'], benefit:'Reduz tokens e permite validar cada etapa antes de prosseguir' },
              { title:'2. Reutilize Estruturas', desc:'Para padrões repetitivos:', steps:['Primeiro componente: Prompt detalhado','Componentes seguintes: "Crie um componente similar ao UserCard mas para Products"','Claude reutiliza a estrutura sem precisar especificar tudo novamente'], benefit:'Economia de 60-80% em prompts repetitivos' },
              { title:'3. Micro-edições com Referências', desc:'Use referências precisas para mudanças pequenas:', steps:["'linha 45: troque primary por secondary'","'função handleSubmit: adicione console.log no início'","'estado loading: inicialize como false'"], benefit:'Economia de 70-90% vs descrições contextuais' },
              { title:'4. Session Management', desc:'Organize conversas por contexto:', steps:['Conversa 1: UI/Components','Conversa 2: Logic/State','Conversa 3: Styling','Conversa 4: Bug fixes'], benefit:'Mantém contexto focado e relevante em cada thread' },
            ].map((t, i) => (
              <div key={i}>
                {i > 0 && <Divider style={{ marginBottom:16 }}/>}
                <div style={{ fontSize:14, fontWeight:600, color:DS.fg1, marginBottom:4 }}>{t.title}</div>
                <div style={{ fontSize:13, color:DS.fg2, marginBottom:10 }}>{t.desc}</div>
                <div style={{ background:'#fafbfd', border:`1px solid ${DS.border}`, borderRadius:DS.rsm, padding:'12px 14px', marginBottom:10 }}>
                  <Stack gap={6}>
                    {t.steps.map((s,si)=>(
                      <div key={si} style={{ display:'flex', gap:8, alignItems:'flex-start' }}>
                        {ICONS.arrow}
                        <span style={{ fontSize:12.5, color:DS.fg2 }}>{s}</span>
                      </div>
                    ))}
                  </Stack>
                </div>
                <Badge variant="brand">{t.benefit}</Badge>
              </div>
            ))}
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader><CardTitle>💡 Dicas Pro</CardTitle></CardHeader>
        <CardBody>
          <Grid cols={2} gap={8}>
            <ProTip emoji="⏱️" tip="Timing" desc="Faça mudanças relacionadas na mesma sessão, mudanças diferentes em sessões novas"/>
            <ProTip emoji="🎨" tip="Estilos" desc="Para múltiplas mudanças de estilo, liste todas de uma vez: 'cor azul, padding 4, borda arredondada'"/>
            <ProTip emoji="🔍" tip="Debug" desc="Ao reportar bugs, inclua apenas: mensagem de erro + linha + o que esperava"/>
            <ProTip emoji="📝" tip="Nomenclatura" desc="Use nomes consistentes. Se chamou de 'Header' antes, não use 'TopBar' depois"/>
            <ProTip emoji="🔄" tip="Iterações" desc="Use 'agora' ou 'em seguida' para indicar mudanças incrementais"/>
            <ProTip emoji="🎯" tip="Foco" desc="Uma tarefa por prompt. Evite 'e também' ou 'além disso'"/>
            <ProTip emoji="📦" tip="Imports" desc="Não mencione imports. Claude adiciona automaticamente"/>
            <ProTip emoji="⚡" tip="Velocidade" desc="Comandos de 3-7 palavras são os mais eficientes"/>
          </Grid>
        </CardBody>
      </Card>

      <Card tint="purple">
        <CardHeader>
          <CardTitle icon={ICONS.sparkles}>Checklist de Otimização</CardTitle>
        </CardHeader>
        <CardBody>
          <Stack gap={6}>
            <CheckItem text="Meu prompt tem menos de 10 palavras?"/>
            <CheckItem text="Estou mencionando apenas 1-2 arquivos/componentes?"/>
            <CheckItem text="Selecionei apenas o código relevante?"/>
            <CheckItem text="Esta conversa tem menos de 10 mensagens?"/>
            <CheckItem text="Meu pedido é uma ação única e clara?"/>
            <CheckItem text="Evitei linguagem casual e fui direto?"/>
            <CheckItem text="Usei referências específicas (linha/função) quando possível?"/>
          </Stack>
          <Callout variant="brand" style={{ marginTop:14 }}>
            <p style={{ fontSize:13, color:DS.fg1 }}><strong>Regra de Ouro:</strong> Se você consegue explicar o que quer em uma frase curta, você está otimizando corretamente. ✨</p>
          </Callout>
        </CardBody>
      </Card>
    </Stack>
  );
}

const PAGES = {
  overview:        OverviewPage,
  recommendations: RecommendationsPage,
  prompts:         PromptsPage,
  context:         ContextPage,
  structure:       StructurePage,
  agents:          AgentsPage,
  skills:          SkillsPage,
  plugins:         PluginsPage,
  rag:             RAGPage,
  advanced:        AdvancedPage,
};

Object.assign(window, { PAGES });
