import { AgentsSection } from "../components/structure/AgentsSection";
import { AgentsTutorialSection } from "../components/agents/AgentsTutorialSection";
import { AgentsExamplesSection } from "../components/agents/AgentsExamplesSection";
import { AgentsTokenSavingsSection } from "../components/agents/AgentsTokenSavingsSection";
import { CreateAgentSection } from "../components/structure/CreateAgentSection";

export function AgentsPage() {
  return (
    <div className="space-y-4">
      <AgentsSection />
      <AgentsTutorialSection />
      <AgentsExamplesSection />
      <AgentsTokenSavingsSection />
      <CreateAgentSection />
    </div>
  );
}
