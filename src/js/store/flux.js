const getState = ({ getStore, getActions, setStore }) => {
	const APIurl = "https://3000-fbed2734-d269-458c-9da2-b84c5e23bb59.ws-us02.gitpod.io/clients";
	const APIurlOpp = "https://3000-fbed2734-d269-458c-9da2-b84c5e23bb59.ws-us02.gitpod.io/opportunitys";

	return {
		store: {
			clients: [],

			opportunitys: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			fetchCreateClient: async client => {
				let actions = getActions();
				let clientWasCreated = false;

				try {
					let response = await fetch(APIurl, {
						method: "POST",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: JSON.stringify(client)
					});

					if (response.ok) {
						await actions.fetchUserClients();
						clientWasCreated = true;
					}
				} catch (error) {
					console.log(error);
				}

				return clientWasCreated;
			},

			fetchUserClients: async () => {
				let clients = [];

				try {
					let response = await fetch(APIurl, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});

					if (response.ok) {
						clients = await response.json();
					} else if (response.stats == 404) {
						console.log("no client found, please click on create button");
					}
				} catch (error) {
					console.log(error);
				}

				setStore({
					clients: clients
				});
			},

			/*fetchUpdateClient: async clients => {
				const actions = getActions();
				let wasUpdated = false;

				try {
					let response = await fetch(APIurl, {
						method: "PUT",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: JSON.stringify(client)
					});

					if (response.ok) {
						await actions.fetchUserClients();
						wasUpdated = true;
					} else {
						console.log("clients were not updated, try again");
					}

				} catch (error) {
					console.log(error);
				}

				return wasUpdated;
            },*/

			fetchDeleteClient: async id => {
				let actions = getActions();

				try {
					let response = await fetch(APIurl + "/" + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/JSON"
						}
					});

					if (response.ok) {
						console.log("user deleted");
						await actions.fetchUserClients();
					} else {
						console.log("something failed: ", response.status, ", ", response.statusText);
					}
				} catch (error) {
					console.log(error);
				}
			},

			fetchCreateOpportunity: async opportunity => {
				let actions = getActions();
				let opportunityWasCreated = false;

				try {
					let response = await fetch(APIurlOpp, {
						method: "POST",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: JSON.stringify(opportunity)
					});

					if (response.ok) {
						await actions.fetchUserOpportunitys();
						opportunityWasCreated = true;
					}
				} catch (error) {
					console.log(error);
				}

				return opportunityWasCreated;
			},

			fetchUserOpportunitys: async () => {
				let opportunitys = [];

				try {
					let response = await fetch(APIurlOpp, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});

					if (response.ok) {
						opportunitys = await response.json();
					} else if (response.stats == 404) {
						console.log("no opportunity found, please click on create button");
					}
				} catch (error) {
					console.log(error);
				}

				setStore({
					opportunitys: opportunitys
				});
			},

			fetchDeleteOpportunity: async id => {
				let actions = getActions();

				try {
					let response = await fetch(APIurlOpp + "/" + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/JSON"
						}
					});

					if (response.ok) {
						console.log("opportunity deleted");
						await actions.fetchUserOpportunitys();
					} else {
						console.log("something failed: ", response.status, ", ", response.statusText);
					}
				} catch (error) {
					console.log(error);
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
