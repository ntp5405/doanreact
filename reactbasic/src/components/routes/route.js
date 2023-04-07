
import Culture from "../culture/Culture";
// import Home from "../home/mainContent/homes/Home";
import Login from "../login/Login";
import Singlepages from "../singlePages/Singlepages";
import Homepages from "../home/Homepages";
import Register from "../Register/Register";
import Politics from "../politics/politics";
import EditableUserProfile from "../userProfile/UserProfile";
import UserProfile from "../userProfile/UserProfile";


export const publicRoutes = [

    { path: "/", component: Homepages },
    { path: "/singlepage/:id", component: Singlepages },
    { path: "/culture", component: Culture },
    { path: "/politics", component: Politics },
    { path: "/login", component: Login, layout: null },
    { path: "/register", component: Register, layout: null },
    { path: "/userprofile", component: UserProfile },


]