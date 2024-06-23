// 표로 영단어 뜻 출력
import { useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
    //const a = useParams();
    //const day = a.day;
    //로그를 보면 들어오는 값이 숫자가 아니라 문자다!
    const {day} = useParams();
    //const wordList = dummy.words.filter(word => word.day === Number(day));
    //const day = useParam().day;
    //const wordList = dummy.words.filter(word => word.day === day);
    // const [words, setWords] = useState([]);
    
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    // url 뒤에 text를 출력 시켜준다... 
    //console.log(a);
    //의존성배열? [day] ㅡ의존성배열을 넣어줌으로서 값이 최신값임을 보장 받는다.
    // useEffect( () => {
    //     //useParams를 이용해서 주소창에 있는 문자가 들어온다.. ${day}에 들어온다
    //         fetch(`http://localhost:3001/words?day=${day}`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setWords(data);
    //         });
    // }, [day]);

    return (
        <div>
            <h2>Day {day}</h2>
            {words.length === 0 && <span> Loading...</span>}
            <h2> 아래 내용을 학습하세요 DAY {day} </h2>
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </div>
    );
}

/*
useParams는 hook으로 URL 경로에서 파라미터를 추출하여 컴포넌트 내에서 사용할 수 있다.
동적라우팅 가능, 특정 경로의 파라미터 값을 쉽게 접근할 수 있다.

URL 경로에 포함된 동적 세그먼트를 객체 형태로 반환

*/
