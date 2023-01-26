import React from "react";
import "./index.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/slice/dataSlice";

const AddPage = () => {
  const disp = useDispatch();

  const addingSchema = Yup.object().shape({
    teacherName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    teacherType: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    teacherDescription: Yup.string()
      .min(2, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),
    teacherImg: Yup.string()
      .min(2, "Too Short!")
      .required("Required")
      .url("Put Url"),
  });

  return (
    <div id="add-page">
      <div className="container">
        <Formik
          initialValues={{
            teacherName: "",
            teacherType: "",
            teacherDescription: "",
            teacherImg: "",
          }}
          validationSchema={addingSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            disp(postData(values));
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <h1>ADD TEACHER</h1>
              <Field placeholder="Teacher Name" name="teacherName" />
              {errors.teacherName && touched.teacherName ? (
                <div>{errors.teacherName}</div>
              ) : null}
              <Field placeholder="Subject" name="teacherType" />
              {errors.teacherType && touched.teacherType ? (
                <div>{errors.teacherType}</div>
              ) : null}
              <Field placeholder="URL" name="teacherImg" />
              {errors.teacherImg && touched.teacherImg ? (
                <div>{errors.teacherImg}</div>
              ) : null}
              <Field placeholder="Description" name="teacherDescription" />
              {errors.teacherDescription && touched.teacherDescription ? (
                <div>{errors.teacherDescription}</div>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddPage;
