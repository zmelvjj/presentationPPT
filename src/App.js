import React, {useState} from "react";
import Text from "./text";
import './style.css'

function App(){
    const maxPage = 10; // 임이의 패이지 수정필요.
    const [page, setPage] = useState(0);

    const click = (pos) => {
        if (pos.clientX > window.innerWidth/2 && page < maxPage)
            setPage(page + 1)
        else if (pos.clientX <= window.innerWidth/2 && page > 0)
            setPage(page - 1)
    }

    return(
        <>
            <div onClick={click} id="documentCSS"></div>
            <Text font={"생명과학 발표 준비중."} FontSize={"50px"} />
        </>
    )   
}

export default App;