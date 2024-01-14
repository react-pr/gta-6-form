interface IButtonContent {
	buttonContent: string
}

export const FormButton = ({ buttonContent }: IButtonContent) => {
	return (
		<button className='text-[14px] font-bold px-[20px] py-[10px] text-center rounded-md bg-slate-600 hover:bg-slate-900 transition-all ease-in-out text-[#fff]'>
			{buttonContent}
		</button>
	)
}
