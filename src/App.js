import { useEffect, useState } from 'react';
import './App.css';

function App() {
const friends = ['Suman', 'Shovon', 'Zillur', 'Fatin', 'zim'];
const foods = [
  {name: 'Beef', price: '550/kg'},
  {name: 'Mutton', price: '800/kg'},
  {name: 'Chicken', price: '480/kg'},
  {name: 'tomato', price: '50/kg'},
  {name: 'watermelon', price: '20/kg'},
  
]

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
      <Counter></Counter>
      <Users></Users>
      <div>
        <ol>
            {
              friends.map(friend => <li>{friend}</li> )
            }
            {
              foods.map(food => <li>{food.name} {food.price}</li> )
            }
            {
              foods.map(fd => <Food food={fd}></Food> )
            }
          </ol>
      </div>
      
      <div>
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
      </div>
      
   <Hobby name="jashim"></Hobby>
   <Job></Job>
   </div>
    
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () =>setCount(count + 1);
  //  console.log('clicked')

  // const newCount = count + 1;
  // setCount(newCount);

  
  // const handleDecrease = () =>{
    //  console.log('clicked')
  
    // const newCount = count + 1;
    // setCount(newCount);
  
    // setCount(count - 1);
  //  };

  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('calling effect.')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h4>Dynamic User :{users.length}</h4>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
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

function Food(props){
  const foodStyle={
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "150px",
    width: "200px",
    float: "left",
    margin: "20px"
  }

  const {name, price} = props.food;
  return (
    <div style={foodStyle}>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
