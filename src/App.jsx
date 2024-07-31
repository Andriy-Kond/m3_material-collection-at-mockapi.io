import React, { Component } from "react";
import { GlobalStyle } from "GlobalStyle";
import MaterialsForm from "components/MaterialsForm";
import materialsAPI from "./servises/materialsAPI";

class App extends Component {
  state = { materials: [], isLoading: false };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const allMaterials = await materialsAPI.getMaterialsList();

      this.setState({ materials: allMaterials.data });
    } catch (error) {
      console.log("error componentDidMount :>> ", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // componentDidUpdate(prevProps, prevState) {}

  addMaterial = async values => {
    this.setState({ isLoading: true });
    try {
      const newMaterial = await materialsAPI.postMaterial(values);

      this.setState(prevState => ({
        materials: [...prevState.materials, newMaterial.data],
      }));
    } catch (error) {
      console.log("error addMaterial :>> ", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <GlobalStyle />
        {isLoading && <p>Завантажую</p>}
        <MaterialsForm onSubmit={this.addMaterial} isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
