import React from 'react';
import { useState, useContext } from 'react';
import style from './login.module.css';
import formStyles from 'library/formStyles.module.css';
import { sendLogin } from 'library/apifunctions';


import { LoggedInUser } from 'pages/layout/layout';

export const UserLogin: React.FC = () => {
	const [username, setUsername] = useState<string>("")
	const [pass, setPass] = useState<string>("")

	const [loginError, setLoginError] = useState<any>("")

	const { loggedInUser, setLoggedInUser } = useContext(LoggedInUser)

	async function handleLoginSubmit() {
		const userData = {
			"username": username,
			"password": pass,
		}
		let a = await sendLogin(userData)
		a.non_field_errors
			?
			setLoginError(a.non_field_errors[0])
			:
			setLoggedInUser(a.user_name)
	}


	return (
		<>
			{loggedInUser === 'default' ?
				<div className={style.loginFormContainer}>
					<div className={style.loginWrap}>
						<div className={formStyles.inputField}>
							username:
							<input onChange={e => setUsername(e.target.value)} />
						</div>
						<div className={formStyles.inputField}>
							password:
							<input type={'password'} onChange={e => setPass(e.target.value)} />
						</div>
						<button className={formStyles.formButton} onClick={handleLoginSubmit}>Login</button>
						<div className={style.loginError}>{loginError}</div>
					</div>
				</div> :
				<div>
					Currently logged in as {loggedInUser}
				</div>
			}
		</>
	)
}

