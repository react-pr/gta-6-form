import axios from 'axios'

interface IData {
	name: string
	email: string
}

export const UserService = {
	async getAll(): Promise<IData[]> {
		const response = await axios.get<IData[]>('http://localhost:8000/users/')
		return response.data
	},
	async pushOne(data: IData): Promise<number> {
		const response = await axios.post<IData>(
			'http://localhost:8000/new-user/',
			data
		)
		return response.status
	},
}
