import React from 'react';
import { useState, useContext } from 'react';
import style from './register.module.css';
import formStyle from 'library/formStyles.module.css';
import { sendAuth } from 'library/apifunctions';

import { LoggedInUser } from 'pages/layout/layout';


export const RegisterUser: React.FC = () => {
	const [username, setUsername] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [pass, setPass] = useState<string>("")
	const [repeatpass, setRepeatPass] = useState<string>("")

	const [registerError, setRegisterError] = useState<any>("")

	const { loggedInUser, setLoggedInUser } = useContext(LoggedInUser)


	async function handleRegisterSubmit() {
		const userData = {
			"username": username,
			"password1": pass,
			"password2": repeatpass,
		}
		let a = await sendAuth(userData)
		console.log(a)
		a === undefined && setLoggedInUser(username)
	}


	return (
		<>
			{loggedInUser === 'default'
				?
				<div className={style.registerFormContainer}>
					<div className={style.registerWrap}>
						<div className={formStyle.inputField}>Username:
							<input onChange={e => setUsername(e.target.value)} className={style.inputBox} />
						</div>
						<div className={formStyle.inputField} >Password:
							<input onChange={e => setPass(e.target.value)} className={style.inputBox} />
						</div>
						<div className={formStyle.inputField} >Repeat Password:
							<input onChange={e => setRepeatPass(e.target.value)} className={style.inputBox} />
						</div>
						<button className={formStyle.formButton} onClick={handleRegisterSubmit}>Register</button>
						{registerError !== "" &&
							Object.keys(registerError).map((item: any) => {
								return (<div>{item}: {registerError[item]}</div>)
							})
						}
					</div>
				</div>
				:
				<div>User created: {username}</div>
			}
		</>
	)
}
