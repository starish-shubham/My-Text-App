import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Buttons(props) {
  return (
    <div>
      <Button variant={props.col}>{props.button_name}</Button>{' '}
    </div>
  )
}
