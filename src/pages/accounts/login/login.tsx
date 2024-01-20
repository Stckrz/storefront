import React from 'react';
import { useState, useContext } from 'react';
import style from './login.module.css';
import { sendLogin } from 'library/apifunctions';


import { LoggedInUser } from 'pages/layout/layout';

export const UserLogin: React.FC = () => {
	const [username, setUsername] = useState<string>("")
	const [pass, setPass] = useState<string>("")

	const [loginError, setLoginError] = useState<any>("")

	const {setLoggedInUser} = useContext(LoggedInUser)

	async function handleLoginSubmit(){
		const userData = {
			"username": username,
			"password": pass,
		}
		let a = await sendLogin(userData)
		a ? setLoginError(a) : setLoginError("")
		a &&
		setLoggedInUser(a.user_name)
	}


	return (
		<>
			<div className={style.loginFormContainer}>
				username:
				<input onChange={e => setUsername(e.target.value)} />
				pass:
				<input onChange={e => setPass(e.target.value)} />
				<button onClick={handleLoginSubmit}>Login</button>
			</div>
		</>
	)
}

