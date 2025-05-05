import { useRef, useState } from 'react'
import React from '../../assets/react.svg'
import './style.css'

function Home() {

	const [users, setUsers] = useState([])

	const inputName = useRef()
	const inputAge = useRef()
	const inputEmail = useRef()

	function cadastrar(){
		setUsers([{
			id: 'asdfasdf',
			nome: inputName.current.value,
			idade: inputAge.current.value,
			email: inputEmail.current.value,
		}])
		inputName.current.value = ''
		inputAge.current.value = ''
		inputEmail.current.value = ''
	}

	return (
		<div className='container'>
			<form>
				<h1> Cadastro de Usuarios </h1>
				<input ref={inputName} placeholder='Nome' type="text" name='nome' />
				<input ref={inputAge} placeholder='Idade' type="text" name='idade' />
				<input ref={inputEmail} placeholder='Email' type="email" name='email' />
				<button type='button' onClick={cadastrar}>Cadastrar</button>
			</form>

			{users.map(user => (

				<div key={user.id} className='card'>
					<div>
						<p> nome: <span>{user.nome }</span></p>
						<p> email: <span>{user.email}</span></p>
						<p> idade: <span>{user.idade}</span></p>
					</div>
					<button>
						<img src={React} />
					</button>
				</div>
			))}
		</div>
	)
}

export default Home
