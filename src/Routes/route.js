import Home from "../Pages/Home"
import Print from "../Pages/Print"
import Blog from "../Pages/Blog"
const router = [
    {
        path: '/home', 
        element: Home 
    }, 
    {
        path: '/print', 
        element: Print
    }, 
    {
        path: '/blog', 
        element: Blog 
    }
] 
export default router 