import { parseISO, format } from 'date-fns'
import utilStyles from "../styles/utils.module.css";


export default function Date({ dateString }) {

  const date = parseISO(dateString)
  const formattedDate = format(date, 'dd/MM/yyyy');
 
  return <p style={{textAlign:'left'}}className={utilStyles.date}>{formattedDate}</p>
}
