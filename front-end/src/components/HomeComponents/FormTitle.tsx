interface IFormTitle {
	formTitle: string
}

export const FormTitle = ({ formTitle }: IFormTitle) => {
	return (
		<h1 className='text-[30px] text-[#fbf8f8] font-extrabold'>{formTitle}</h1>
	)
}
