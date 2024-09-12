import defaultUserImage from "../hamster.svg"
import "./userTicker.css"

function UserTicker(){
     let dummyUser:string = "Jack Conev"
     
    return(
        <div className="user-ticker">
            <img src={defaultUserImage} alt="Default User" className="user-image" />
            <h3 className="user-name">{dummyUser}</h3>
        </div>
    )
}

export default UserTicker