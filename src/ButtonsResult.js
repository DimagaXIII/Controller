import React from "react";
import { convertToRaw, EditorState } from "draft-js";

export default ({ data, reset, setValue }) => {
  return (
    <>
      {data && (
        <pre style={{ textAlign: "left", color: "white" }}>
          {JSON.stringify(
            {
              ...data,
              DraftJS: convertToRaw(data.DraftJS.getCurrentContent()).blocks[0]
                .text
            },
            null,
            2
          )}
        </pre>
      )}

      <button
        className="button buttonBlack"
        type="button"
        onClick={() => {
          reset({
            Native: "",
            TextField: "",
            Select: "",
            ReactSelect: { value: "vanilla", label: "Vanilla" },
            Checkbox: false,
            switch: false,
            RadioGroup: "",
            numberFormat: 123456789,
            AntdInput: "Test",
            AntdCheckbox: true,
            AntdSwitch: true,
            AntdSlider: 20,
            AntdRadio: 1,
            downShift: "apple",
            ReactDatepicker: new Date(),
            AntdSelect: "",
            DraftJS: EditorState.createEmpty(),
            MUIPicker: new Date("2020-08-01T00:00:00"),
            country: { code: "AF", label: "Afghanistan", phone: "93" },
            ChakraSwitch: true,
            reactMaskInput: ""
          });
        }}
      >
        Reset Form
      </button>
      <button className="button">submit</button>
    </>
  );
};
