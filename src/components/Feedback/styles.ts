import styled from "@emotion/styled"

export const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: rgb(242, 237, 170);
  gap: 60px;
  padding: 60px;
  flex: 1;
`

export const LikesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  min-height: 210px;
  width: 100%;
`

export const LikesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 100%;
`

export const ButtonWrapper = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.08);
  }
  &:active {
    transform: scale(0.95);
  }
`

export const Results = styled.div`
  font-size: 36px;
`

export const ResetButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
`
