import { Formik, Field, Form } from "formik";

function EditCard({ onClose, updateMaterial, material }) {
  function submitEdit(values, actions) {
    updateMaterial({ ...material, link: values.link, title: values.title });
    onClose();
  }

  return (
    <>
      <h3>Редагування</h3>
      <Formik initialValues={{ title: "", link: "" }} onSubmit={submitEdit}>
        <Form>
          <label>
            <Field type="text" name="title" placeholder="Title" />
          </label>

          <label>
            <Field type="text" name="link" placeholder="Link" />
          </label>

          <button type="submit">Edit Material</button>
        </Form>
      </Formik>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </>
  );
}

export default EditCard;
