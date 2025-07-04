import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '@/redux/counterSlice';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container className="text-center mt-5">
      <h2>Count: {count}</h2>
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Button variant="success" onClick={() => dispatch(increase())}>
            ➕ Increase
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="danger" onClick={() => dispatch(decrease())}>
            ➖ Decrease
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
