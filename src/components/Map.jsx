import React from "react";

const Map = (props) => {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Mapa</h1>
        <hr />
        <div className="row justify-content-center">
          <div className="col-sm-8 ">
            <iframe
              src={props.map}
              width="100%"
              height="200"
              className="map"
              title={props.titulo}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
