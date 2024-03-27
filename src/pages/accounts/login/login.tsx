import React, { useState } from 'react';

//styles
import style from './login.module.css';
import formStyles from 'library/formStyles.module.css';

//api
import { sendLogin } from 'library/api/userfetch';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/userslice';

export const UserLogin: React.FC = () => {
	const [username, setUsername] = useState<string>("")
	const [pass, setPass] = useState<string>("")

	const [loginError, setLoginError] = useState<any>("")

	//redux
	const user = useSelector((state: any) => state.user.value);
	const dispatch = useDispatch();

	async function handleLoginSubmit() {
		const userData = {
			"username": username,
			"password": pass,
		}
		let a = await sendLogin(userData)
		if (a.token) {
			dispatch(setUser(a))
			setUsername("");
			setPass("")
		} else {
			setLoginError("incorrect login credentials")
		}
	}

	return (
		<>
			{!user.username ?
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
						<button className={`${formStyles.formButton} ${formStyles.submit}`} onClick={handleLoginSubmit}>Login</button>
						<div className={style.loginError}>{loginError}</div>
					</div>
				</div> :
				<div className={style.loginConfirmation}>
					Currently logged in as {user.username}
				</div>
			}
		</>
	)
}
