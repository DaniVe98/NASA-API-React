export default function Main(props) {
  const {data} = props
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.tite || 'bg-img'} className="bgImage"/>
    </div>
  )
}