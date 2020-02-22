const getState = ({ getStore, getActions, setStore }) => {
	const APIurl = "https://3000-a393f249-b39c-4750-9642-290dec3131dc.ws-us02.gitpod.io/clients";
	return {
		store: {
			clients: [],

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
				console.log("estoy empezando");
				let actions = getActions();
				let clientWasCreated = false;
				try {
					console.log("trying post");
					let response = await fetch(APIurl, {
						method: "POST",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: JSON.stringify(client)
					});
					console.log(response.statusText);
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
				console.log("fetching clients");
				try {
					let response = await fetch(APIurl, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});
					if (response.ok) {
						clients = await response.json();
						console.log(clients);
					} else if (response.stats == 404) {
						console.log("no client found, please click on create button");
						alert("no user found, please click on create button");
					} else {
						console.log(response.statusText);
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				setStore({
					clients: clients
				});
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
