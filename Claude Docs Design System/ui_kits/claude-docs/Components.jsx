// Components.jsx — Shared UI component library
// Professional design system: Inter, refined borders, consistent tokens

const DS = {
  // Colors
  bg:        '#f8fafc',
  surface:   '#ffffff',
  border:    '#e4e7ec',
  borderLight: '#f1f5f9',
  brand:     '#7c3aed',
  brandLight: '#f5f0ff',
  brandMid:  '#ede9fe',
  brandDark: '#5b21b6',
  fg1:       '#101828',
  fg2:       '#475467',
  fg3:       '#98a2b3',
  // Semantic
  green:     '#16a34a', greenBg: '#f0fdf4', greenBorder: '#bbf7d0', greenDark: '#14532d',
  blue:      '#2563eb', blueBg:  '#eff6ff', blueBorder:  '#bfdbfe',
  amber:     '#d97706', amberBg: '#fffbeb', amberBorder: '#fde68a',
  red:       '#dc2626', redBg:   '#fef2f2', redBorder:   '#fecaca',
  // Radius
  r:  '10px', rsm: '7px', rxs: '5px', rpill: '9999px',
};

// ── Base wrappers ──────────────────────────────────────────
function Card({ children, style, tint }) {
  const tints = {
    purple: { background: '#faf7ff', borderColor: '#ddd6fe' },
    green:  { background: '#f7fdf9', borderColor: '#bbf7d0' },
    amber:  { background: '#fffcf0', borderColor: '#fde68a' },
    dark:   { background: '#0f172a', borderColor: '#1e293b' },
  };
  return (
    <div style={{
      background: DS.surface, border: `1px solid ${DS.border}`,
      borderRadius: DS.r, overflow: 'hidden',
      ...(tint ? tints[tint] : {}), ...style
    }}>
      {children}
    </div>
  );
}

function CardHeader({ children, style }) {
  return <div style={{ padding: '18px 22px 14px', ...style }}>{children}</div>;
}

function CardBody({ children, style }) {
  return <div style={{ padding: '0 22px 22px', ...style }}>{children}</div>;
}

function CardTitle({ children, icon, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, ...style }}>
      {icon && <span style={{ flexShrink: 0 }}>{icon}</span>}
      <span style={{ fontSize: 15, fontWeight: 600, color: DS.fg1, letterSpacing: '-0.01em' }}>{children}</span>
    </div>
  );
}

function CardDesc({ children }) {
  return <p style={{ fontSize: 13, color: DS.fg2, lineHeight: 1.5 }}>{children}</p>;
}

function Divider({ style }) {
  return <div style={{ height: 1, background: DS.borderLight, margin: '2px 0', ...style }} />;
}

// ── Badge ─────────────────────────────────────────────────
function Badge({ children, variant = 'default', style }) {
  const variants = {
    default:   { bg: DS.fg1,       color: '#fff',       border: 'none' },
    secondary: { bg: '#f1f5f9',    color: DS.fg2,       border: `1px solid ${DS.border}` },
    outline:   { bg: 'transparent', color: DS.fg2,      border: `1px solid ${DS.border}` },
    brand:     { bg: DS.brandLight, color: DS.brandDark, border: `1px solid ${DS.brandMid}` },
    green:     { bg: DS.greenBg,   color: DS.greenDark, border: `1px solid ${DS.greenBorder}` },
    amber:     { bg: DS.amberBg,   color: '#78350f',    border: `1px solid ${DS.amberBorder}` },
    red:       { bg: DS.redBg,     color: '#7f1d1d',    border: `1px solid ${DS.redBorder}` },
    success:   { bg: '#16a34a',    color: '#fff',       border: 'none' },
  };
  const v = variants[variant] || variants.default;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '2px 9px', borderRadius: DS.rpill,
      fontSize: 11, fontWeight: 600, letterSpacing: '0.01em',
      background: v.bg, color: v.color, border: v.border,
      whiteSpace: 'nowrap', ...style
    }}>
      {children}
    </span>
  );
}

// ── Terminal / Code Block ─────────────────────────────────
function Terminal({ comment, lines, style }) {
  return (
    <div style={{ background: '#0f172a', borderRadius: DS.r, overflow: 'hidden', border: '1px solid #1e293b', ...style }}>
      <div style={{ background: '#1a2234', padding: '8px 12px', display: 'flex', gap: 5, alignItems: 'center' }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => (
          <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
        ))}
      </div>
      <div style={{ padding: '14px 16px' }}>
        {comment && <div style={{ fontSize: 11.5, color: '#4b5563', fontFamily: 'JetBrains Mono, Consolas, monospace', marginBottom: 6 }}>{comment}</div>}
        {lines.map((line, i) => (
          <div key={i} style={{
            fontSize: 12.5, fontFamily: 'JetBrains Mono, Consolas, monospace',
            lineHeight: 1.75,
            color: line.startsWith('#') ? '#4b5563' : line.startsWith('→') || line.startsWith('✓') || line.startsWith('✗') ? '#94a3b8' : '#6ee7b7',
          }}>{line}</div>
        ))}
      </div>
    </div>
  );
}

function InlineCode({ children }) {
  return (
    <code style={{
      background: '#f1f5f9', color: '#334155', border: `1px solid ${DS.border}`,
      fontFamily: 'JetBrains Mono, Consolas, monospace', fontSize: 12,
      padding: '2px 6px', borderRadius: DS.rxs
    }}>{children}</code>
  );
}

// ── Accordion ─────────────────────────────────────────────
function Accordion({ title, subtitle, badges = [], children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ border: `1px solid ${DS.border}`, borderRadius: DS.r, background: DS.surface, overflow: 'hidden' }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{ padding: '14px 18px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, userSelect: 'none' }}
        onMouseEnter={e => e.currentTarget.style.background = '#fafbfd'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: DS.fg1, letterSpacing: '-0.01em' }}>{title}</div>
          {subtitle && <div style={{ fontSize: 12.5, color: DS.fg2, marginTop: 2, lineHeight: 1.4 }}>{subtitle}</div>}
        </div>
        <div style={{ display: 'flex', gap: 5, flexShrink: 0, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {badges.map((b, i) => <Badge key={i} variant={b.v || 'secondary'}>{b.label}</Badge>)}
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={DS.fg3} strokeWidth="2"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '150ms', flexShrink: 0 }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      {open && (
        <div style={{ borderTop: `1px solid ${DS.borderLight}`, padding: '16px 18px' }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ── Section header (h3-level) ──────────────────────────────
function SectionHead({ children, icon, color = DS.brand }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
      {icon && <span style={{ color }}>{icon}</span>}
      <span style={{ fontSize: 14, fontWeight: 600, color: DS.fg1, letterSpacing: '-0.01em' }}>{children}</span>
    </div>
  );
}

// ── Metric row / stat ──────────────────────────────────────
function MetricCard({ title, stat, label, from, to, borderColor, statColor, icon }) {
  return (
    <div style={{ background: `linear-gradient(135deg,${from},${to})`, border: `1px solid ${borderColor}`, borderRadius: DS.r, padding: '18px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: DS.fg1, letterSpacing: '-0.01em' }}>{title}</span>
        {icon}
      </div>
      <div style={{ fontSize: 32, fontWeight: 700, color: statColor, letterSpacing: '-0.03em', lineHeight: 1 }}>{stat}</div>
      <div style={{ fontSize: 12, color: statColor, marginTop: 4, opacity: 0.8 }}>{label}</div>
    </div>
  );
}

// ── Quick win item ─────────────────────────────────────────
function QuickWin({ text, savings }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '11px 14px', background: DS.greenBg, borderRadius: DS.rsm, border: `1px solid ${DS.greenBorder}` }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={DS.green} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 1 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, color: DS.fg1, lineHeight: 1.45, marginBottom: 5 }}>{text}</div>
        <Badge variant="green">{savings}</Badge>
      </div>
    </div>
  );
}

// ── Strategy item (numbered, blue) ────────────────────────
function Strategy({ number, title, desc, impact }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '11px 14px', background: DS.blueBg, borderRadius: DS.rsm, border: `1px solid ${DS.blueBorder}` }}>
      <div style={{ flexShrink: 0, width: 26, height: 26, background: DS.blue, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>{number}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: DS.fg1, marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 12.5, color: DS.fg2, marginBottom: 6, lineHeight: 1.4 }}>{desc}</div>
        <Badge variant="secondary">{impact}</Badge>
      </div>
    </div>
  );
}

// ── Danger item ────────────────────────────────────────────
function DangerItem({ text }) {
  return (
    <div style={{ padding: '9px 12px', background: DS.redBg, borderRadius: DS.rsm, border: `1px solid ${DS.redBorder}`, fontSize: 13, color: DS.fg1 }}>
      {text}
    </div>
  );
}

// ── Pro tip card ───────────────────────────────────────────
function ProTip({ emoji, tip, desc }) {
  return (
    <div style={{ background: '#fafbfd', border: `1px solid ${DS.border}`, borderRadius: DS.rsm, padding: '13px 15px' }}>
      <div style={{ fontSize: 20, marginBottom: 7 }}>{emoji}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: DS.fg1, marginBottom: 4 }}>{tip}</div>
      <div style={{ fontSize: 12.5, color: DS.fg2, lineHeight: 1.45 }}>{desc}</div>
    </div>
  );
}

// ── Checklist ─────────────────────────────────────────────
function CheckItem({ text }) {
  const [checked, setChecked] = React.useState(false);
  return (
    <div
      onClick={() => setChecked(c => !c)}
      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: DS.surface, border: `1px solid ${checked ? DS.brandMid : DS.border}`, borderRadius: DS.rsm, cursor: 'pointer', transition: 'border-color 150ms' }}
    >
      <div style={{ width: 16, height: 16, border: `2px solid ${checked ? DS.brand : DS.border}`, borderRadius: 4, background: checked ? DS.brand : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 150ms' }}>
        {checked && <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2"><polyline points="2 6 5 9 10 3"/></svg>}
      </div>
      <span style={{ fontSize: 13, color: DS.fg1 }}>{text}</span>
    </div>
  );
}

// ── Highlight callout ──────────────────────────────────────
function Callout({ children, variant = 'brand' }) {
  const styles = {
    brand:  { bg: '#faf7ff', border: DS.brandMid },
    green:  { bg: '#f7fdf9', border: DS.greenBorder },
    dark:   { bg: '#f8fafc', border: DS.border },
  };
  const s = styles[variant] || styles.brand;
  return (
    <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: DS.r, padding: '14px 16px' }}>
      {children}
    </div>
  );
}

// ── Page title ─────────────────────────────────────────────
function PageTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 6 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, color: DS.fg1, letterSpacing: '-0.025em', marginBottom: 6 }}>{title}</h1>
      {subtitle && <p style={{ fontSize: 14, color: DS.fg2, lineHeight: 1.55 }}>{subtitle}</p>}
    </div>
  );
}

// ── Benefit item (icon + title + desc) ────────────────────
function BenefitItem({ icon, title, desc }) {
  return (
    <div style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: `1px solid ${DS.borderLight}` }}>
      <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{icon}</span>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: DS.fg1, marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 12.5, color: DS.fg2, lineHeight: 1.4 }}>{desc}</div>
      </div>
    </div>
  );
}

// ── External link ──────────────────────────────────────────
function ExtLink({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: DS.brand, fontWeight: 500, textDecoration: 'none' }}
      onMouseEnter={e => e.currentTarget.style.color = DS.brandDark}
      onMouseLeave={e => e.currentTarget.style.color = DS.brand}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      {label}
    </a>
  );
}

// ── Gap container ──────────────────────────────────────────
function Stack({ gap = 12, children, style }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap, ...style }}>{children}</div>;
}

// ── Grid ───────────────────────────────────────────────────
function Grid({ cols = 2, gap = 12, children, style }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap, ...style }}>
      {children}
    </div>
  );
}

// ── Step header (numbered) ─────────────────────────────────
function StepHead({ n, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <div style={{ width: 24, height: 24, background: DS.green, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{n}</div>
      <span style={{ fontSize: 13, fontWeight: 600, color: DS.fg1, letterSpacing: '-0.01em' }}>{children}</span>
    </div>
  );
}

// ── Icon helpers ───────────────────────────────────────────
function Icon({ d, color = DS.brand, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {typeof d === 'string' ? <path d={d}/> : d}
    </svg>
  );
}

const ICONS = {
  sparkles: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
  target:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  zap:      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  check:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  x:        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
  lightbulb:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>,
  file:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  arrow:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  bot:      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>,
  wrench:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  gauge:    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>,
  trending: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  dollar:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  external: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
};

Object.assign(window, {
  DS, Card, CardHeader, CardBody, CardTitle, CardDesc, Divider,
  Badge, Terminal, InlineCode, Accordion, SectionHead,
  MetricCard, QuickWin, Strategy, DangerItem, ProTip, CheckItem,
  Callout, PageTitle, BenefitItem, ExtLink, Stack, Grid, StepHead,
  Icon, ICONS
});
