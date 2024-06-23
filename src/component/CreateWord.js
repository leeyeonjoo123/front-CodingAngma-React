
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import useFetch from "../hooks/useFetch";

export default function CreateWord() {

    const days = useFetch('http://localhost:3001/days')
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        //페이지 새로고침(기본동작)을 막는다. 
        e.preventDefault();

        if(!isLoading) {
            setIsLoading(true);

            // console.log(engRef.current.value);
            // console.log(korRef.current.value);
            // console.log(dayRef.current.value);
            
            fetch(`http://localhost:3001/words`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false
            }),
        })
        .then(res => {
            if(res.ok) {
                alert('등록되었습니다');
                history(`/day/${dayRef.current.value}`);
                setIsLoading(false);
            }
        });
        }
    }

    //useRef는 DOM에 접근할 수 있게 해준다
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef} />
        </div>
        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef}/>
        </div>
        <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
                {days.map(day => (
                    <option key={day.id} value={day.day}>
                        {day.day}
                    </option>
                ))}
            </select>
        </div>
        <button
            style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving.." : "저장"}</button>
    </form>
    );
}