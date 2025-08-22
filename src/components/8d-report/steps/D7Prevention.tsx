import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { EightDFormData } from "../EightDForm";

export function D7Prevention() {
  const { register, formState: { errors }, setValue, watch } = useFormContext<EightDFormData>();
  const isCompleted = watch("preventionCompleted");

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">D7: Preventing Recurrent Problem</h3>
        <p className="text-sm text-muted-foreground">
          Implement systemic improvements to prevent similar problems from occurring again.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="preventionAction" className="text-sm font-medium">
            Name and Describe the action *
          </Label>
          <Textarea
            id="preventionAction"
            placeholder="Describe the actions to prevent recurrence..."
            {...register("preventionAction", { required: "Prevention action is required" })}
            className={errors.preventionAction ? "border-destructive" : ""}
          />
          {errors.preventionAction && (
            <p className="text-sm text-destructive">{errors.preventionAction.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="preventionCause" className="text-sm font-medium">
            Cause *
          </Label>
          <Textarea
            id="preventionCause"
            placeholder="Which cause is this prevention action addressing..."
            {...register("preventionCause", { required: "Cause is required" })}
            className={errors.preventionCause ? "border-destructive" : ""}
          />
          {errors.preventionCause && (
            <p className="text-sm text-destructive">{errors.preventionCause.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="preventionResponsibility" className="text-sm font-medium">
            Responsibility *
          </Label>
          <Input
            id="preventionResponsibility"
            placeholder="Who is responsible for this prevention action..."
            {...register("preventionResponsibility", { required: "Responsibility is required" })}
            className={errors.preventionResponsibility ? "border-destructive" : ""}
          />
          {errors.preventionResponsibility && (
            <p className="text-sm text-destructive">{errors.preventionResponsibility.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Completed? *</Label>
          <RadioGroup
            value={isCompleted ? "yes" : "no"}
            onValueChange={(value) => setValue("preventionCompleted", value === "yes")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="completed-yes" />
              <Label htmlFor="completed-yes" className="text-sm font-normal cursor-pointer">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="completed-no" />
              <Label htmlFor="completed-no" className="text-sm font-normal cursor-pointer">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="preventionCompletionDate" className="text-sm font-medium">
            Completion date *
          </Label>
          <Input
            id="preventionCompletionDate"
            type="date"
            {...register("preventionCompletionDate", { required: "Completion date is required" })}
            className={errors.preventionCompletionDate ? "border-destructive" : ""}
          />
          {errors.preventionCompletionDate && (
            <p className="text-sm text-destructive">{errors.preventionCompletionDate.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="preventionDocumentation" className="text-sm font-medium">
            Required documentation *
          </Label>
          <Textarea
            id="preventionDocumentation"
            placeholder="Documentation required for prevention actions..."
            {...register("preventionDocumentation", { required: "Documentation requirements are required" })}
            className={errors.preventionDocumentation ? "border-destructive" : ""}
          />
          {errors.preventionDocumentation && (
            <p className="text-sm text-destructive">{errors.preventionDocumentation.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}