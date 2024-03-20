import {
  Container,
  Select,
  InputContainerRight,
  InputContainerLeft,
  SpaceContainer,
  Button,
  Label,
} from "./FindCardElement";

const FindCard = () => {
  return (
    <Container>
      <InputContainerLeft>
        <Label>From</Label>
        <Select>
          <option value="" disabled selected>
            Select a station
          </option>
        </Select>
      </InputContainerLeft>
      <SpaceContainer />
      <InputContainerRight>
        <Label>To</Label>
        <Select>
          <option value="" disabled selected>
            Select a station
          </option>
        </Select>
      </InputContainerRight>

      <InputContainerLeft>
        <Label>From</Label>
        <Select>
          <option value="" disabled selected>
            Select a station
          </option>
        </Select>
      </InputContainerLeft>
      <SpaceContainer />
      <InputContainerRight>
        <Label>To</Label>
        <Select>
          <option value="" disabled selected>
            Select a station
          </option>
        </Select>
      </InputContainerRight>

      <Button>Find</Button>
    </Container>
  );
};

export default FindCard;
