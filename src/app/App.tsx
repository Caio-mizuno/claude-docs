import { useState } from "react";
import { Routes, Route } from "react-router";
import { Menu, Sparkles } from "lucide-react";
import { Sidebar } from "./components/layout/Sidebar";
import { Footer } from "./components/layout/Footer";
import { OverviewTab } from "./components/tabs/OverviewTab";
import { PromptsTab } from "./components/tabs/PromptsTab";
import { ContextTab } from "./components/tabs/ContextTab";
import { StructureTab } from "./components/StructureTab";
import { AdvancedTab } from "./components/tabs/AdvancedTab";
import { AgentsPage } from "./pages/AgentsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { RAGPage } from "./pages/RAGPage";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Mobile backdrop overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="flex-1 overflow-auto min-w-0">
        {/* Mobile header */}
        <div className="md:hidden sticky top-0 z-20 bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-slate-900 text-sm">Claude Code</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto p-4 md:p-6">
          <Routes>
            <Route path="/" element={<OverviewTab />} />
            <Route path="/prompts" element={<PromptsTab />} />
            <Route path="/context" element={<ContextTab />} />
            <Route path="/structure" element={<StructureTab />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/rag" element={<RAGPage />} />
            <Route path="/advanced" element={<AdvancedTab />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </div>
  );
}
