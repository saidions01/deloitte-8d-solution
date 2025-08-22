import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EightDFormData } from "../EightDForm";

export function D1TeamSetup() {
  const { register, formState: { errors } } = useFormContext<EightDFormData>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">D1: Set up the team</h3>
        <p className="text-sm text-muted-foreground">
          Identify and assemble the team members who will work on solving this problem.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="teamMembers" className="text-sm font-medium">
            Names of the team members *
          </Label>
          <Textarea
            id="teamMembers"
            placeholder="Enter the names of all team members..."
            {...register("teamMembers", { required: "Team members are required" })}
            className={errors.teamMembers ? "border-destructive" : ""}
          />
          {errors.teamMembers && (
            <p className="text-sm text-destructive">{errors.teamMembers.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="teamRoles" className="text-sm font-medium">
            Role of each one in the team *
          </Label>
          <Textarea
            id="teamRoles"
            placeholder="Describe the role of each team member..."
            {...register("teamRoles", { required: "Team roles are required" })}
            className={errors.teamRoles ? "border-destructive" : ""}
          />
          {errors.teamRoles && (
            <p className="text-sm text-destructive">{errors.teamRoles.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="teamTitles" className="text-sm font-medium">
            Post-Work title of each one *
          </Label>
          <Textarea
            id="teamTitles"
            placeholder="Enter the job title of each team member..."
            {...register("teamTitles", { required: "Team titles are required" })}
            className={errors.teamTitles ? "border-destructive" : ""}
          />
          {errors.teamTitles && (
            <p className="text-sm text-destructive">{errors.teamTitles.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="teamContacts" className="text-sm font-medium">
            Contact of each one *
          </Label>
          <Textarea
            id="teamContacts"
            placeholder="Enter contact information for each team member (email, phone)..."
            {...register("teamContacts", { required: "Team contacts are required" })}
            className={errors.teamContacts ? "border-destructive" : ""}
          />
          {errors.teamContacts && (
            <p className="text-sm text-destructive">{errors.teamContacts.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}