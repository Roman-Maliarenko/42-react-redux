import Button from "../Button/Button"
import { CounterContainer, ButtonWrapper, CounterResult } from "./style"

import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  counterSliceSelectors,
  counterSlicesActions,
} from "../../store/redux/counter/counterSlice"

function Counter() {
  const count = useAppSelector(counterSliceSelectors.count)
  console.log(count)

  const dispatch = useAppDispatch()

  const onMinus = () => {
    dispatch(counterSlicesActions.minus())
  }

  const onPlus = () => {
    dispatch(counterSlicesActions.plus())
  }

  return (
    <CounterContainer>
      <ButtonWrapper>
        <Button name="-" onClick={onMinus} />
      </ButtonWrapper>
      <CounterResult>{count}</CounterResult>
      <ButtonWrapper>
        <Button name="+" onClick={onPlus} />
      </ButtonWrapper>
    </CounterContainer>
  )
}

export default Counter
