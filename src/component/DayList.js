// useEffect : 어떤 상태값이 바뀌었을 때 동작하는 함수 
//import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {

    //const [days, setDays] = useState([]);

    //useEffect 첫번째는 함수고, 두번째는 배열? 
    //count가 변경됐을 때만 실행된다. => 의존성 배열!
    //api 비동기 통신을 위해서 fetch를 이용한다
    const days = useFetch("http://localhost:3001/days");
    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });
    // }, []);

     
    return(
    <ul className="list_day">
        {days.map(day => (
        <li key={day.id}>
            <Link to={`/day/${day.day}`}> Day {day.day}</Link>
            Day {day.day}
        </li>    
        ))}
    </ul>
    );

}