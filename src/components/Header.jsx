import logo from "./assets/Brand Icon.png"

const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h1>{props.navTit}</h1>
      {props.showButton && <button>Add Item</button>}
    </div>
  )
}

export default Header