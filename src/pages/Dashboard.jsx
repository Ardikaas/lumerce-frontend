import Header from "../components/Header"
import Tabel from "../components/Table"

const Dashboard = () => {
  const navTit = "Dashboard"
  const button = true
  return(
    <div>
      <Header navTit={navTit} showButton={button}/>
      <Tabel/>
    </div>
  )
}

export default Dashboard