import EditCard from "components/EditCard";
import { Component } from "react";

class MaterialCard extends Component {
  state = { isOpenEditCard: false };

  closeEditCard = () => {
    this.setState({ isOpenEditCard: false });
  };

  openEditCard = () => {
    this.setState({ isOpenEditCard: true });
  };

  render() {
    const { material, deleteMaterial, updateMaterial } = this.props;
    const { id, title, link } = material;
    const { isOpenEditCard } = this.state;

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
          // onClick={() => {
          //   this.setState({ isOpenEditCard: true });
          //   updateMaterial({ ...material, title: Date.now() });
          // }}
          onClick={this.openEditCard}>
          EDIT
        </button>
        {isOpenEditCard && (
          <EditCard
            onClose={this.closeEditCard}
            updateMaterial={updateMaterial}
            material={material}
          />
        )}
        {/* modal window can be rendered in this card */}
      </>
    );
  }
}

export default MaterialCard;
