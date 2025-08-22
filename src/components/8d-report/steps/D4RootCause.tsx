import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { EightDFormData } from "../EightDForm";

export function D4RootCause() {
  const { register, formState: { errors }, watch, setValue } = useFormContext<EightDFormData>();
  const currentMethod = watch("analysisMethod");

  const handleMethodChange = (method: string, checked: boolean) => {
    if (checked) {
      const methods = currentMethod ? currentMethod.split(", ") : [];
      if (!methods.includes(method)) {
        methods.push(method);
        setValue("analysisMethod", methods.join(", "));
      }
    } else {
      const methods = currentMethod ? currentMethod.split(", ") : [];
      const updatedMethods = methods.filter(m => m !== method);
      setValue("analysisMethod", updatedMethods.join(", "));
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">D4: Defining and Analyzing of the Root Causes</h3>
        <p className="text-sm text-muted-foreground">
          Identify and verify the root cause(s) of the problem using appropriate analysis methods.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Methods *</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="ishikawa"
                checked={currentMethod?.includes("Ishikawa") || false}
                onCheckedChange={(checked) => handleMethodChange("Ishikawa", !!checked)}
              />
              <Label htmlFor="ishikawa" className="text-sm font-normal cursor-pointer">
                Ishikawa
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="fiveWhy"
                checked={currentMethod?.includes("5 Why") || false}
                onCheckedChange={(checked) => handleMethodChange("5 Why", !!checked)}
              />
              <Label htmlFor="fiveWhy" className="text-sm font-normal cursor-pointer">
                5 Why
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="other"
                checked={currentMethod?.includes("Other") || false}
                onCheckedChange={(checked) => handleMethodChange("Other", !!checked)}
              />
              <Label htmlFor="other" className="text-sm font-normal cursor-pointer">
                Other
              </Label>
            </div>
          </div>
          <input
            type="hidden"
            {...register("analysisMethod", { required: "At least one analysis method is required" })}
          />
          {errors.analysisMethod && (
            <p className="text-sm text-destructive">{errors.analysisMethod.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="analysisResponsibility" className="text-sm font-medium">
            Responsibility *
          </Label>
          <Input
            id="analysisResponsibility"
            placeholder="Who is responsible for the root cause analysis..."
            {...register("analysisResponsibility", { required: "Responsibility is required" })}
            className={errors.analysisResponsibility ? "border-destructive" : ""}
          />
          {errors.analysisResponsibility && (
            <p className="text-sm text-destructive">{errors.analysisResponsibility.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="nonDetectionCause" className="text-sm font-medium">
            Root cause of non-detection *
          </Label>
          <Textarea
            id="nonDetectionCause"
            placeholder="Why was the problem not detected earlier..."
            {...register("nonDetectionCause", { required: "Non-detection cause is required" })}
            className={errors.nonDetectionCause ? "border-destructive" : ""}
          />
          {errors.nonDetectionCause && (
            <p className="text-sm text-destructive">{errors.nonDetectionCause.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="occurrenceCause" className="text-sm font-medium">
            Root cause of the occurrence *
          </Label>
          <Textarea
            id="occurrenceCause"
            placeholder="Why did the problem occur in the first place..."
            {...register("occurrenceCause", { required: "Occurrence cause is required" })}
            className={errors.occurrenceCause ? "border-destructive" : ""}
          />
          {errors.occurrenceCause && (
            <p className="text-sm text-destructive">{errors.occurrenceCause.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="otherCause" className="text-sm font-medium">
            Other
          </Label>
          <Textarea
            id="otherCause"
            placeholder="Any other root causes identified..."
            {...register("otherCause")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="analysisDocumentation" className="text-sm font-medium">
            Required documentation *
          </Label>
          <Textarea
            id="analysisDocumentation"
            placeholder="Documentation required for root cause analysis..."
            {...register("analysisDocumentation", { required: "Documentation requirements are required" })}
            className={errors.analysisDocumentation ? "border-destructive" : ""}
          />
          {errors.analysisDocumentation && (
            <p className="text-sm text-destructive">{errors.analysisDocumentation.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}