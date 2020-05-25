import React from "react";
import "materialize-css";
import { Row, Col } from "react-materialize";
import Headlines from "../../components/Headlines";
import Chat from '../../components/Chat/Chat'
import { HomePageWrapper } from "../../assets/styles";
import "./style.css"
import API from "../../utils/API.js";
import $ from 'jquery';



// const users = [
//   {
//     "name": {
//       "first": "Fred",
//       "last": "Thomas"
//     }
//   },
//   {
//     "name": {
//       "first": "Sandy",
//       "last": "Davis"
//     }
//   },
//   {
//     "name": {
//       "first": "Erica",
//       "last": "Lane"
//     }
//   },
//   {
//     "name": {
//       "first": "Roger",
//       "last": "Willis"
//     }
//   },
//   {
//     "name": {
//       "first": "Roxanna",
//       "last": "Garcia"
//     }
//   },
// ];

// export default class Home extends Component {
//   state = {
//     Users: [],
//     filteredUsers: []
//   };

//   componentDidMount() {
//     API.getRandomUsers().then(users => {
//       console.log(users);
//       this.setState({
//         Users: users.data.results,
//         filteredUsers: users.data.results
//       });
//     });
//   }


// }


const Home = (props) => {


  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text1'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>MOVIE</span>.</h5>`);
    // document.getElementById("home").setAttribute("class", 'home-image-text');
  }, 2800)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text2'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>SHOW</span>.</h5>`);
  }, 4000)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>BOOK</span>.</h5>`);
  }, 4250)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>GAME</span>.</h5>`);
  }, 4500)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>CHARACTER</span>.</h5>`);
  }, 4750)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>EPISODE</span>.</h5>`);
  }, 5000)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>SONG</span>.</h5>`);
  }, 5250)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text4'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>SCENE</span>.</h5>`);
  }, 5500)
  setTimeout(function () {
    $("#home").html( `<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>PERSON</span>.</h5>`);
  }, 5750)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>ALBUM</span>.</h5>`);
  }, 6000)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>THING</span>.</h5>`);
  }, 6250)
  setTimeout(function () {
    $("#home").html(`<br><br><h5 id='home-text5'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>THING</span>.</h5><br>
    <img className='home-image' src=${require('../../assets/images/grayLogo.png')} />`);
  }, 8000)


  return (
    <HomePageWrapper>
      <Row></Row>
      <Row>
        <Headlines />
      </Row>
      <Row>
        <Col s={3}>
          <div className="suggestions">
            <h6 className="title">SUGGESTIONS</h6>
            <p className="default-text">
              Side content Side content Side content Side content Side content
              Side content Side content Side content Side content Side content
              Side content Side content Side content
            </p>
          </div>
        </Col>
        <Col s={6}>
          <div className="middle-content">
            {/* <img src="https://media.giphy.com/media/2XflxzDAw5pn6WaA372/source.gif"
              className="home-image"
            /> */}
            <div id='home' className='center-align'>
              <img src={require('../../assets/images/countdown.gif')}
                id='home-image'
              />
            </div>

            <br></br>
            <h5 className="middle-title">DISCOVER YOUR NEXT FAVORITE MOVIE OR TV SHOW</h5>
            <p className="main-paragraph">
              entertainME allows you to search for the latest in trending Movies and TV Shows. Or, looking for a classic?
              You can find that too! Browse for any film or film related celebrity, add to your favorites and share with
              your friends. Your one stop shop for all things entertainment.
            </p>
          </div>
        </Col>

        <Col s={3}>
          <div className="staff-picks">
            <h6 className="title">STAFF PICKS</h6>
            <ul className="default-text">
              <h6>MOVIES</h6>
              <li>Bad Boys For Life</li>
              <li>Avengers: End Game</li>
              <li>1917</li>
              <h6>SHOWS</h6>
              <li>Upload</li>
              <li>The Masked Singer</li>
              <li>Billions</li>
              <h6>PEOPLE</h6>
              <li>Elon Musk</li>
              <li>Will Smith</li>
              <li>Katy Perry</li>
            </ul>
            <br></br>
            <hr className='divider'></hr>
            <br></br>
            <Chat />
          </div>
        </Col>
      </Row>
    </HomePageWrapper >
  );
};

export default Home;
