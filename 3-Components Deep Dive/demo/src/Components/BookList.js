import { Book } from "./Book"

export const BookList = (props) => {
  return (
    <ul>
      <Book {...props}/>
    </ul>
  )
}