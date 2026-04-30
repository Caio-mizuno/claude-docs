// PageLayouts.jsx — Claude Docs UI Kit
// All 10 page content components

const iconSvg = (d, color='#9333ea') => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">{d}</svg>
);

const icons = {
  target:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  lightbulb: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>,
  check:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  x:         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
  zap:       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  file:      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  msg:       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  bot:       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>,
  sparkles:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
  rocket:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>,
  database:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
};

const space = (n) => ({ marginBottom: n });
const gap = (n) => ({ display: 'flex', flexDirection: 'column', gap: n });

function PageTitle({ title, sub }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: 6 }}>{title}</h1>
      {sub && <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.5 }}>{sub}</p>}
    </div>
  );
}

// ── OVERVIEW ─────────────────────────────────────────────
function OverviewPage() {
  return (
    <div style={gap(16)}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        <MetricCard title="Performance" value="+85%" label="Melhoria esperada"
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>}
          from="#f0fdf4" to="#ecfdf5" borderColor="#bbf7d0" textColor="#15803d" />
        <MetricCard title="Redução de Tokens" value="-60%" label="Economia de tokens"
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>}
          from="#eff6ff" to="#e0f2fe" borderColor="#bfdbfe" textColor="#1d4ed8" />
        <MetricCard title="Custo" value="-70%" label="Redução de custos"
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
          from="#fefce8" to="#fffbeb" borderColor="#fde68a" textColor="#a16207" />
      </div>

      <SectionCard title="Princípios Fundamentais" description="Os 3 pilares para otimizar seu uso do Claude Code" icon={icons.target}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          <PrincipleCard icon={icons.zap} number="1" title="Seja Específico" desc="Prompts claros e diretos reduzem iterações desnecessárias" bg="#faf5ff" border="#e9d5ff" iconColor="#9333ea" />
          <PrincipleCard icon={icons.file} number="2" title="Minimize Contexto" desc="Envie apenas o código relevante para a tarefa" bg="#eff6ff" border="#bfdbfe" iconColor="#2563eb" />
          <PrincipleCard icon={icons.msg} number="3" title="Use Iterações" desc="Faça mudanças incrementais em vez de reescrever tudo" bg="#f0fdf4" border="#bbf7d0" iconColor="#16a34a" />
        </div>
      </SectionCard>

      <SectionCard title="Quick Wins — Ganhos Rápidos" icon={icons.lightbulb}>
        <div style={gap(8)}>
          <QuickWin text="Use seleção de código em vez de mencionar arquivos inteiros" savings="Economia: 80-90% de tokens" />
          <QuickWin text="Feche conversas antigas e inicie novas para tarefas distintas" savings="Reduz contexto acumulado" />
          <QuickWin text="Use comandos imperativos curtos: 'Adicione validação' vs 'Por favor, você poderia...'" savings="Economia: 30-40% em tokens de prompt" />
          <QuickWin text="Especifique o escopo: 'apenas este componente' ou 'só a função login'" savings="Evita mudanças desnecessárias" />
        </div>
      </SectionCard>
    </div>
  );
}

// ── RECOMMENDATIONS ───────────────────────────────────────
function RecommendationsPage() {
  return (
    <div style={gap(16)}>
      <PageTitle title="Recomendações Atuais" sub="Configurações e workflows recomendados para máxima performance e economia com Claude Code." />
      <Separator />
      <div style={{ background: 'rgba(250,245,255,0.5)', border: '1px solid #e9d5ff', borderRadius: 10, padding: '14px 16px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        {icons.sparkles}
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>Workflow Otimizado 2026</div>
          <div style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>Stack completo de plugins + prompt especializado para desenvolvimento de alta qualidade</div>
        </div>
        <span style={{ marginLeft: 'auto', background: '#ececf0', color: '#030213', fontSize: 11, fontWeight: 500, padding: '2px 9px', borderRadius: 9999, flexShrink: 0 }}>Recomendado</span>
      </div>
      <AccordionItem title="Claude Code — Workflow Completo" subtitle="Setup otimizado: plugins essenciais + prompt especializado para tarefas complexas" badge="Recomendado">
        <div style={gap(14)} >
          <div style={{ paddingTop: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>{icons.check} Etapa 1: Instalar Plugins Essenciais</div>
            <CodeBlock comment="# Claude-Mem (memória persistente)" lines={['npx claude-mem install', '', '# RTK (60-90% economia de tokens)', 'brew install rtk', '', '# Caveman (75% redução output)', 'claude plugin install caveman@caveman']} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>{icons.check} Etapa 4: Executar Prompt Especializado</div>
            <CodeBlock lines={['/caveman ultra', 'use caveman ultra', '@task.md siga estas instruções utilizando agentes e skills', '- crie um plano de ação especializado', '- refatore buscando performance e segurança']} />
          </div>
        </div>
      </AccordionItem>
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '14px 16px' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#15803d', marginBottom: 10 }}>Resultados Esperados</div>
        {[
          'Economia de 70-85% em custos de tokens',
          'Respostas 3x mais rápidas com Caveman Ultra',
          'Contexto persistente, zero retrabalho entre sessões',
          'Code review automático detecta bugs antes commit',
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            {icons.check}
            <span style={{ fontSize: 13, color: '#166534' }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CONTEXT ───────────────────────────────────────────────
function ContextPage() {
  return (
    <div style={gap(16)}>
      <SectionCard title="Gestão de Contexto" description="Como controlar o que Claude 'vê'" icon={icons.sparkles}>
        <div style={gap(8)}>
          <ContextStrategy number="1" title="Use Seleção de Código" description="Selecione apenas as linhas relevantes em vez de mencionar o arquivo inteiro" impact="🔥 Economia: 80-95% de tokens" />
          <ContextStrategy number="2" title="Feche Conversas Longas" description="Após 10-15 interações, inicie uma nova conversa. O histórico acumula tokens." impact="💰 Economia: 50-70% por mensagem" />
          <ContextStrategy number="3" title="Evite @mentions Desnecessários" description="Não mencione múltiplos arquivos. Claude pode inferir dependências do código selecionado." impact="⚡ Economia: 40-60% de tokens" />
          <ContextStrategy number="4" title="Descreva em vez de Colar" description="Para referências externas, descreva a API em vez de colar documentação completa" impact="📉 Economia: 70-90% de tokens" />
        </div>
      </SectionCard>
      <SectionCard title="Antes vs Depois" icon={icons.target}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ border: '2px solid #fecaca', background: '#fef2f2', borderRadius: 8, padding: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#b91c1c', marginBottom: 8, display: 'flex', gap: 6 }}>{icons.x} Antes (Ineficiente)</div>
            {['Mensagem com 5 arquivos mencionados', 'Contexto: toda a conversa anterior', '~8.000 tokens'].map((t, i) => (
              <div key={i} style={{ background: '#fff', padding: '6px 8px', borderRadius: 6, fontSize: 12, color: '#475569', marginBottom: 4 }}>{t}</div>
            ))}
            <div style={{ fontSize: 12, fontWeight: 700, color: '#b91c1c', marginTop: 6 }}>Total: ~8.000 tokens</div>
          </div>
          <div style={{ border: '2px solid #bbf7d0', background: '#f0fdf4', borderRadius: 8, padding: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#15803d', marginBottom: 8, display: 'flex', gap: 6 }}>{icons.check} Depois (Otimizado)</div>
            {['Mensagem: "Adicione validação de email"', 'Apenas linhas 23-45 selecionadas', 'Nova conversa focada'].map((t, i) => (
              <div key={i} style={{ background: '#fff', padding: '6px 8px', borderRadius: 6, fontSize: 12, color: '#475569', marginBottom: 4 }}>{t}</div>
            ))}
            <div style={{ fontSize: 12, fontWeight: 700, color: '#15803d', marginTop: 6 }}>Total: ~500 tokens</div>
          </div>
        </div>
        <div style={{ marginTop: 12, padding: '10px 14px', background: 'linear-gradient(90deg,#f0fdf4,#ecfdf5)', borderRadius: 8, border: '1px solid #bbf7d0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>Economia neste exemplo:</span>
          <span style={{ background: '#16a34a', color: '#fff', fontSize: 14, fontWeight: 600, padding: '4px 14px', borderRadius: 9999 }}>93.75% (~16x mais barato)</span>
        </div>
      </SectionCard>
    </div>
  );
}

// ── GENERIC PLACEHOLDER PAGE ──────────────────────────────
function PlaceholderPage({ title, sub, icon }) {
  return (
    <div style={gap(16)}>
      <PageTitle title={title} sub={sub} />
      <Separator />
      <div style={{ border: '1px dashed #e2e8f0', borderRadius: 10, padding: '40px 24px', textAlign: 'center', background: '#fff' }}>
        <div style={{ marginBottom: 12 }}>{icon}</div>
        <div style={{ fontSize: 13, color: '#94a3b8' }}>Conteúdo completo disponível em</div>
        <div style={{ fontSize: 13, color: '#9333ea', fontWeight: 500, marginTop: 4 }}>generic-ia-docs.netlify.app</div>
      </div>
    </div>
  );
}

function PromptsPage()     { return <PlaceholderPage title="Prompts" sub="Técnicas de prompting + exemplos práticos para Claude Code." icon={icons.msg} />; }
function StructurePage()   { return <PlaceholderPage title="Estrutura" sub="CLAUDE.md e boas práticas para organização de projetos." icon={icons.file} />; }
function AgentsPage()      { return <PlaceholderPage title="Agentes" sub="Agentes disponíveis e como usá-los para tarefas paralelas." icon={icons.bot} />; }
function SkillsPage()      { return <PlaceholderPage title="Skills" sub="Skills disponíveis com exemplos de uso e configuração." icon={icons.sparkles} />; }
function PluginsPage()     { return <PlaceholderPage title="Plugins" sub="Plugins e extensões para maximizar a eficiência." icon={icons.rocket} />; }
function RAGPage()         { return <PlaceholderPage title="RAG" sub="Retrieval-Augmented Generation e técnicas avançadas." icon={icons.database} />; }
function AdvancedPage()    { return <PlaceholderPage title="Avançado" sub="Técnicas pro e otimização de performance." icon={icons.rocket} />; }

const PAGE_MAP = {
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

Object.assign(window, { PAGE_MAP });
