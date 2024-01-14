import { SubmitHandler, useForm } from 'react-hook-form'
import '../index.css'

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
	const isSuccess: boolean = false
	const formSubmit: SubmitHandler<IFormState> = data => {
		console.log(data)
		reset()
	}
	return (
		<div className='w-screen min-h-screen relative'>
			<form action='' className='form' onSubmit={handleSubmit(formSubmit)}>
				{isSuccess ? (
					<p className='z-[2] succes text-[#7ac27a] text-[20px]'>
						Form submitted!
					</p>
				) : (
					<>
						<h1 className='text-[30px] text-[#fbf8f8] font-extrabold'>
							Push form to get GTA6
						</h1>
						<input
							type='name'
							placeholder='Enter name'
							{...register('name', { required: 'Name is required' })}
						/>
						{errors.name && (
							<p className='z-10 text-[#00FF00] font-extrabold text-[12px]'>
								{errors.name.message}
							</p>
						)}
						<input
							type='email'
							placeholder='Enter email'
							{...register('email', { required: 'Email is required' })}
						/>
						{errors.email && (
							<p className='z-10 text-[#00ff00] font-extrabold text-[12px]'>
								{errors.email.message}
							</p>
						)}
						<button className='text-[14px] font-bold px-[20px] py-[10px] text-center rounded-md bg-slate-600 hover:bg-slate-900 transition-all ease-in-out text-[#fff]'>
							Get GTA6
						</button>
					</>
				)}
			</form>
		</div>
	)
}
