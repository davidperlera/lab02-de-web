const pokemon = [
    {
      name: "Pikachu",
      type: "electric",
      attackPoints: 55,
      defensePoints: 40,
    },
    {
      name: "Bulbasaur",
      type: "grass",
      attackPoints: 49,
      defensePoints: 49,
    },
    {
      name: "Charmander",
      type: "fire",
      attackPoints: 52,
      defensePoints: 43,
    },
    {
      name: "Squirtle",
      type: "water",
      attackPoints: 48,
      defensePoints: 65,
    },
];

//1
const firePokemon = pokemon.some((pokemon) => {
    return pokemon.type === "fire";
});

firePokemon
    ? console.log("existe al menos un pokemon tipo fuego")
    : console.log("no existe ningun pokemon de tipo fuego");

//2
const selectedPokemons = pokemon.slice(0,2);
console.log("pokemons selecionados \n")
console.log(selectedPokemons);

//3
const Mewtwo = {
    name: "Mewtwo",
    type: "psychic",
    attackPoints: 110,
    defensePoints: 90,
};

pokemon.splice(2,0,Mewtwo);
console.log(pokemon);

//4
pokemon.splice(1,1);
console.log("pokemon borrado \n")
console.log(pokemon);

//5
const infPokemons = pokemon.map((pokemon) => {
    const name = pokemon.name;
    const type = pokemon.type;
    const attack = pokemon.attackPoints;
    const defense = pokemon.defensePoints;
    return `the pokemon ${name} is a ${type} with ${attack} attack points and ${defense} defense points`;
});

console.log("informacion pokemon------------------------------\n")
console.log(infPokemons);

/*
const subjectAndSemester = itemsArray.map((item) => {
  return `La materia ${item.name} corresponde al semestre ${item.semester}`;
});
*/

//6

const attack  = pokemon.reduce((previusValue, currentValue) => {
    return currentValue.attackPoints + previusValue;
}, 0);

const defense  = pokemon.reduce((previusValue, currentValue) => {
    return currentValue.defensePoints + previusValue;
}, 0);

if(attack > defense){
    console.log(`el equipo posee mas puntos de ataque con ${attack} puntos de ataque y ${defense} puntos de defensa`);
}else if(attack === defense){
    console.log(`los puntos de ataque y defensa son equivalentes con ${attack} de ataque y ${defense} de defensa`);
}else{
    console.log(`el equipo posee mas puntos de defensa con ${defense} puntos de defensa y ${attack} puntos de ataque`);
}
