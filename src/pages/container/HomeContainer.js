import React,{useState,useEffect} from 'react'
import Redux,{createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

/* Importando presenter */
import HomePresenter from '../presenter/HomePresenter'

const HomeContainer = () => {

	const [initialState, setInitialState] = useState([
		{
			id:1,
			document:"24130237",
			name:"Hugo",
			last_name:"Zorrilla",
			telephone:"04148125531",
			email:"hugo_zorrilla@hotmail.com"
		},
		{
			id:2,
			document:"24130238",
			name:"Rafael",
			last_name:"Zorrilla",
			telephone:"04148125532",
			email:"rafael_zorrilla@hotmail.com"
		},
		{
			id:2,
			document:"24130239",
			name:"Ali",
			last_name:"Zorrilla",
			telephone:"04148125533",
			email:"ali_zorrilla@hotmail.com"
		}
	])

	const [reducer,setReducer] = useState(0)

	/* consultado en la base de datos */
	useEffect(() => {
		test()
	},[]); 

	const test = () => {
		createStore(
			(state) => state,
			initialState,
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		)
	}

	return(
		<>
			<HomePresenter/>
		</>
	)
}
export default HomeContainer