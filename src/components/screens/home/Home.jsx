import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'
import Statistics from '../profile/statistics/Statistics'


function Home() {
	const navigate = useNavigate()

	return (
	<Layout bgImage = '/images/home-bg2.jpg'>
		<Button clickHandler={() => navigate ('/new-workout')}> 
			New
	    </Button>
		<h1 className = {styles.heading}>
          EXERCISES FOR THE SHOULDER
		</h1>
		<Statistics />
	</Layout>
	)
}

export default Home
