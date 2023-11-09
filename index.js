const state = {
    theDogs: []
};
const getPuppies = async() =>{
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`);
    const allPuppies = await response.json();
    const thePuppies  = allPuppies.data.value;
    this.state.push(thePuppies)
    console.log(thePuppies);
};

const renderTheDogs = () => {
    const main = document.querySelector(`main`);
    const h2 = document.createElement(`h2`);
  
}

console.log(state)