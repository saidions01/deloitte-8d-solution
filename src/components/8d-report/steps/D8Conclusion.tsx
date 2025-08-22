import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { EightDFormData } from "../EightDForm";

export function D8Conclusion() {
  const { register, formState: { errors }, setValue, watch } = useFormContext<EightDFormData>();
  const temporaryMeasuresRemoved = watch("temporaryMeasuresRemoved");

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">D8: Conclusion of the Problem and Awards</h3>
        <p className="text-sm text-muted-foreground">
          Summarize the 8D process results and recognize the team's efforts.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="reportStatus" className="text-sm font-medium">
            Status of 8D report *
          </Label>
          <Textarea
            id="reportStatus"
            placeholder="Describe the current status and outcome of the 8D report..."
            {...register("reportStatus", { required: "Report status is required" })}
            className={errors.reportStatus ? "border-destructive" : ""}
          />
          {errors.reportStatus && (
            <p className="text-sm text-destructive">{errors.reportStatus.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Were removed temporary measures? *</Label>
          <RadioGroup
            value={temporaryMeasuresRemoved ? "yes" : "no"}
            onValueChange={(value) => setValue("temporaryMeasuresRemoved", value === "yes")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="removed-yes" />
              <Label htmlFor="removed-yes" className="text-sm font-normal cursor-pointer">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="removed-no" />
              <Label htmlFor="removed-no" className="text-sm font-normal cursor-pointer">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="reportStartDate" className="text-sm font-medium">
              Start date of 8D report *
            </Label>
            <Input
              id="reportStartDate"
              type="date"
              {...register("reportStartDate", { required: "Start date is required" })}
              className={errors.reportStartDate ? "border-destructive" : ""}
            />
            {errors.reportStartDate && (
              <p className="text-sm text-destructive">{errors.reportStartDate.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="reportCompletionDate" className="text-sm font-medium">
              Completion date of 8D report *
            </Label>
            <Input
              id="reportCompletionDate"
              type="date"
              {...register("reportCompletionDate", { required: "Completion date is required" })}
              className={errors.reportCompletionDate ? "border-destructive" : ""}
            />
            {errors.reportCompletionDate && (
              <p className="text-sm text-destructive">{errors.reportCompletionDate.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="feedback" className="text-sm font-medium">
            Feedback *
          </Label>
          <Textarea
            id="feedback"
            placeholder="Provide feedback on the 8D process, lessons learned, and team recognition..."
            {...register("feedback", { required: "Feedback is required" })}
            className={errors.feedback ? "border-destructive" : ""}
          />
          {errors.feedback && (
            <p className="text-sm text-destructive">{errors.feedback.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}