import { Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ClaudeMdSection } from "./structure/ClaudeMdSection";
import { AgentsSection } from "./structure/AgentsSection";
import { SkillSection } from "./structure/SkillSection";
import { HowItWorksSection } from "./structure/HowItWorksSection";
import { GettingStartedSection } from "./structure/GettingStartedSection";
import { CreateAgentSection } from "./structure/CreateAgentSection";
import { CreateSkillSection } from "./structure/CreateSkillSection";

export function StructureTab() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            Por que usar CLAUDE.md + /agents + /skill?
          </CardTitle>
          <CardDescription>
            Organize seu projeto para maximizar a eficiência do Claude
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200 mb-6">
            <p className="text-slate-700">
              Essa estrutura reduz <strong>drasticamente</strong> a necessidade de explicar contexto em cada prompt,
              permitindo que Claude entenda seu projeto de forma automática e consistente.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Badge className="bg-purple-600 text-white">Economia: 70-90% de tokens</Badge>
              <Badge className="bg-blue-600 text-white">Respostas mais precisas</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <ClaudeMdSection />
      <AgentsSection />
      <SkillSection />
      <HowItWorksSection />
      <GettingStartedSection />
      <CreateAgentSection />
      <CreateSkillSection />
    </div>
  );
}
