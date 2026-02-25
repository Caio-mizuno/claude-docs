import { Routes, Route } from "react-router";
import { Sidebar } from "./components/layout/Sidebar";
import { Footer } from "./components/layout/Footer";
import { OverviewTab } from "./components/tabs/OverviewTab";
import { PromptsTab } from "./components/tabs/PromptsTab";
import { ContextTab } from "./components/tabs/ContextTab";
import { StructureTab } from "./components/StructureTab";
import { AdvancedTab } from "./components/tabs/AdvancedTab";
import { AgentsPage } from "./pages/AgentsPage";
import { SkillsPage } from "./pages/SkillsPage";

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<OverviewTab />} />
            <Route path="/prompts" element={<PromptsTab />} />
            <Route path="/context" element={<ContextTab />} />
            <Route path="/structure" element={<StructureTab />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/advanced" element={<AdvancedTab />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </div>
  );
}
