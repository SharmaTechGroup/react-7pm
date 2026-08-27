import { createBrowserRouter } from "react-router-dom";
import { FoodAppIndex } from "../food-app/food-app-index";
import { FoodAppHome } from "../food-app/food-app-home";
import { FoodAppList } from "../food-app/food-app-list";


const router = createBrowserRouter([
    {
        path: '/',
        element: <FoodAppIndex />
    },
    {
        path: '/home',
        element: <FoodAppHome />,
        children: [
            {
                path: 'list',
                element: <FoodAppList />
            }
        ]
    }
])

export default router;