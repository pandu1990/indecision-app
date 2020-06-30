console.log('App is running');

//JSX - JavaScript XML
const template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
const appRoot = document.getElementById('app');

const user = {
  name: 'Pandurang',
  age: 30,
  location: 'Los Angeles'
};

const template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

ReactDOM.render(template2, app);