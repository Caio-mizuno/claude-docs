import { NavLink } from "react-router";
import {
  Sparkles,
  LayoutDashboard,
  MessageSquare,
  Layers,
  FolderOpen,
  Bot,
  Wrench,
  Rocket,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Visão Geral", icon: LayoutDashboard },
  { to: "/prompts", label: "Prompts", icon: MessageSquare },
  { to: "/context", label: "Contexto", icon: Layers },
  { to: "/structure", label: "Estrutura", icon: FolderOpen },
  { to: "/agents", label: "Agentes", icon: Bot },
  { to: "/skills", label: "Skills", icon: Wrench },
  { to: "/advanced", label: "Avançado", icon: Rocket },
];

export function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-white border-r border-slate-200 flex flex-col flex-shrink-0">
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm leading-tight">Claude Code</p>
            <p className="text-xs text-slate-500">Guia de Otimização</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-0.5">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-purple-50 text-purple-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-purple-600" : "text-slate-400"}`}
                />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <p className="text-xs text-slate-400 text-center">
          Economize até <span className="font-semibold text-purple-600">70%</span> em custos
        </p>
      </div>
    </aside>
  );
}
