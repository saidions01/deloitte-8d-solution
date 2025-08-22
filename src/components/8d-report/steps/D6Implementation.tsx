import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { EightDFormData } from "../EightDForm";

export function D6Implementation() {
  const { register, formState: { errors } } = useFormContext<EightDFormData>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">D6: Implementation and Validation of Permanent Corrective Actions</h3>
        <p className="text-sm text-muted-foreground">
          Implement the permanent corrective actions and validate their effectiveness.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="implementationName" className="text-sm font-medium">
            Name and description of measure *
          </Label>
          <Textarea
            id="implementationName"
            placeholder="Describe the implementation of corrective measures..."
            {...register("implementationName", { required: "Implementation description is required" })}
            className={errors.implementationName ? "border-destructive" : ""}
          />
          {errors.implementationName && (
            <p className="text-sm text-destructive">{errors.implementationName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="implementationNotes" className="text-sm font-medium">
            Notes to measure
          </Label>
          <Textarea
            id="implementationNotes"
            placeholder="Additional notes about the implementation..."
            {...register("implementationNotes")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="implementationCause" className="text-sm font-medium">
            Cause *
          </Label>
          <Textarea
            id="implementationCause"
            placeholder="Which cause is being addressed by this implementation..."
            {...register("implementationCause", { required: "Cause is required" })}
            className={errors.implementationCause ? "border-destructive" : ""}
          />
          {errors.implementationCause && (
            <p className="text-sm text-destructive">{errors.implementationCause.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="implementationResponsibility" className="text-sm font-medium">
            Responsibility *
          </Label>
          <Input
            id="implementationResponsibility"
            placeholder="Who is responsible for this implementation..."
            {...register("implementationResponsibility", { required: "Responsibility is required" })}
            className={errors.implementationResponsibility ? "border-destructive" : ""}
          />
          {errors.implementationResponsibility && (
            <p className="text-sm text-destructive">{errors.implementationResponsibility.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="implementationDate" className="text-sm font-medium">
              The date of implementation *
            </Label>
            <Input
              id="implementationDate"
              type="date"
              {...register("implementationDate", { required: "Implementation date is required" })}
              className={errors.implementationDate ? "border-destructive" : ""}
            />
            {errors.implementationDate && (
              <p className="text-sm text-destructive">{errors.implementationDate.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="validationDate" className="text-sm font-medium">
              The date of validation *
            </Label>
            <Input
              id="validationDate"
              type="date"
              {...register("validationDate", { required: "Validation date is required" })}
              className={errors.validationDate ? "border-destructive" : ""}
            />
            {errors.validationDate && (
              <p className="text-sm text-destructive">{errors.validationDate.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="implementationDocumentation" className="text-sm font-medium">
            Required documentation *
          </Label>
          <Textarea
            id="implementationDocumentation"
            placeholder="Documentation required for implementation and validation..."
            {...register("implementationDocumentation", { required: "Documentation requirements are required" })}
            className={errors.implementationDocumentation ? "border-destructive" : ""}
          />
          {errors.implementationDocumentation && (
            <p className="text-sm text-destructive">{errors.implementationDocumentation.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}