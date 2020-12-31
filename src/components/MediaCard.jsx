import Media from './Media'

function MediaCard(props) {
  const info = props.info
  return (<Media info={info} />);
}

export default MediaCard;