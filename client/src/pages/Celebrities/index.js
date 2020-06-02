import React, { useState, useEffect } from "react";
import "materialize-css";
import { Container, Row, Col } from "react-materialize";
import _ from "lodash";

import CelebSearchBar from "../../components/CelebSearchBar";
import DefaultCelebProfileImage from "../../components/CelebProfileImageDefault";
import DefaultCelebBiography from "../../components/CelebBiographyDefault";
import FavoriteCelebs from '../../components/FavoriteCelebs'
import FavoriteCelebsDefault from '../../components/FavoriteCelebsDefault'
import API from "../../utils/API";
import { user } from "../../utils/helpers";
import axios from "axios";
import $ from 'jquery';
import "./style.css";

const userId = user()._id;

const Celebrities = ({ celebrities, setCelebrities, token, communityCelebrities, setCommunityCelebrities }) => {

  const addFavorite = () => {
    const celebName = state.name;

    console.log("celebrities: ", celebrities);
    console.log("setCelebrities: ", setCelebrities);

    const newCelebList = celebrities.slice();
    newCelebList.push({
      celeb_name: celebName
    })
    setCelebrities(newCelebList);

    axios
      .put("/api/celebrities", { userId, celebName })
      .then((result) => {
        console.log("Adding celeb favorites...");

        axios
          .get('/api/celebrities')
          .then((response) => {
            console.log("Celeb page add favorite getCommunityCelebrities response data: ", response.data);
            setCommunityCelebrities(response.data);
          })

      })
      .catch((error) => {
        console.log(error);
      });


    $('.celeb-favorite-added').show()
    setTimeout(() => {
      $('.celeb-favorite-added').hide()
    }, 2000)

  };
  const setNotification = () => {
    alert('NOTIFICATION SET');
  };
  const watchContent = () => {
    alert('GO TO CONTENT PROVIDER');
  };
  const shareContent = () => {
    alert('CONTENT SHARED');
  };

  // Celebrities delete function

  function deleteCeleb(celebName) {

    const celebList = celebrities.slice();
    const newCelebList = celebList.filter(item => item.celeb_name !== celebName);
    setCelebrities(newCelebList);

    axios
      .delete(`/api/celebrities/${userId}/${celebName}`)
      .then((result) => {
        console.log("Deleting: ", celebName);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const [state, setState] = useState({
    userInput: "",
    name: "",
    profile_path: "",
    known_for: "",
    birthday: "",
    deathday: "",
    biography: "",
    media_type: "",
  });

  const { userInput } = state;
  const imageURL = "https://image.tmdb.org/t/p/w500";

  async function celebSearch(entry) {
    !entry ? alert("Enter a celebrity name.") : console.log('na');
    const mainData = await API.celebSearch(entry);
    if (!mainData.data.results[0]) {
      $('.celeb-search-fail').show()
      setTimeout(() => {
        $('.celeb-search-fail').hide()
      }, 2000)
      return;
    }
    $('.celeb-search-fail').hide();
    const searchInfo = mainData.data.results[0];
    const { id, name, profile_path, profile, media_type } = searchInfo;

    const celebrityDetails = await API.celebrityDetailsSearch(id);
    const celebrityDetailsInfo = celebrityDetails.data;

    const trendingCelebrities = await API.trendingCelebritiesSearch();
    const trendingCelebritiesInfo = trendingCelebrities.data;

    console.log("searchInfo ", searchInfo);
    console.log("name ", name);
    console.log("profile_path ", profile_path);
    console.log("profile ", profile);
    console.log("celebrityDetailsInfo ", celebrityDetailsInfo);
    console.log(`state: `, state);
    console.log("seartrendingCelebritiesInfo", trendingCelebritiesInfo);

    setState({
      ...state,
      id: id,
      media_type: media_type,
      name: searchInfo.name,
      profile: profile_path != null ? `${imageURL}` + profile_path : 'https://via.placeholder.com/375x475/000000/FFFFFF/?text=NO IMAGE AVAILABLE',
      known1:
        searchInfo.known_for[0].media_type === "tv"
          ? searchInfo.known_for[0].name
          : searchInfo.known_for[0].title,
      known2:
        searchInfo.known_for[0].media_type === "tv"
          ? searchInfo.known_for[1].name
          : searchInfo.known_for[1].title,
      known1Img: `${imageURL}` + searchInfo.known_for[0].poster_path,
      known2Img: `${imageURL}` + searchInfo.known_for[1].poster_path,
      known3Img: `${imageURL}` + searchInfo.known_for[2].poster_path,
      known1Overview: searchInfo.known_for[0].overview,
      known2Overview: searchInfo.known_for[1].overview,
      known3Overview: searchInfo.known_for[2].overview,
      birth: celebrityDetailsInfo.birthday,
      death: celebrityDetailsInfo.deathday,
      biography: celebrityDetailsInfo.biography,
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    celebSearch(userInput);
    $('.search-input-box').val('');

  };

  useEffect(() => {
    axios
      .get('/api/celebrities')
      .then((response) => {
        console.log("Celeb page getCommunityCelebrities response data: ", response.data);
        setCommunityCelebrities(response.data);
      })
  }, []);

  useEffect(() => {
    const existingFavoriteCeleb = celebrities.filter((el) => el.celeb_name === state.name)
    existingFavoriteCeleb.length > 0 ? ($('.favorite').hide()) : ($('.favorite').show());
  }, [celebrities]);


  useEffect(() => {
    trendingCelebritiesSearch()
    async function trendingCelebritiesSearch() {
      const trendingCelebsData = await API.trendingCelebritiesSearch();
      const trendingCelebsInfo = trendingCelebsData.data;
      console.log('trendingCelebsInfo ', trendingCelebsInfo.results[0])
      setState({
        ...state,
        trendingImage1: [`${imageURL}` + trendingCelebsInfo.results[0].profile_path],
        trendingImage2: [`${imageURL}` + trendingCelebsInfo.results[1].profile_path],
        trendingImage3: [`${imageURL}` + trendingCelebsInfo.results[2].profile_path],
        trendingImage4: [`${imageURL}` + trendingCelebsInfo.results[3].profile_path],
        trendingImage5: [`${imageURL}` + trendingCelebsInfo.results[4].profile_path],
        trendingImage6: [`${imageURL}` + trendingCelebsInfo.results[5].profile_path],
        trendingImage7: [`${imageURL}` + trendingCelebsInfo.results[6].profile_path],
        trendingImage8: [`${imageURL}` + trendingCelebsInfo.results[7].profile_path],
        trendingImage9: [`${imageURL}` + trendingCelebsInfo.results[8].profile_path],
        trendingImage10: [`${imageURL}` + trendingCelebsInfo.results[9].profile_path],
        trendingImage11: [`${imageURL}` + trendingCelebsInfo.results[10].profile_path],
        trendingName1: [trendingCelebsInfo.results[0].name],
        trendingName2: [trendingCelebsInfo.results[1].name],
        trendingName3: [trendingCelebsInfo.results[2].name],
        trendingName4: [trendingCelebsInfo.results[3].name],
        trendingName5: [trendingCelebsInfo.results[4].name],
        trendingName6: [trendingCelebsInfo.results[5].name],
        trendingName7: [trendingCelebsInfo.results[6].name],
        trendingName8: [trendingCelebsInfo.results[7].name],
        trendingName9: [trendingCelebsInfo.results[8].name],
        trendingName10: [trendingCelebsInfo.results[9].name],
        trendingName11: [trendingCelebsInfo.results[10].name]

      })
    }
  }, []);




  console.log('celebrities', celebrities)
  console.log("STATE: ", state)
  return (

    <Container>
      <Row>
        <Col m={4}></Col>
        <Col m={4}>
          <>
            <div className='celeb-search-fail'>No results found for <strong>{userInput.toUpperCase()}</strong>.</div>
            <CelebSearchBar
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </>
        </Col>
        <Col m={4}></Col>
      </Row>

      {state.name ? (

        <Row>
          <Col m={5}>
            {state.name ? (
              <h2 className="celeb-name">{state.name}</h2>
            ) : (
                <h2 className="celeb-name">Celebrities</h2>
              )}
            {state.name ? (
              <>
                <img
                  className="celeb-profile-pic"
                  src={state.profile}
                  alt={state.name}

                />
                {token ? (
                  <div className='celeb-result-btns'>
                    <span onClick={addFavorite}>
                      <span className='material-icons favorite'>favorite</span>
                    </span>
                    <span onClick={setNotification}>
                      <span className='material-icons notify'>notifications</span>
                    </span>
                    <span onClick={watchContent}>
                      <span className='material-icons watch'>tv</span>
                    </span>
                    <span onClick={shareContent}>
                      <span className='material-icons watch'>share</span>
                    </span>
                    <div className='celeb-favorite-added'><strong>{state.name.toUpperCase()}</strong> added to favorites</div>
                  </div>
                ) : (
                    console.log('User is not logged in.')
                  )}

              </>
            ) : (
                <DefaultCelebProfileImage />
              )}
          </Col>
          <Col m={4}>
            {state.name ? (
              <>
                <br></br><br></br><br></br>
                <p className="celeb-biography">
                  <h6 className="biography-title">Biography</h6>
                  {_.truncate(state.biography, {
                    length: 740,
                    separator: "...",
                  })}
                </p>
                <div className="celeb-appearances-overview">
                  <h6 className="appearances-title">Appearances</h6>
                  <a href={state.known1Img}>
                    <img
                      className="known"
                      src={state.known1Img}
                      alt="{state.known1}"
                    />
                  </a>
                  <p>{state.known1Overview}</p>
                  <hr></hr>
                  <br></br>
                  <a href={state.known2Img}>
                    <img
                      className="known"
                      src={state.known2Img}
                      alt="{state.known1}"
                    />
                  </a>
                  <p>{state.known1Overview}</p>
                  <hr></hr>
                  <br></br>
                  <a href={state.known3Img}>
                    <img
                      className="known"
                      src={state.known3Img}
                      alt="{state.known1}"
                    />
                  </a>
                  <p>{state.known1Overview}</p>
                </div>
              </>
            ) : (
                <DefaultCelebBiography />

              )}
          </Col>
          <Col m={3}>
            {token ? (
              <>
                <br></br><br></br>
                <FavoriteCelebs heading={'MY PEOPLE'} deleteCeleb={deleteCeleb} celebrities={celebrities} setCelebrities={setCelebrities} celebSearch={celebSearch} />
                <br></br>
                <FavoriteCelebsDefault heading={'COMMUNITY PEOPLE'} communityCelebrities={communityCelebrities} setCommunityCelebrities={setCommunityCelebrities} celebSearch={celebSearch} />



              </>
            ) : (
                <>
                  <br></br><br></br>
                  <FavoriteCelebsDefault heading={'COMMUNITY PEOPLE'} communityCelebrities={communityCelebrities} setCommunityCelebrities={setCommunityCelebrities} celebSearch={celebSearch} />
                </>
              )}
          </Col>
        </Row>

      ) : (
          <>
            <Row>
              <Col m={5}>
                <DefaultCelebProfileImage />
              </Col>
              <Col m={4} >
                <div className='celeb-welcome-div'>
                  <h4 className='celeb-welcome-title'>Stay in the know.</h4>
                  <p className='celeb-welcome'>With entertainMe, you can find the the latest info on your favorite celebrities. Keeping up with the Joneses has never been so fun.</p>
                </div>
              </Col>
              <Col m={3}>
                <>
                  <br></br>
                  <FavoriteCelebsDefault heading={'COMMUNITY PEOPLE'}
                    communityCelebrities={communityCelebrities}
                  />
                </>
              </Col>
            </Row>

            <Row>
              <Col m={12}>
                <h6 className="trending-celeb-title">TRENDING</h6>
                <img
                  className="trending-celeb-images2"
                  src={state.trendingImage1}
                  title={state.trendingName1}
                  alt={state.trendingName1}
                />
                <img
                  className="trending-celeb-images2"
                  src={state.trendingImage2}
                  title={state.trendingName2}
                  alt={state.trendingName2}
                />
                <img
                  className="trending-celeb-images2"
                  src={state.trendingImage3}
                  title={state.trendingName3}
                  alt={state.trendingName3}
                />
                <img
                  className="trending-celeb-images2"
                  src={state.trendingImage4}
                  title={state.trendingName4}
                  alt={state.trendingName4}
                />
                <img
                  className="trending-celeb-images2"
                  src={state.trendingImage5}
                  title={state.trendingName5}
                  alt={state.trendingName5}
                />
                <img
                  className="trending-celeb-images2"
                  src={state.trendingImage6}
                  title={state.trendingName6}
                  alt={state.trendingName6}
                />
                <img
                  className="trending-celeb-images2"
                  src={state.trendingImage7}
                  title={state.trendingName7}
                  alt={state.trendingName7}
                />
              </Col>
            </Row>
          </>

        )}
      <Row></Row>
    </Container>
  );
};

export default Celebrities;