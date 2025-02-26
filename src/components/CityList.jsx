import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (!cities.length)
    return (
      <Message message="Add you first city by clicking the city on the map!"></Message>
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.cityName}></CityItem>
      ))}
    </ul>
  );
}

export default CityList;
