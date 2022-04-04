import styled from 'styled-components'

export const Container = styled.div`
	width: 45%;
	height: 80%;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.secondary};
	overflow: hidden;

	@media (max-width: 450px) {
		width: 100%;
		height: 75%;
	}
`

export const Header = styled.div`
	height: 7%;
	background-color: #333444;
	display: flex;
	align-items: center;
	padding-left: 10px;

	div {
		height: 20px;
		width: 20px;
		border-radius: 50%;
		margin-right: 10px;
		background-color: red;
	}

	div:nth-of-type(1) {
		background-color: #FF433C;
	}

	div:nth-of-type(2) {
		background-color: #F8BC1C;
	}

	div:nth-of-type(3) {
		background-color: #29C840;
	}
`

export const Content = styled.div`
	height: 93%;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 450px) {
		h1 {
			font-size: 1.3rem;
			margin-bottom: 20px;
		}
	}
`

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 450px) {
		flex-wrap: wrap;

		button {
			min-width: 45%;
			margin-bottom: 10%;
		}
	}
`

export const Response = styled.div`
	height: 50%;
	width: 100%;
	background-color: #333444;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.8rem;

	@media (max-width: 450px) {
		height: 35%
	}
`
