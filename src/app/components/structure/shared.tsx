export function BenefitItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
    </div>
  );
}

interface StepByStepProps {
  number: string;
  title: string;
  description: string;
  examples?: string[];
}

export function StepByStep({ number, title, description, examples }: StepByStepProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
          {number}
        </div>
        <div>
          <h4 className="font-semibold text-sm">{title}</h4>
          <p className="text-xs text-slate-600">{description}</p>
        </div>
      </div>
      {examples && (
        <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
          {examples.map((example, index) => (
            <div key={index} className="text-xs text-slate-700">
              - {example}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
