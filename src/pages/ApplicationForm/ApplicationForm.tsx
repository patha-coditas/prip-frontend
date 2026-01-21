import {
  ApplicationForm,
  ApplicationFormContent,
  ApplicationFormHeader,
} from "../../components/ApplicationForm/ApplicationForm";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import {
  Stepper,
  StepperContent,
  StepperItem,
  StepperItemList,
} from "../../components/Stepper";
import styles from "./ApplicationForm.module.scss";

const ApplicationFormPage = () => {
  return (
    <ApplicationForm>
      <ApplicationFormHeader>
        <p>Application Form</p>
      </ApplicationFormHeader>
      <ApplicationFormContent>
        <Stepper
          style={{
            display: "flex",
            backgroundColor: "#fff",
            padding: "1.5rem",
            borderRadius: "8px",
          }}
        >
          <StepperItemList
            defaultStepId="one"
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--teal-50)",
              borderRadius: "8px",
            }}
          >
            <StepperItem
              stepId="one"
              activeIcon="/assets/images/proponent-details-active.svg"
              completedIcon="/assets/images/complete.svg"
              stepperItemIcon="/assets/images/feedback.svg"
              stepperItemText="Proponent Details"
              stepperItemSubtext="Step 1"
            />
            <StepperItem
              stepId="two"
              activeIcon="/assets/images/proponent-details-active.svg"
              completedIcon="/assets/images/complete.svg"
              stepperItemIcon="/assets/images/feedback.svg"
              stepperItemText="Proponent Details"
              stepperItemSubtext="Step 2"
            />
            <StepperItem
              stepId="three"
              activeIcon="/assets/images/proponent-details-active.svg"
              completedIcon="/assets/images/complete.svg"
              stepperItemIcon="/assets/images/feedback.svg"
              stepperItemText="Proponent Details"
              stepperItemSubtext="Step 3"
            />
            <StepperItem
              stepId="four"
              activeIcon="/assets/images/proponent-details-active.svg"
              completedIcon="/assets/images/complete.svg"
              stepperItemIcon="/assets/images/feedback.svg"
              stepperItemText="Proponent Details"
              stepperItemSubtext="Step 4"
            />
            <StepperItem
              stepId="five"
              activeIcon="/assets/images/proponent-details-active.svg"
              completedIcon="/assets/images/complete.svg"
              stepperItemIcon="/assets/images/feedback.svg"
              stepperItemText="Proponent Details"
              stepperItemSubtext="Step 5"
            />
            <StepperItem
              stepId="six"
              activeIcon="/assets/images/proponent-details-active.svg"
              completedIcon="/assets/images/complete.svg"
              stepperItemIcon="/assets/images/feedback.svg"
              stepperItemText="Proponent Details"
              stepperItemSubtext="Step 6"
            />
            <StepperItem
              stepId="seven"
              activeIcon="/assets/images/proponent-details-active.svg"
              completedIcon="/assets/images/complete.svg"
              stepperItemIcon="/assets/images/feedback.svg"
              stepperItemText="Proponent Details"
              stepperItemSubtext="Step 7"
            />
            <StepperItem
              stepId="eight"
              activeIcon="/assets/images/proponent-details-active.svg"
              completedIcon="/assets/images/complete.svg"
              stepperItemIcon="/assets/images/feedback.svg"
              stepperItemText="Proponent Details"
              stepperItemSubtext="Step 8"
              hideDivider
            />
          </StepperItemList>

          <form className={styles.Form}>
            <StepperContent stepId={"one"} classes={styles.FormSection}>
              <h3 className={styles.FormHeading}>Proponent Details</h3>
              <Divider orientation="horizontal" height="1px" width="100%" />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <InputWithLabel
                  required
                  label="Proponent's name"
                  placeholder="Enter your full name"
                />
                <InputWithLabel
                  required
                  label="Designation"
                  placeholder="Enter your designation"
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <InputWithLabel
                  required
                  label="Mobile number (with area code)"
                  placeholder="Enter mobile number (with area code)"
                />
                <InputWithLabel
                  required
                  label="Official email address"
                  placeholder="Enter official email address"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  gap: "1.25rem",
                  justifyContent: "end",
                }}
              >
                <Divider orientation="horizontal" height="1px" width="100%" />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button variant="outline" size="md">
                    Save as Draft
                  </Button>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <Button variant="outline" size="md">
                      Previous
                    </Button>
                    <Button variant="success" size="md">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </StepperContent>
            <StepperContent stepId={"two"}>Two form</StepperContent>
            <StepperContent stepId={"three"}>Three form</StepperContent>
            <StepperContent stepId={"four"}>Four form</StepperContent>
            <StepperContent stepId={"five"}>Five form</StepperContent>
            <StepperContent stepId={"six"}>Six form</StepperContent>
            <StepperContent stepId={"seven"}>Seven form</StepperContent>
          </form>
        </Stepper>
      </ApplicationFormContent>
    </ApplicationForm>
  );
};

export default ApplicationFormPage;
