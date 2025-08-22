import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { EightDFormData } from "../EightDForm";

export function D3TemporaryRemedies() {
  const { register, formState: { errors } } = useFormContext<EightDFormData>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">D3: Proposal of temporary Remedies to Damage Avoiding</h3>
        <p className="text-sm text-muted-foreground">
          Define immediate containment actions to prevent further damage while working on permanent solutions.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="remedyName" className="text-sm font-medium">
            Name and description of temporary Remedies *
          </Label>
          <Textarea
            id="remedyName"
            placeholder="Describe the temporary remedies to be implemented..."
            {...register("remedyName", { required: "Remedy description is required" })}
            className={errors.remedyName ? "border-destructive" : ""}
          />
          {errors.remedyName && (
            <p className="text-sm text-destructive">{errors.remedyName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedyResponsibility" className="text-sm font-medium">
            Responsibility *
          </Label>
          <Input
            id="remedyResponsibility"
            placeholder="Who is responsible for implementing the remedy..."
            {...register("remedyResponsibility", { required: "Responsibility is required" })}
            className={errors.remedyResponsibility ? "border-destructive" : ""}
          />
          {errors.remedyResponsibility && (
            <p className="text-sm text-destructive">{errors.remedyResponsibility.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedyVerification" className="text-sm font-medium">
            Verification of maturity *
          </Label>
          <Textarea
            id="remedyVerification"
            placeholder="How will the remedy effectiveness be verified..."
            {...register("remedyVerification", { required: "Verification method is required" })}
            className={errors.remedyVerification ? "border-destructive" : ""}
          />
          {errors.remedyVerification && (
            <p className="text-sm text-destructive">{errors.remedyVerification.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="remedyVerificationEnd" className="text-sm font-medium">
              End of Verification *
            </Label>
            <Input
              id="remedyVerificationEnd"
              type="date"
              {...register("remedyVerificationEnd", { required: "Verification end date is required" })}
              className={errors.remedyVerificationEnd ? "border-destructive" : ""}
            />
            {errors.remedyVerificationEnd && (
              <p className="text-sm text-destructive">{errors.remedyVerificationEnd.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="remedyValidationEnd" className="text-sm font-medium">
              End of validation *
            </Label>
            <Input
              id="remedyValidationEnd"
              type="date"
              {...register("remedyValidationEnd", { required: "Validation end date is required" })}
              className={errors.remedyValidationEnd ? "border-destructive" : ""}
            />
            {errors.remedyValidationEnd && (
              <p className="text-sm text-destructive">{errors.remedyValidationEnd.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedyValidation" className="text-sm font-medium">
            Validation of maturity *
          </Label>
          <Textarea
            id="remedyValidation"
            placeholder="How the remedy will be validated..."
            {...register("remedyValidation", { required: "Validation method is required" })}
            className={errors.remedyValidation ? "border-destructive" : ""}
          />
          {errors.remedyValidation && (
            <p className="text-sm text-destructive">{errors.remedyValidation.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedyDocumentation" className="text-sm font-medium">
            Required documentation *
          </Label>
          <Textarea
            id="remedyDocumentation"
            placeholder="List the documentation required for this remedy..."
            {...register("remedyDocumentation", { required: "Documentation requirements are required" })}
            className={errors.remedyDocumentation ? "border-destructive" : ""}
          />
          {errors.remedyDocumentation && (
            <p className="text-sm text-destructive">{errors.remedyDocumentation.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}