
import {CardTitle,CardSubtitle, Card, CardBody} from 'reactstrap'

export default function MyCard() {
  const mycardstyle = {
    color: "white",
    backgroundColor: "teal",
    padding: "10px",
    margin : "10px",
    fontFamily: "Arial",
    width: '22rem'
  };
  return (
    <div>
      <Card
  style={mycardstyle}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
  </CardBody>
</Card>
    </div>
  )
}
