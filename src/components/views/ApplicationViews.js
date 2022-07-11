import { Outlet, Route, Routes } from "react-router-dom"
import { Menu } from "../menu/Menu"
import { Orders } from "../orders/Orders"


export const ApplicationViews = () => {
	return (
				<Routes>
						<Route path="/" element={
							<>
								<h1>Mama Leoni's Pizza Parlor</h1>
								<div>We make only the freshest pies in the tri-state area</div>

								<Outlet />
							</>
						}>
							<Route path="menu" element={<Menu />} />
							<Route path="orders" element={ <Orders /> } />
						</Route>
				</Routes>
			)
}
