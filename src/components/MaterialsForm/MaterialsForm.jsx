import { Formik, Field, Form } from "formik";
import React, { Component } from "react";

class MaterialsForm extends Component {
  handleSubmit = async (values, actions) => {
    await this.props.onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  render() {
    const isSubmitting = this.props.isLoading;

    return (
      <>
        <Formik
          initialValues={{ title: "", link: "" }}
          onSubmit={this.handleSubmit}>
          {props => {
            console.log(
              "MaterialsForm >> render >> props:::",
              props.isSubmitting,
            );
            return (
              <Form>
                <label>
                  <Field type="text" name="title" placeholder="Title" />
                </label>

                <label>
                  <Field type="text" name="link" placeholder="Link" />
                </label>

                <button type="submit" disabled={props.isSubmitting}>
                  Add material
                </button>
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }
}

export default MaterialsForm;
