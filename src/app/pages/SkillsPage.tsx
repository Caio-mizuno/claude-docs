import { SkillSection } from "../components/structure/SkillSection";
import { CreateSkillSection } from "../components/structure/CreateSkillSection";

export function SkillsPage() {
  return (
    <div className="space-y-4">
      <SkillSection />
      <CreateSkillSection />
    </div>
  );
}
