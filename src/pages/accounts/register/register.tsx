import React from 'react';
import { useState } from 'react';
import style from './register.module.css';
import { sendAuth } from 'library/apifunctions';


export const RegisterUser: React.FC = () => {
	const [username, setUsername] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [pass, setPass] = useState<string>("")
	const [repeatpass, setRepeatPass] = useState<string>("")

	const [registerError, setRegisterError] = useState<any>("")


	async function handleRegisterSubmit() {
		const userData = {
			"username": username,
			"password1": pass,
			"password2": repeatpass,
		}
		let a = await sendAuth(userData)
		a ?
		setRegisterError(a)
		: setRegisterError("")
	}


	return (
		<>
			<div className={style.registerFormContainer}>
				<div>Username:</div>
				<input onChange={e => setUsername(e.target.value)} className={style.inputBox} />
				<div>Email:</div>
				<input onChange={e => setEmail(e.target.value)} className={style.inputBox} />
				<div>Password:</div>
				<input onChange={e => setPass(e.target.value)} className={style.inputBox} />
				<div>Repeat Password:</div>
				<input onChange={e => setRepeatPass(e.target.value)} className={style.inputBox} />
				<button onClick={handleRegisterSubmit}>Register</button>
				{registerError !== "" &&
					Object.keys(registerError).map((item:any) => {
					return (<div>{ item }: {registerError[item]}</div>)
					})
				}
			</div>
		</>
	)
}
