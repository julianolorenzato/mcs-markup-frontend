import { useState } from 'react'
import { Container, Header, Content, ButtonContainer, Response } from './styles'
import { Button } from '../Button'
import { ClipLoader } from 'react-spinners'
import axios from 'axios'

export const Window = () => {
	const [IPCA, setIPCA] = useState('')
	const [loading, setLoading] = useState(false)

	axios.interceptors.request.use(
		function (config) {
			setLoading(true)
			return config
		},
		function (error) {
			return Promise.reject(error)
		}
	)

	axios.interceptors.response.use(
		function (response) {
			setLoading(false)
			return response
		},
		function (error) {
			return Promise.reject(error)
		}
	)

	const getIPCA = async monthsNumber => {
		const monthsInMilliseconds = monthsNumber * 2629800000
		const currentMiliseconds = new Date().valueOf()
		const initialDate = new Date(
			currentMiliseconds - monthsInMilliseconds
		).toLocaleDateString()

		const resp = await axios.get(
			`https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=${initialDate}&dataFinal=31/12/2100`
		)

		const values = resp.data.map(month => parseFloat(month.valor))
		const acumulatedIPCA = values.reduce((prev, curr) => prev + curr)

		setIPCA(`${acumulatedIPCA.toFixed(2)}%`)
	}

	return (
		<Container>
			<Header>
				<div></div>
				<div></div>
				<div></div>
			</Header>
			<Content>
				<h1>Escolha a quantidade de meses:</h1>
				<ButtonContainer>
					<Button
						onClick={() => {
							getIPCA(3)
						}}
					>
						3 Meses
					</Button>
					<Button
						onClick={() => {
							getIPCA(6)
						}}
					>
						6 Meses
					</Button>
					<Button
						onClick={() => {
							getIPCA(12)
						}}
					>
						1 Ano
					</Button>
					<Button
						onClick={() => {
							getIPCA(24)
						}}
					>
						2 Anos
					</Button>
					<Button
						onClick={() => {
							getIPCA(36)
						}}
					>
						3 Anos
					</Button>
				</ButtonContainer>
				<Response>{loading ? <ClipLoader /> : IPCA}</Response>
			</Content>
		</Container>
	)
}
