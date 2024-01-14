import axios from 'axios'

interface IData {
	name: string
	email: string
}

export const UserService = {
	async getAll(): Promise<IData[]> {
		const getRequest: string = process.env.REACT_APP_GET as string
		const response = await axios.get<IData[]>(getRequest)
		return response.data
	},
	async pushOne(data: IData): Promise<number> {
		const postRequest: string = process.env.REACT_APP_POST as string
		const response = await axios.post<IData>(postRequest, data)
		return response.status
	},
}
