const { useState } = require("react");

const [isShow, setIsShow] = useState(true);

const changeText = () => {
    setIsShow(false)
}
return(
    <>
    {
        isShow ? (
            <div>я появился</div>
        ) : (
            <div>я исчез</div>
        )
    }
    </>
)