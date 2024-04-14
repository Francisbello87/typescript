import "./App.css";
import Greet from "../src/components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading ";
import Oscar from "./components/oscar";
import Button from "./components/Button";
import Input from "./components/input";
import Container from "./components/container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
// import Counter from "./components/state/Counter";
import ThemeContextProvider from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import UserContextProvider from "./components/context/UserContext";
import MutableRef from "./components/ref/MutableRef";
import Counter from "./components/class/Counter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import Toast from "./components/templateLiterals/Toast";
import CustomButton from "./components/html/Button";
import Text from "./components/polymorphic/Text";

function App() {
  const personName = {
    firstName: "Francis",
    lastName: "Bello",
  };

  const nameList = [
    { firstName: "Ben", lastName: "jamin" },
    { firstName: "Tho", lastName: "mas" },
    { firstName: "Temi", lastName: "tope" },
  ];
  return (
    <div className="App">
      <UserContextProvider>
        <ThemeContextProvider>
          {/* <Container styles={{ border: "1px solid red", padding: "1rem" }}> */}
          {/* <Greet name="Francis" isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="loading" />
        <Heading>Placeholder Text</Heading>
        <Oscar>
          <Heading>Oscar Pistoris</Heading>
        </Oscar>

        <Input value="" handleChange={(event) => console.log(event)} /> */}
          {/* <Button
              handleClick={(event, id) => console.log("How Far?", event, id)}
            >
              Click Me
            </Button>
            <LoggedIn />
            <Private isLoggedIn={true} component={Profile}/>
          </Container>
          <User />
          <Counter />
          <Counter/>
          <Box /> */}
          <List
            items={["Rooney", "Drogba", "Fabregas", "Hleb"]}
            onClick={(item) => console.log(item)}
          />
          <List
            items={[
              { firstName: "Francis", lastName: "Franco" },
              { firstName: "Fran", lastName: "Fabregas" },
              { firstName: "Alex", lastName: "Hleb" },
              { firstName: "Samir", lastName: "Nasri" },
            ]}
            onClick={(item) => console.log(item)}
          />
          <Toast position="center" />
          <CustomButton
            variant="primary"
            onClick={() => console.log("clicked")}
          >
            Primary Button
          </CustomButton>
          <Text as='h1' size='lg'>
            Heading
          </Text>
          <Text as='label' htmlFor='id' size='lg'>
            Heading
          </Text>
          <MutableRef />
        </ThemeContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
