import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notification/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../Utils/utils";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: this.props.isLoggedIn,

      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ],

      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ]
    }
  }

  render() {
    const { isLoggedIn, listCourses, listNotifications } = this.state;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
