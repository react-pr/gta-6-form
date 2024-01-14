import axios from 'axios'

interface IData {
	name: string
	email: string
}

export const UserService = {
	async getAll(): Promise<IData[]> {
		// const getRequest: string = process.env.REACT_APP_GET as string
		const response = await axios.get<IData[]>(
			'https://gta-service.onrender.com/users/users/'
		)
		return response.data
	},
	async pushOne(data: IData): Promise<number> {
		// const postRequest: string = process.env.REACT_APP_POST as string
		const response = await axios.post<IData>(
			'https://gta-service.onrender.com/new-user/',
			data
		)
		return response.status
	},
}
