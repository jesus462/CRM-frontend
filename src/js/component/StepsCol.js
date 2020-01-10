import React, { Component } from "react";

import { ClientCards } from "./ClientCards";
import { AddClients } from "./AddClients";

export const StepsCol = () => (
	<div className="funnel-flex">
		<div className="funnel-flex-column border">
			<div className="card-header">Featured</div>
			<ClientCards />
			<AddClients />
		</div>
		<div className="funnel-flex-column border">
			<div className="card-header">Featured</div>
			<AddClients />
		</div>
		<div className="funnel-flex-column border">
			<div className="card-header">Featured</div>
			<AddClients />
		</div>
		<div className="funnel-flex-column border">
			<div className="card-header">Featured</div>
			<AddClients />
		</div>
		<div className="funnel-flex-column border">
			<div className="card-header">Featured</div>
			<AddClients />
		</div>
		<div>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="button"
				aria-pressed="false"
				autoComplete="off">
				Add Column
			</button>
		</div>
	</div>
);
