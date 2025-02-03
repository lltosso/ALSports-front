import { Children } from "react";






export const router = CreateBrowserRouter([
{
    path: "/home",
    element: <home />,
    Children: [
        {
            path: "/products",
            element: <Products />
        },
        {
            path: "/details",
            element: <Details />
        }
    ]
},
{
    path: "/admin",
    element: <Admin />,    
}]);