import ManageStudent from "../../pages/ManageStudent/ManageStudent.jsx";
import GetAllStudent from "../../pages/GetAllStudent/GetAllStudent.jsx";
import WelcomeForm from "../../pages/WecomeForm/WelcomeForm.jsx";

const routes=[
    {
        name:'manageStudent',
        key:'manageStudent',
        path:'/manageStudent',
        component:<ManageStudent/>
    },
    {
        name:'getAllStudent',
        key:'getAllStudent',
        path:'/getAllStudent',
        component: <GetAllStudent/>
    },
    {
        name:'welcomeForm',
        key:'welcomeForm',
        path:'/welcomeForm',
        component: <WelcomeForm/>
    }
]

export default routes;