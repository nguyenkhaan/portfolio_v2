import Home from "../Pages/Home"
import Blog from "../Pages/Blog" 
import CV from "../Pages/CV"
const router = [
    {
        path: '/home', 
        element: Home 
    }, 
    {
        path: '/blog', 
        element: Blog 
    }, 
    {
        path: '/my-cv', 
        element: CV
    }
] 
export default router 