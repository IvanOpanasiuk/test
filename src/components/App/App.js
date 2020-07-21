import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getAlbumsRequest, addNewAlbum } from "../../actionCreators/albums";
import Album from "../Album";

import "./App.css";

class App extends PureComponent {
  state = {
    inputValue: "",
    searchData: [],
  };
  handleChange = (e) => {
    const { inputValue } = this.state;
    if (!inputValue) {
      this.setState({
        searchData: this.props.albums.albums,
      });
    }
    const { albums } = this.props.albums;
    const searchData = albums.filter((album) => {
      const { name } = album;
      if (name) {
        return name.toLowerCase().includes(e.target.value);
      }
      return "";
    });
    this.setState({
      inputValue: e.target.value,
      searchData,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.random().toString().slice(2);
    parseInt(id);
    let album = {
      id,
      url: "",
      name: this.state.inputValue,
      airstamp: new Date(),
      number: 1,
      runtime: 60,
      season: 1,
    };
    this.setState({
      inputValue: "",
    });
    this.props.addNewAlbum(album);
  };

  render() {
    const { inputValue, searchData } = this.state;
    const { albums, isLoading, error } = this.props.albums;

    if (isLoading) return <p>Data is loading ...</p>;
    if (error) return <p>Seting error</p>;
    const data = inputValue ? searchData : albums;
    console.dir(data);
    return (
      <div className="wrapper">
        <form action="" onSubmit={this.handleSubmit}>
          <input value={inputValue} type="text" onChange={this.handleChange} />
          <button>Add album</button>
        </form>
        {data.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    );
  }

  componentDidMount() {
    const { getAlbumsRequest } = this.props;
    getAlbumsRequest();
  }
}

const mapStateToProps = (state) => ({ albums: state.albums });

const mapDispatchToProps = {
  getAlbumsRequest,
  addNewAlbum,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
