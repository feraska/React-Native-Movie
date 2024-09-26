import useInfo from "../../hooks/useInfo"
import CardItem from "../cardItem/CardItem"


const ListItem:React.FC<{id:string}> = ({id}) => {
    const {data:item} = useInfo(`https://api.themoviedb.org/3/movie/${id}`)
   // console.log(item)
    return(
        <CardItem item={item} key={id}/>
    )
}
export default ListItem