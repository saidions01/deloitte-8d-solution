import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, FileText } from "lucide-react";
import { EightDFormData } from "../EightDForm";

export function NextSteps() {
  const { register } = useFormContext<EightDFormData>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">Next Steps</h3>
        <p className="text-sm text-muted-foreground">
          Define any follow-up actions or continuous improvement activities.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="nextSteps" className="text-sm font-medium">
            Describe your next steps
          </Label>
          <Textarea
            id="nextSteps"
            placeholder="Outline any follow-up actions, monitoring activities, or continuous improvement plans..."
            {...register("nextSteps")}
            rows={6}
          />
        </div>

        <div className="bg-accent/20 border border-accent/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">8D Report Summary</h4>
              <p className="text-sm text-muted-foreground">
                You've completed all sections of the 8D report. Review your responses and click "Submit Report" to save your data to Google Sheets.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <FileText className="h-4 w-4" />
                <span>Report ready for submission</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}