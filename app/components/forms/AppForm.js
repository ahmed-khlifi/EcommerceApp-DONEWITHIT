import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onsSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onsSubmit={onsSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
