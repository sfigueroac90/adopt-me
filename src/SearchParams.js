import { async } from "q";
import { useEffect, useState } from "react";
import Pet from "./Pet"

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const BREEDS = [];
  
  useEffect(()=>{
    requestPets();
  })

  async function requestPets(){
    const dir = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
    console.log("Dir:" + dir)
    const res = await fetch(dir)
    const json = await res.json();
    console.log(json)
    setPets(json.pets);
  }

  const isRaining = location === "Seattle, WA" ? "Raining" : "Not raining";
  return (
    <div className="search-params">
      {isRaining}
      <form>
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value=""></option>
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
            /
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option value=""></option>
            {BREEDS.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
            /
          </select>
        </label>
        <button>Submmit</button>
      </form>
      {
        pets.map((pet) => ( <Pet  name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} /> )
          )
      }
    </div>
  );
};

export default SearchParams;
