const getState = ({ getStore, getActions, setStore }) => {
    const APIurl = "https://3000-a393f249-b39c-4750-9642-290dec3131dc.ws-us02.gitpod.io/clients"
	return {
		store: {
			clients: [
				{
					id: 1,
					name: "Jesus",
					company: "4Geeks",
					position: "Student"
				},
				{
					id: 2,
					name: "Jonathan",
					company: "4Geeks",
					position: "Student"
				},
				{
					id: 3,
					name: "Ernesto",
					comapny: "4Geeks",
					position: "Teacher"
				}
			],

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
            fetchCreateClient: async () => {
				let actions = getActions();
				let clientWasCreated = false;
				try {
					let response = await fetch(APIurl, {
						method: "POST",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: "[]"
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
				let clientExists = false;
				try {
					let response = await fetch(APIurl, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});
					if (response.ok) {
						tasks = await response.json();
						userExists = true;
					} else if (response.stats == 404) {
						console.log(
							"no user found, please click on create button"
						);
						alert("no user found, please click on create button");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				setStore({
					tasks: tasks
				});
				return userExists;
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
