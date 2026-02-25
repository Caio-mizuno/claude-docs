import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { OverviewTab } from "./components/tabs/OverviewTab";
import { PromptsTab } from "./components/tabs/PromptsTab";
import { ContextTab } from "./components/tabs/ContextTab";
import { StructureTab } from "./components/StructureTab";
import { AdvancedTab } from "./components/tabs/AdvancedTab";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <Header />

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="prompts">Prompts</TabsTrigger>
            <TabsTrigger value="context">Contexto</TabsTrigger>
            <TabsTrigger value="structure">Estrutura</TabsTrigger>
            <TabsTrigger value="advanced">Avançado</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <OverviewTab />
          </TabsContent>
          <TabsContent value="prompts">
            <PromptsTab />
          </TabsContent>
          <TabsContent value="context">
            <ContextTab />
          </TabsContent>
          <TabsContent value="structure">
            <StructureTab />
          </TabsContent>
          <TabsContent value="advanced">
            <AdvancedTab />
          </TabsContent>
        </Tabs>

        <Footer />
      </div>
    </div>
  );
}
