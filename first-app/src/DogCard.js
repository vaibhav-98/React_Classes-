import Image from "./image";
function DogCard (props) {

    return (
        <>
            <h3>{props.name}</h3>
            <Image src ={props.image}/>
           
        </>
    )
}

export default DogCard;