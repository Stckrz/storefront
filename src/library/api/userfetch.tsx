import { ILogin, IRegister } from 'library/contextstuff';

export async function sendAuth(sendData: IRegister) {
	try {
		const response = await fetch('http://127.0.0.1:5000/user/register', {
			headers: { "Content-Type": 'application/json' },
			method: 'POST',
			body: JSON.stringify(sendData)
		})
		const data = await response.json()
			console.log(data)
			return data
	} catch (error) { console.log(error) }
}

export async function sendLogin(login: ILogin) {
	try {
		const response = await fetch('http://127.0.0.1:5000/user/login', {
			headers: { "Content-Type": 'application/json' },
			method: 'POST',
			body: JSON.stringify(login)
		})
		const data = await response.json()
		console.log(data)
		return data
	} catch (error) { console.log(error) }
}
