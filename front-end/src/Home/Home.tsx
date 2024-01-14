import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormButton } from '../components/HomeComponents/FormButton'
import { FormTitle } from '../components/HomeComponents/FormTitle'
import { HandleError } from '../components/HomeComponents/HandleError'
import { RequiredError } from '../components/HomeComponents/RequiredError'
import '../index.css'
import { UserService } from '../userServices/UserService'

interface IFormState {
	name: string
	email: string
}

export const Home = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormState>({
		mode: 'onChange',
	})
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const formSubmit: SubmitHandler<IFormState> = async data => {
		const response = await UserService.pushOne(data)
		if (response === 200) setIsSuccess(true)
		reset()
	}
	return (
		<div className='w-screen min-h-screen relative'>
			<form action='' className='form' onSubmit={handleSubmit(formSubmit)}>
				{isSuccess ? (
					<HandleError responseValue='Form submitted!' />
				) : (
					<>
						<FormTitle formTitle='Push form to get GTA6' />
						<input
							type='name'
							placeholder='Enter name'
							{...register('name', { required: 'Name is required!' })}
						/>
						{errors.name && (
							<RequiredError
								requiredError={errors.name.message || 'Name is field!'}
							/>
						)}
						<input
							type='email'
							placeholder='Enter email'
							{...register('email', { required: 'Email is required' })}
						/>
						{errors.email && (
							<RequiredError
								requiredError={errors.email.message || 'Email is field!'}
							/>
						)}
						<FormButton buttonContent='Get GTA' />
					</>
				)}
			</form>
		</div>
	)
}
