import { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
   state = {clicked: false};
     // Hàm để thay đổi trạng thái clicked khi click vào biểu tượng menu
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

   render() {
    return (
      <>
       <nav>
        <a href="index.html" id="titleName">Nguyễn Xuân Tiến Dũng</a>

        <div className="group-menu">
            <ul id="Navbar" className={this.state.clicked ? "#Navbar active": "#Navbar"}>
                <li><a href="#" className="Active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">Expensive</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div id="Mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}
              onClick={this.handleClick}
            ></i>
        </div>
       </nav>
      </>
    );
  }
}

export default NavBar;