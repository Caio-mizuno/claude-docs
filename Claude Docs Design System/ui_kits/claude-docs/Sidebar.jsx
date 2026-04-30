// Sidebar.jsx — Claude Docs UI Kit
// Sidebar navigation component

const sidebarStyles = {
  sidebar: {
    width: '240px', flexShrink: 0, background: '#fff',
    borderRight: '1px solid #e2e8f0', display: 'flex',
    flexDirection: 'column', height: '100vh', position: 'sticky', top: 0
  },
  head: { padding: '20px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '10px' },
  logo: { width: 32, height: 32, background: '#9333ea', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  nav: { flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '2px', overflowY: 'auto' },
  navItem: { display: 'flex', alignItems: 'center', gap: '12px', padding: '9px 12px', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'all 150ms ease', textDecoration: 'none' },
  foot: { padding: '14px 16px', borderTop: '1px solid #f1f5f9', textAlign: 'center', fontSize: 12, color: '#94a3b8' }
};

const NAV_ITEMS = [
  { id: 'overview',        label: 'Visão Geral',    icon: 'LayoutDashboard' },
  { id: 'recommendations', label: 'Recomendações',  icon: 'Star' },
  { id: 'prompts',         label: 'Prompts',         icon: 'MessageSquare' },
  { id: 'context',         label: 'Contexto',        icon: 'Layers' },
  { id: 'structure',       label: 'Estrutura',       icon: 'FolderOpen' },
  { id: 'agents',          label: 'Agentes',         icon: 'Bot' },
  { id: 'skills',          label: 'Skills',          icon: 'Wrench' },
  { id: 'plugins',         label: 'Plugins',         icon: 'Puzzle' },
  { id: 'rag',             label: 'RAG',             icon: 'Database' },
  { id: 'advanced',        label: 'Avançado',        icon: 'Rocket' },
];

function NavIcon({ name, color }) {
  const icons = {
    LayoutDashboard: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    Star: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    MessageSquare: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    Layers: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    FolderOpen: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
    Bot: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>,
    Wrench: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    Puzzle: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    Database: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    Rocket: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
    Sparkles: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
  };
  return icons[name] || null;
}

function Sidebar({ active, onNav }) {
  return (
    <aside style={sidebarStyles.sidebar}>
      <div style={sidebarStyles.head}>
        <div style={sidebarStyles.logo}>
          <NavIcon name="Sparkles" color="white" />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>Claude Code</div>
          <div style={{ fontSize: 11, color: '#94a3b8' }}>Guia de Otimização</div>
        </div>
      </div>
      <nav style={sidebarStyles.nav}>
        {NAV_ITEMS.map(item => {
          const isActive = active === item.id;
          return (
            <div
              key={item.id}
              style={{
                ...sidebarStyles.navItem,
                background: isActive ? '#f5f0ff' : 'transparent',
                color: isActive ? '#6d28d9' : '#475569',
              }}
              onClick={() => onNav(item.id)}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#f8fafc'; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
            >
              <NavIcon name={item.icon} color={isActive ? '#9333ea' : '#94a3b8'} />
              {item.label}
            </div>
          );
        })}
      </nav>
      <div style={sidebarStyles.foot}>
        Economize até <strong style={{ color: '#9333ea' }}>70%</strong> em custos
      </div>
    </aside>
  );
}

Object.assign(window, { Sidebar, NavIcon });
