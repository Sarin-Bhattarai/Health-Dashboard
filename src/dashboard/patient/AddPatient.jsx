import React from "react";
import "../../styles/patient.css";
import AddPatientForm from "../../components/form/AddPatientForm";

const AddPatient = () => {
  return (
    <section className="global">
      <h1>Add Patients</h1>
      <hr />
      <AddPatientForm />
    </section>
  );
};

export default AddPatient;
