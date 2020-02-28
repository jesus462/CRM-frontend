import React, { useState, useEffect, useContext } from "react";
import { OpportunityCard } from "../component/OpportunityCard";
import { Context } from "../store/appContext";

import "../../styles/views/Opportunity.scss";

export const Opportunity = () => {
	return (
		<div className="opportunity-wrapper">
			<OpportunityCard />
		</div>
	);
};
