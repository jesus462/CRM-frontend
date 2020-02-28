import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<div className="container-home">
			<div className="cell-home1">
				<p>1</p>
			</div>
			<div className="cell-home2">
				<p>2</p>
			</div>
		</div>

		<div className="container-card-home">
			<div className="row">
				<div className="col-sm-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Special title treatment</h5>
							<p className="card-text">
								With supporting text below as a natural lead-in to additional content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Special title treatment</h5>
							<p className="card-text">
								With supporting text below as a natural lead-in to additional content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
