import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Image from "react-bootstrap/Image";

export const Home = () => (
	<div>
		<div className="container-home">
			<div className="cell-home1">
				<p>1</p>
			</div>
			<div className="cell-home2">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Compás CRM</h1>
						<p className="lead">
							Compás CRM lo ayuda a interactuar con clientes potenciales y clientes,obtener información
							acerca de su negocio, crear un proceso de ventas escalable y hacer crecer su empresa más
							rápido.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-sm-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Centro de asistencia para PYMEs</h5>
						<p className="card-text">
							Déjanos ayudarte a encontrar la forma perfecta de llegar a tus clientes.
						</p>
						<a href="#" className="btn btn-success">
							Ir
						</a>
					</div>
				</div>
			</div>
			<div className="col-sm-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Centro de asistencia para Freelancers</h5>
						<p className="card-text">Dedícate a desarrollar tu talento mientras manejamos tu clientela.</p>
						<a href="#" className="btn btn-success">
							Ir
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);
