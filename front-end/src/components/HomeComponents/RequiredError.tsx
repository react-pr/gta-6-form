interface IRequiredErorr {
	requiredError: string
}

export const RequiredError = ({ requiredError }: IRequiredErorr) => {
	return (
		<p className='z-10 text-[#00FF00] font-extrabold text-[12px]'>
			{requiredError}
		</p>
	)
}
