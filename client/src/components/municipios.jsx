import React, { Component } from "react";

class Municipios extends Component {
  state = {
    //loading: true,
    data: [],
  };

  componentDidMount() {
    fetch("/api/mich")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const t1 = (
      <table className="table table-striped table-sm ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Municipio</th>
            <th>Rango</th>
            <th>Secciones</th>
            <th>Distr. Local</th>
            <th>Distr. Fed</th>
            <th>Poblacion</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((municipio) => (
            <tr key={municipio.Municipio_ID}>
              <td>{municipio.Municipio_ID}</td>
              <td>{municipio.Municipio_Name}</td>
              <td>{municipio.RANGO}</td>
              <td>{municipio.SECCS}</td>
              <td>{municipio.DISTRLOCAL}</td>
              <td>{municipio.DISTRFED}</td>
              <td>{municipio.POBLACION}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    return <div> {t1} </div>;
  }
}

export default Municipios;
