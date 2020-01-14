import React, { Component } from "react";

import { ClientCards } from "./ClientCards";
import { AddClients } from "./AddClients";

export const StepsCol = () => (
	<div className="funnel-flex">
		<div className="funnel-flex-column border">
			<div className="card-header funnel-header">Paso 1</div>
			<ClientCards />
			<AddClients />
		</div>
		<div className="funnel-flex-column border">
			<div className="card-header funnel-header">Paso 2</div>
			<AddClients />
		</div>
		<div className="funnel-flex-column border">
			<div className="card-header funnel-header">Paso 3</div>
			<AddClients />
		</div>
		<div className="funnel-flex-column border">
			<div className="card-header funnel-header">Paso 4</div>
			<AddClients />
		</div>
		<div className="funnel-flex-column border">
			<div className="card-header funnel-header">Paso 5</div>
			<AddClients />
		</div>
		<div>
			<button type="button" className="btn stitched" data-toggle="button" aria-pressed="false" autoComplete="off">
				Add Column
			</button>
		</div>
	</div>
);
