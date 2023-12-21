import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./hooks/useSettings";
import { useUpdateSetting } from "./hooks/useUpdateSetting";

function UpdateSettingsForm() {
  const { isUpdating, updateSetting } = useUpdateSetting();
  const {
    isLoading,
    error,
    settings: {
      minBookingLength,
      maxBookingLength,
      breakfastPrice,
      maxGuestsPerBooking,
    } = {},
  } = useSettings();

  if (isLoading) return <Spinner />;

  const handleUpdate = (e, fieldName) => {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [fieldName]: value });
  };

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          disabled={isUpdating}
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          disabled={isUpdating}
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          disabled={isUpdating}
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          disabled={isUpdating}
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
