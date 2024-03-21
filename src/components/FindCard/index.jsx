import {
  Container,
  Button,
  InputContainer,
  StationInput,
  DateClassInput,
  PassengerInput,
  StationFrom,
  StationTo,
  Label,
  Select,
  DateInput,
  ClassInput,
} from "./FindCardElement";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const FindCard = () => {
  return (
    <Container>
      <InputContainer>
        <StationInput>
          <StationFrom>
            <Label>From</Label>
            <Select>
              <option value="">Select a station</option>
            </Select>
          </StationFrom>

          <StationTo>
            <Label>To</Label>
            <Select>
              <option value="">Select a station</option>
            </Select>
          </StationTo>
        </StationInput>

        <DateClassInput>
          <DateInput>
            <Label>Date</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <div style={{ backgroundColor: "white", borderRadius: "5px" }}>
                  <DatePicker style={{ backgroundColor: "white" }} />
                </div>
              </DemoContainer>
            </LocalizationProvider>
          </DateInput>
          <ClassInput>
            <Label>Class</Label>
            <Select>
              <option value="">Select a station</option>
            </Select>
          </ClassInput>
        </DateClassInput>
        <PassengerInput>
          <Label>Passengers</Label>
          <Select>
            <option value="">Select a station</option>
          </Select>
        </PassengerInput>
      </InputContainer>
      <Button>Find</Button>
    </Container>
  );
};

export default FindCard;
