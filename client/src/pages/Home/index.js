import React from "react";
import "materialize-css";
import { Row, Col } from "react-materialize";
import Headlines from "../../components/Headlines";
import Chat from '../../components/Chat/Chat'
import { HomePageWrapper } from "../../assets/styles";
import "./style.css"
import API from "../../utils/API.js";



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
            <img src="https://media.giphy.com/media/2XflxzDAw5pn6WaA372/source.gif"
              className="home-image"
            />
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
