import './App.css';

function App() {
  var name="Mostafizur Rahman";
  var age="25";
  var job="bekar";
  const family={
    father: "Md Ayen Uddin",
    mother: "Most. Merina Parvin",
    sister: "Anika Tasfiah"
  }
  const familyJob={
    father: "Service Man",
    mother: "house wife",
    sister: "toto company"
  }

  let style={
    color: "white",
    backgroundColor: "red",
  }
  return (
    <div className="App">
      <h1>My name is {name}.</h1>
      <h2>My age is {age} years old.</h2>
      <h3>I am a {job}.</h3>
      <h2>
        My fathers name is {family.father}. <br/>
        My mothers names is {family.mother}. <br/>
        My sisters name is {family.sister}.
      </h2>
      <h2 style={{
    color: "red",
    backgroundColor: "whiteSmoke",
  }}>
        My father is a {familyJob.father}. <br/>
        My mother is a {familyJob.mother}. <br/>
        My sister is a {familyJob.sister}.
      </h2>
      <h2 style={style}>I have a family of {job +", " + familyJob.father +", " + familyJob.mother + " and " + familyJob.sister}</h2>
   <Hobby name="jashim"></Hobby>
   <Job></Job>
   </div>
    
  );
}

function Hobby(props){
  return(
    <div style={{
      border: "3px solid red",
      margin: "15px",
      backgroundColor: "green",
    }}>
      <h1>{props.name}</h1>
      <h2>Full Stack web developer.</h2>
      <h2>Digital Marketing</h2>
      <h2>Graphics Designer</h2>
      <h2>Android Apps Developer</h2>
    </div>
  )
}

function Job(){
  return(
    <div style={{
      border: "3px solid red",
      margin: "15px",
      backgroundColor: "green",
    }}>
      <h2>Backend web developer.</h2>
      <h2>Front-end Web developer.</h2>
    </div>
  )
}

export default App;
