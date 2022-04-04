import { Container, Hero } from './styles'
import { Window } from '../Window'

export const App = () => {
	return (
		<Container>
			<Hero>
				<h1>
					Consulte o IPCA Acumulado
					<br /> dos últimos meses!
				</h1>
				<img src="images/percentage.svg" width={550} alt="graphic" />
			</Hero>
			<Window />
		</Container>
	)
}
