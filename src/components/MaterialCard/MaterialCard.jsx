const MaterialCard = ({ material, deleteMaterial, updateMaterial }) => {
  const { id, title, link } = material;
  return (
    <>
      <div>
        <p>
          <b>Title:</b> {title}
        </p>
        <p>
          <b>Link:</b> {link}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          deleteMaterial(id);
        }}>
        Delete
      </button>

      {/* Todo: modal window for editing instead this button: */}
      <button
        type="button"
        onClick={() => {
          updateMaterial({ ...material, title: Date.now() });
        }}>
        EDIT
      </button>
      {/* modal window can be rendered in this card */}
    </>
  );
};

export default MaterialCard;
