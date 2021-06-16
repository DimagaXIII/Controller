import * as React from "react";
import { Controller } from "react-hook-form";
import { Switch, ThemeProvider } from "@chakra-ui/core";

export default ({ control }) => {
  return (
    <ThemeProvider>
      <div className="container">
        <section>
          <label>Chakra Swtich</label>
          <Controller
            control={control}
            name="ChakraSwitch"
            render={({ field }) => (
              <Switch
                onChange={(e) => field.onChange(e.target.checked)}
                isChecked={field.value}
              />
            )}
          />
        </section>
      </div>
    </ThemeProvider>
  );
};
