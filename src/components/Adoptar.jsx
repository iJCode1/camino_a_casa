import React from "react";
import '../estilos/main.css';

const Adoptar = () => {
  return (
    <div className="container">
      <div className="col-11 col-sm-12 col-md-12 col-xl-12 mt-4 mb-4 margin--zero">
        <h1 className=" text-center mb-4 mt-4 animate__animated animate__backInRight">
          AMIGOS PELUDOS DE TOLUCA A.C
        </h1>
        <div className="">
          <div className="list-group">
            <ul>
              <li className="list-group-item list-group-item-action active text-center">
                Requisitos para adoptar un Perrito
              </li>
              <li className="list-group-item list-group-item-action">
                Mayor de 25 A&ntilde;os.
              </li>
              <li className="list-group-item list-group-item-action">
                No se dan en adopci&oacute;n perros para regalo.
              </li>
              <li className="list-group-item list-group-item-action">
                Las adopciones son en Toluca o municipios aledaños, para su
                seguimiento.
              </li>
              <li className="list-group-item list-group-item-action">
                No se dan perros en adopción para cuidar talleres, terrenos,
                azoteas o que los tengan amarrados.
              </li>
              <li className="list-group-item list-group-item-action">
                Prohibido cortar cola y orejas al adoptado.
              </li>
              <li className="list-group-item list-group-item-action">
                Si el perro vivirá en patio o jardín, debe estar bardeado y
                cerrado con zaguán.
              </li>
              <li className="list-group-item list-group-item-action">
              Después de elegir al perro que deseas adoptar deberás seleccionar 
              el botón para mandarnos un mensaje por WhatsApp o Facebook lo cual nos 
              permitirá abrir un panorama de ti y tu familia, posteriormente un miembro de
              la asociación te hará una entrevista verbal por teléfono, se agenda una visita
              en tú domicilio para conocer el hogar y a la familia con la cual  vivirá el perro
              o gato, debes de estár de acuerdo en que la asociación le de seguimiento a la
              adopción (nada acosante, llamada, fotos o visita).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adoptar;
