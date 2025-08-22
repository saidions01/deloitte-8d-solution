import { useFormContext, useFieldArray } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2 } from "lucide-react";
import { EightDFormData } from "../EightDForm";

export function D1TeamSetup() {
  const { register, control, formState: { errors } } = useFormContext<EightDFormData>();
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "teamMembers",
  });

  const addTeamMember = () => {
    append({ name: "", role: "", title: "", contact: "" });
  };

  const removeTeamMember = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary">D1: Set up the team</h3>
        <p className="text-sm text-muted-foreground">
          Identify and assemble the team members who will work on solving this problem.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label className="text-sm font-medium">Team Members *</Label>
          <Button
            type="button"
            onClick={addTeamMember}
            size="sm"
            className="bg-success text-success-foreground hover:bg-success/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Team Member
          </Button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-medium">Name *</TableHead>
                <TableHead className="font-medium">Role *</TableHead>
                <TableHead className="font-medium">Job Title *</TableHead>
                <TableHead className="font-medium">Contact *</TableHead>
                <TableHead className="w-16"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map((field, index) => (
                <TableRow key={field.id}>
                  <TableCell className="p-2">
                    <Input
                      placeholder="Enter name..."
                      {...register(`teamMembers.${index}.name`, { 
                        required: "Name is required" 
                      })}
                      className={errors.teamMembers?.[index]?.name ? "border-destructive" : ""}
                    />
                    {errors.teamMembers?.[index]?.name && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.teamMembers[index]?.name?.message}
                      </p>
                    )}
                  </TableCell>
                  <TableCell className="p-2">
                    <Input
                      placeholder="Enter role..."
                      {...register(`teamMembers.${index}.role`, { 
                        required: "Role is required" 
                      })}
                      className={errors.teamMembers?.[index]?.role ? "border-destructive" : ""}
                    />
                    {errors.teamMembers?.[index]?.role && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.teamMembers[index]?.role?.message}
                      </p>
                    )}
                  </TableCell>
                  <TableCell className="p-2">
                    <Input
                      placeholder="Enter job title..."
                      {...register(`teamMembers.${index}.title`, { 
                        required: "Title is required" 
                      })}
                      className={errors.teamMembers?.[index]?.title ? "border-destructive" : ""}
                    />
                    {errors.teamMembers?.[index]?.title && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.teamMembers[index]?.title?.message}
                      </p>
                    )}
                  </TableCell>
                  <TableCell className="p-2">
                    <Input
                      placeholder="Email or phone..."
                      {...register(`teamMembers.${index}.contact`, { 
                        required: "Contact is required" 
                      })}
                      className={errors.teamMembers?.[index]?.contact ? "border-destructive" : ""}
                    />
                    {errors.teamMembers?.[index]?.contact && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.teamMembers[index]?.contact?.message}
                      </p>
                    )}
                  </TableCell>
                  <TableCell className="p-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeTeamMember(index)}
                      disabled={fields.length === 1}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {fields.length === 0 && (
          <p className="text-sm text-destructive">At least one team member is required.</p>
        )}
      </div>
    </div>
  );
}