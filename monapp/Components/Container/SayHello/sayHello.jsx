import { Text } from "react-native";

export default function SayHello(props){
    console.log(propos);
    return (
        <Text>
            
                {`Hello ${props.nom} ${props.renom}
                
                Vous Avez ${props.age}`}
          
        </Text>
    )
}
export function SayHi(){
    return <Text>
        {` Hi world`}
    </Text>;
}