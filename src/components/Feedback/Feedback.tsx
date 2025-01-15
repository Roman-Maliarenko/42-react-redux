import Like from "../../assets/like.png"
import Dislike from "../../assets/dislike.png"
import Button from "../Button/Button"
import {
  FeedbackWrapper,
  ButtonWrapper,
  Results,
  ResetButtonWrapper,
  LikesContainer,
  LikesWrapper,
} from "./styles"

import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  likeSliceActions,
  likeSliceSelectors,
  dislikeSliceActions,
  disllikeSliceSelectors,
} from "../../store/redux/feedback/feedbackSlice"

function Feedback() {
  const likeSum = useAppSelector(likeSliceSelectors.sum)
  const dislikeSum = useAppSelector(disllikeSliceSelectors.sum)

  const dispatch = useAppDispatch()

  const onLike = () => {
    dispatch(likeSliceActions.plus())
  }

  const onDislike = () => {
    dispatch(dislikeSliceActions.plus())
  }

  const onReset = () => {
    dispatch(likeSliceActions.reset()), dispatch(dislikeSliceActions.reset())
  }

  return (
    <FeedbackWrapper>
      <LikesContainer>
        <LikesWrapper>
          <ButtonWrapper src={Like} onClick={onLike}></ButtonWrapper>
          <Results>{likeSum}</Results>
        </LikesWrapper>
        <LikesWrapper>
          <ButtonWrapper src={Dislike} onClick={onDislike}></ButtonWrapper>
          <Results>{dislikeSum}</Results>
        </LikesWrapper>
      </LikesContainer>
      <ResetButtonWrapper>
        <Button name="Reset results" onClick={onReset}></Button>
      </ResetButtonWrapper>
    </FeedbackWrapper>
  )
}

export default Feedback
