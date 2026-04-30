// Cards.jsx — Claude Docs UI Kit
// Shared card and content components

const C = {
  card: { background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, overflow: 'hidden' },
  cardHeader: { padding: '16px 20px 12px' },
  cardContent: { padding: '0 20px 20px' },
  cardTitle: { fontSize: 15, fontWeight: 600, color: '#0f172a', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 },
  cardDesc: { fontSize: 13, color: '#64748b' },
  badge: (bg, color, border) => ({
    display: 'inline-flex', alignItems: 'center', padding: '2px 9px',
    borderRadius: 9999, fontSize: 11, fontWeight: 500,
    background: bg, color, border: border ? `1px solid ${border}` : 'none'
  }),
};

// ── Metric Card ──────────────────────────────────────────
function MetricCard({ title, value, label, icon, from, to, borderColor, textColor }) {
  return (
    <div style={{ ...C.card, background: `linear-gradient(135deg, ${from}, ${to})`, borderColor }}>
      <div style={C.cardHeader}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>{title}</div>
          {icon}
        </div>
      </div>
      <div style={C.cardContent}>
        <div style={{ fontSize: 32, fontWeight: 700, color: textColor }}>{value}</div>
        <div style={{ fontSize: 12, color: textColor, marginTop: 2, opacity: 0.85 }}>{label}</div>
      </div>
    </div>
  );
}

// ── Quick Win item ────────────────────────────────────────
function QuickWin({ text, savings }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '10px 12px', background: '#f0fdf4', borderRadius: 8, border: '1px solid #bbf7d0' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, color: '#1e293b' }}>{text}</div>
        <span style={{ ...C.badge('#f0fdf4', '#15803d', '#bbf7d0'), marginTop: 5, display: 'inline-flex' }}>{savings}</span>
      </div>
    </div>
  );
}

// ── Principle Card ────────────────────────────────────────
function PrincipleCard({ icon, number, title, desc, bg, border, iconColor }) {
  return (
    <div style={{ padding: '14px 16px', borderRadius: 8, background: bg, border: `1px solid ${border}` }}>
      <div style={{ marginBottom: 8 }}>{icon}</div>
      <div style={{ fontWeight: 600, fontSize: 14, color: '#0f172a', marginBottom: 4 }}>{number}. {title}</div>
      <div style={{ fontSize: 13, color: '#475569' }}>{desc}</div>
    </div>
  );
}

// ── Context Strategy ─────────────────────────────────────
function ContextStrategy({ number, title, description, impact }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '10px 12px', background: '#eff6ff', borderRadius: 8, border: '1px solid #bfdbfe' }}>
      <div style={{ flexShrink: 0, width: 28, height: 28, background: '#2563eb', color: '#fff', borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>{number}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 13, color: '#0f172a', marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 12, color: '#475569', marginBottom: 6 }}>{description}</div>
        <span style={C.badge('#2563eb', '#fff')}>{impact}</span>
      </div>
    </div>
  );
}

// ── Code Block ───────────────────────────────────────────
function CodeBlock({ comment, lines }) {
  return (
    <div style={{ background: '#0f172a', borderRadius: 10, padding: '14px 16px' }}>
      {comment && <div style={{ fontSize: 11, color: '#94a3b8', fontFamily: 'monospace', marginBottom: 6 }}>{comment}</div>}
      {lines.map((line, i) => (
        <div key={i} style={{ fontSize: 13, color: '#4ade80', fontFamily: 'monospace', lineHeight: 1.7 }}>{line}</div>
      ))}
    </div>
  );
}

// ── Section Card wrapper ─────────────────────────────────
function SectionCard({ title, description, icon, children, tintBg, tintBorder }) {
  const style = tintBg
    ? { ...C.card, background: tintBg, borderColor: tintBorder }
    : C.card;
  return (
    <div style={style}>
      <div style={C.cardHeader}>
        {title && <div style={C.cardTitle}>{icon}{title}</div>}
        {description && <div style={C.cardDesc}>{description}</div>}
      </div>
      <div style={C.cardContent}>{children}</div>
    </div>
  );
}

// ── Accordion Item ───────────────────────────────────────
function AccordionItem({ title, subtitle, badge, children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 10, background: '#fff', overflow: 'hidden' }}>
      <div
        style={{ padding: '14px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}
        onClick={() => setOpen(o => !o)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2" style={{ flexShrink: 0 }}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>{title}</div>
          {subtitle && <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{subtitle}</div>}
        </div>
        {badge && <span style={C.badge('#ececf0', '#030213')}>{badge}</span>}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '150ms' }}><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      {open && <div style={{ padding: '0 16px 16px', borderTop: '1px solid #f1f5f9' }}>{children}</div>}
    </div>
  );
}

// ── Separator ────────────────────────────────────────────
function Separator() {
  return <div style={{ height: 1, background: '#e2e8f0', margin: '4px 0' }}></div>;
}

Object.assign(window, { MetricCard, QuickWin, PrincipleCard, ContextStrategy, CodeBlock, SectionCard, AccordionItem, Separator, C });
