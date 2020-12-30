
import Media from './Media'
const axios = require('axios');
function MediaCard(props) {
  const info = props.info
  return (<Media info={info}/>);
}

export default MediaCard;