import React                         from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'

export default ( title, InnerComponent ) => ( props ) => (
  <Card>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <InnerComponent {...props} />
    </CardBody>
  </Card>
)
