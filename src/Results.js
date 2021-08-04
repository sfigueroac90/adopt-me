import Pet from "./Pet"

const  Results = ({pets}) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>Not found pets</h1>
            ): (
                pets.map((pet) => {
                    return (<Pet
                        amimal={pet.animal}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        images={pet.image}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />);
                })
            )
            }
        </div>)
}

export default Results;
