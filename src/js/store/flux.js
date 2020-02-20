const getState = ({ getStore, getActions, setStore }) => {
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

				//we have to loop the entire demo array to look for the respective index
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
