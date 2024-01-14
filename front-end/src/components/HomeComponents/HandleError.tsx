interface IResponseValue {
	responseValue: string
}

export const HandleError = ({ responseValue }: IResponseValue) => {
	return (
		<p className='z-[2] succes text-[#7ac27a] text-[20px]'>{responseValue}</p>
	)
}
