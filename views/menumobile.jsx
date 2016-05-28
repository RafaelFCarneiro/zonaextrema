import React from 'react';

export default class MenuMobile extends React.Component {

  render() {
    return (

      <div className="android-drawer mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">
          <div className="zx-zonaextrema-logo" data-icon="p"></div> Zona Extrema
        </span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="#cursos">Cursos</a>
          <a className="mdl-navigation__link" href="#eventos">Eventos</a>
          <a className="mdl-navigation__link" href="#hackathon">Hackathon</a>
          <a className="mdl-navigation__link" href="#networking">Networking</a>
          <a className="mdl-navigation__link" href="#ideias">Id&eacute;ias</a>
        </nav>
      </div>

    );
  }

}
