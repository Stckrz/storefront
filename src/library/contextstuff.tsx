export interface ICartItem {
	title: string,
	cartId: number,
	productId: number,
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
			productId: 0,
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
	title: string,
	price: number,
	description: string,
	category: string,
	image: string,
}

export const dataInitial: IDataContextInterface = {
	data: [
		{
			id: 0,
			title: "",
			price: 0,
			description: "",
			category: "",
			image: "",

		}],
	setData: () => { }
}

export interface IDataContextInterface {
	data: IProduct[],
	setData: (data: IProduct[]) => void
}
