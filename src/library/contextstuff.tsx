export interface ICartItem {
	title: string,
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
	_id: number,
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
			_id: 0,
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
	_id?: string,
	author: string,
	body: string,
	rating: number,
	created_on?: string,
	sale_item_id: string | null
}

export interface ILogin{
	username: string,
	password: string,
}

export interface IRegister{
	username: string,
	password: string,
	// password2: string,
}

export const userInitial = {
	username: "",
	token: ""
}
