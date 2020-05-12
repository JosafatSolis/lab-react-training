import React, { Component } from "react";
import "./index.css";
import IdCard from "./IdCard";
import IdCardData from "./data/idCards.json";
import Greetings from "./Greetings";
import Random from "./Random";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import FaceBook from "./components/Facebook";
import FaceBookAdvanced from "./components/FaceBook_Advanced";
import SignupPage from "./components/SignupPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard {...IdCardData[0]} />
        <IdCard {...IdCardData[1]} />
        <h1>Greetings</h1>
        <Greetings lang="de" children="Ludwing" />
        <Greetings lang="fr" children="Francois" />
        <h1>Random</h1>
        <Random min="1" max="6" />
        <Random min="1" max="100" />
        <h1>BoxColor</h1>
        <BoxColor r="255" g="0" b="0" />
        <BoxColor r="128" g="255" b="0" />
        <h1>Credit Card</h1>
        <div style={{ height: 200 }}>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
        <h1 style={{ clear: "both" }}>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <h1>DriveCard</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE",
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER",
          }}
        />
        <h1>LikeButton</h1>
        <LikeButton /> <LikeButton />
        <h1 style={{ clear: "both" }}>ClickablePicture</h1>
        {/* La imagen se define como si estuviéramos en Public */}
        <ClickablePicture
          img="./img/persons/maxence.png"
          imgClicked="./img/persons/maxence-glasses.png"
        />
        <h1>Dice</h1>
        <Dice />
        <h1>Carousel</h1>
        <Carousel
          imgs={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg",
          ]}
        />

        <h1>NumbersTable</h1>
        <NumbersTable limit={12} />

          <h1>FaceBook | Simple</h1>
          <FaceBook />

          <h1>FaceBook | Advanced</h1>
          <FaceBookAdvanced />

          <h1>Form | SignupPage</h1>
          <SignupPage />

      </div>
    );
  }
}

export default App;
