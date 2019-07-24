import React from "react";
import "./ImageList.css";
const ImageList = props => {
  const images = props.images.map(({ description, id, urls }) => {
    return (
      <div key={id}>
        <img alt={description} src={urls.regular} />
      </div>
    );
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
