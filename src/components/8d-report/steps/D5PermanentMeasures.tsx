import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { EightDFormData } from "../EightDForm";

export function D5PermanentMeasures() {
  const { register, formState: { errors } } = useFormContext<EightDFormData>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">D5: Determination of Permanent Corrective Measures</h3>
        <p className="text-sm text-muted-foreground">
          Define permanent corrective actions to eliminate the root cause and prevent recurrence.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="measureName" className="text-sm font-medium">
            Name and description of measure *
          </Label>
          <Textarea
            id="measureName"
            placeholder="Describe the permanent corrective measures..."
            {...register("measureName", { required: "Measure description is required" })}
            className={errors.measureName ? "border-destructive" : ""}
          />
          {errors.measureName && (
            <p className="text-sm text-destructive">{errors.measureName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="measureNotes" className="text-sm font-medium">
            Notes to measure
          </Label>
          <Textarea
            id="measureNotes"
            placeholder="Additional notes or considerations for the measure..."
            {...register("measureNotes")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="measureCause" className="text-sm font-medium">
            Cause *
          </Label>
          <Textarea
            id="measureCause"
            placeholder="Which root cause does this measure address..."
            {...register("measureCause", { required: "Cause is required" })}
            className={errors.measureCause ? "border-destructive" : ""}
          />
          {errors.measureCause && (
            <p className="text-sm text-destructive">{errors.measureCause.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="measureResponsibility" className="text-sm font-medium">
            Responsibility *
          </Label>
          <Input
            id="measureResponsibility"
            placeholder="Who is responsible for implementing this measure..."
            {...register("measureResponsibility", { required: "Responsibility is required" })}
            className={errors.measureResponsibility ? "border-destructive" : ""}
          />
          {errors.measureResponsibility && (
            <p className="text-sm text-destructive">{errors.measureResponsibility.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="measureCompletionDate" className="text-sm font-medium">
            Completion date *
          </Label>
          <Input
            id="measureCompletionDate"
            type="date"
            {...register("measureCompletionDate", { required: "Completion date is required" })}
            className={errors.measureCompletionDate ? "border-destructive" : ""}
          />
          {errors.measureCompletionDate && (
            <p className="text-sm text-destructive">{errors.measureCompletionDate.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}