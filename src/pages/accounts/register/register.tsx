import React, { useState } from 'react';

//styles
import style from './register.module.css';
import formStyle from 'library/formStyles.module.css';

//api
import { sendAuth } from 'library/api/userfetch';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/userslice';

export const RegisterUser: React.FC = () => {
	const [username, setUsername] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [pass, setPass] = useState<string>("")
	const [repeatpass, setRepeatPass] = useState<string>("")

	const [registerError, setRegisterError] = useState<any>("")

	//redux
	const dispatch = useDispatch();
	const user = useSelector((state: any) => state.user.value);

	const passcheck = (pass1: string, pass2: string) => {
		if (pass1 !== pass2) {
			setRegisterError("passwords do not match")
		} else if (pass1.length < 5) {
			setRegisterError("password too short")
		} else {
			handleRegisterSubmit()
		}
	}

	async function handleRegisterSubmit() {
		const userData = {
			"username": username,
			"password": pass,
			"password2": repeatpass,
		}
		let a = await sendAuth(userData)
		a.username 
			? dispatch(setUser(a))
			: setRegisterError("username already exists")
	}

	return (
		<>
			{!user.username 
				? <div className={style.registerFormContainer}>
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
						<button className={formStyle.formButton} onClick={() => passcheck(pass, repeatpass)}>Register</button>
						<div>{registerError}</div>
					</div>
				  </div>
				: <div className={style.registerConfirmation}>User created: {user.username}</div>
			}
		</>
	)
}
