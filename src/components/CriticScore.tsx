import { Badge } from "@chakra-ui/react"
interface Props{
    score : number;
}
const CriticScore = ({score} : Props) => {
    return (
        <Badge color='grey.200' fontSize='15px'>{score}</Badge>
    )
}
export default CriticScore 
