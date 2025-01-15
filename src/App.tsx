import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/UsersApp/Layout/Layout"
import Home from "./pages/UsersApp/Home/Home"
import Users from "./pages/UsersApp/Users/Users"

//lessons
import Lesson16 from "./lessons/Lesson16/Lesson16"
//homeworks
import Homework16 from "./homeworks/Homewrok16/Homewrok16"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Lesson16 /> */}
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout> */}
      <Homework16 />
    </BrowserRouter>
  )
}
export default App
