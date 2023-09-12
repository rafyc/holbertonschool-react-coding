import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notification/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../Utils/utils";
import { PropTypes } from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      logOut: this.props.logOut,

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

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key == 'h' && (event.ctrlKey || event.metaKey)) {
      alert('Logging you out')
      logOut()
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
            {isLoggedIn ?
              <BodySectionWithMarginBottom title={'Course list'}>
                <CourseList listCourses={listCourses} /> </BodySectionWithMarginBottom> :
              <BodySectionWithMarginBottom title={'Log in to continue'}>
                <Login />
              </BodySectionWithMarginBottom>}
            <BodySection title={'News from the School'}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, adipisci?</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
}

App.propType = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

export default App;
