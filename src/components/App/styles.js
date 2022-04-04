import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 450px) {
		flex-direction: column;
		justify-content: center;
	}
`

export const Hero = styled.div`
	width: 40%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-size: 1.8rem;

	@media (max-width: 450px) {
		width: 100%;
		height: 20%;
		font-size: 1rem;
		text-align: center;
		justify-content: center;

		img {
			display: none;
		}
	}
`
