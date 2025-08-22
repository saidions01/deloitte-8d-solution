import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FormProvider, useForm } from "react-hook-form";
import { ChevronLeft, ChevronRight, FileText, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { D1TeamSetup } from "./steps/D1TeamSetup";
import { D3TemporaryRemedies } from "./steps/D3TemporaryRemedies";
import { D4RootCause } from "./steps/D4RootCause";
import { D5PermanentMeasures } from "./steps/D5PermanentMeasures";
import { D6Implementation } from "./steps/D6Implementation";
import { D7Prevention } from "./steps/D7Prevention";
import { D8Conclusion } from "./steps/D8Conclusion";
import { NextSteps } from "./steps/NextSteps";

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  contact: string;
}

export interface EightDFormData {
  // D1 - Team Setup
  teamMembers: TeamMember[];
  
  // D3 - Temporary Remedies
  remedyName: string;
  remedyResponsibility: string;
  remedyVerification: string;
  remedyVerificationEnd: string;
  remedyValidation: string;
  remedyValidationEnd: string;
  remedyDocumentation: string;
  
  // D4 - Root Cause Analysis
  analysisMethod: string;
  analysisResponsibility: string;
  nonDetectionCause: string;
  occurrenceCause: string;
  otherCause?: string;
  analysisDocumentation: string;
  
  // D5 - Permanent Measures
  measureName: string;
  measureNotes?: string;
  measureCause: string;
  measureResponsibility: string;
  measureCompletionDate: string;
  
  // D6 - Implementation
  implementationName: string;
  implementationNotes?: string;
  implementationCause: string;
  implementationResponsibility: string;
  implementationDate: string;
  validationDate: string;
  implementationDocumentation: string;
  
  // D7 - Prevention
  preventionAction: string;
  preventionCause: string;
  preventionResponsibility: string;
  preventionCompleted: boolean;
  preventionCompletionDate: string;
  preventionDocumentation: string;
  
  // D8 - Conclusion
  reportStatus: string;
  temporaryMeasuresRemoved: boolean;
  reportStartDate: string;
  reportCompletionDate: string;
  feedback: string;
  
  // Next Steps
  nextSteps?: string;
}

const STEPS = [
  { title: "D1: Team Setup", component: D1TeamSetup },
  { title: "D3: Temporary Remedies", component: D3TemporaryRemedies },
  { title: "D4: Root Cause Analysis", component: D4RootCause },
  { title: "D5: Permanent Measures", component: D5PermanentMeasures },
  { title: "D6: Implementation", component: D6Implementation },
  { title: "D7: Prevention", component: D7Prevention },
  { title: "D8: Conclusion", component: D8Conclusion },
  { title: "Next Steps", component: NextSteps },
];

export function EightDForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const methods = useForm<EightDFormData>({
    mode: "onChange",
    defaultValues: {
      teamMembers: [{ name: "", role: "", title: "", contact: "" }],
      preventionCompleted: false,
      temporaryMeasuresRemoved: false,
    }
  });

  const { handleSubmit, trigger } = methods;

  const progress = ((currentStep + 1) / STEPS.length) * 100;
  const CurrentStepComponent = STEPS[currentStep].component;

  const onNext = async () => {
    const isValid = await trigger();
    if (isValid && currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: EightDFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you would integrate with Google Sheets API
      // For now, we'll simulate the submission
      console.log("8D Report Data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Report Submitted Successfully",
        description: "Your 8D report has been saved to Google Sheets.",
      });
      
      // Reset form
      methods.reset();
      setCurrentStep(0);
      
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8" />
            <h1 className="text-3xl font-bold">8D Report</h1>
          </div>
          <p className="text-primary-foreground/80">
            Eight Disciplines Problem Solving Method
          </p>
        </div>
      </div>

      <div className="container max-w-4xl py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep + 1} of {STEPS.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="mb-4" />
          <h2 className="text-xl font-semibold text-primary">
            {STEPS[currentStep].title}
          </h2>
        </div>

        {/* Form */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="p-6 mb-6">
              <CurrentStepComponent />
            </Card>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={onPrevious}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep === STEPS.length - 1 ? (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-success text-success-foreground hover:bg-success/90"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Report
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={onNext}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}