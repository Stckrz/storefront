export interface ICartItem {
	title: string,
	cartId: number,
	id: number,
	price: number,
	quantity: number,
	image: string,
	category: string
}

//the initial value for our carts contents
export const cartInitial: IContextInterface = {
	cart: [
		{
			title: "",
			cartId: 0,
			id: 0,
			price: 0,
			quantity: 0,
			image: "",
			category: ""
		}],
	setCart: () => { },
	idcount: 0,
	setidcount: () => { }
}

//the shape of the interface value
export interface IContextInterface {
	cart: ICartItem[],
	setCart: (data: ICartItem[]) => void,
	idcount: number,
	setidcount: (stuff: number) => void
}




export interface IProduct {
	id: number,
	name: string,
	price: number,
	description: string,
	category: string,
	image_url: string,
	comments: IComment[],
}




export const dataInitial: IDataContextInterface = {
	data: [
		{
			id: 0,
			name: "",
			price: 0,
			description: "",
			category: "",
			image_url: "",
			comments: [],

		}],
	setData: () => { }
}

export interface IDataContextInterface {
	data: IProduct[],
	setData: (data: IProduct[]) => void
}




export interface IComment {
	id: number | null
	saleitem: number,
	author: string,
	body: string,
	rating: number,
	created_on: string,
	active: boolean,
}


export interface ILogin{
	username: string,
	password: string,
}

export interface IRegister{
	username: string,
	password1: string,
	password2: string,

}

export const loggedInUserInitial = {
	loggedInUser: "",
	setLoggedInUser: () => {}
}

export interface ILoggedInUserInterface{
	loggedInUser: string,
	setLoggedInUser: (loggedInUser: string) => void

}
