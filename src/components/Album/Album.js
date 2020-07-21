import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteAlbum } from "../../actionCreators/albums";

import "./Album.css";

class Album extends Component {
    handleClick = (id) => {
        this.props.deleteAlbum(id);
    }
    render() {
        const { album } = this.props;
        return (
            <div className="album-container">

                {
                    album.image && <img className='img-content' src={album.image.original} alt={album.name} />
                }
                <span>{album.name}</span>
                <button onClick={this.handleClick.bind(null, album.id)}>Remove</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    album: ownProps.album
});

const mapDispatchToProps = {
    deleteAlbum
}
export default connect(mapStateToProps, mapDispatchToProps)(Album);