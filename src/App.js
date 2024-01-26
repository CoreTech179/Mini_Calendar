import './App.css';

function App() {

  const todaysDate = new Date();

  const Weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];

  const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
    <>
      <div className="container">

          <div className="Main">

            <div className="calender">

              <div className="left">

                <p id="date">{todaysDate.getDate()}</p>

                <p id="day">{Weekdays[todaysDate.getDay()]}</p>

              </div>

              <div className="right">

                <p id="month">{Months[todaysDate.getMonth()]}</p>

                <p id="year">{todaysDate.getFullYear()}</p>
                
              </div>

            </div>

          </div>

      </div>

    </>
  );
}

export default App;
