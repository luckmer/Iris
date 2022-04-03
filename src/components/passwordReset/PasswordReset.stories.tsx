import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import LoginAuth from "./PasswordReset";

storiesOf("views/password_reset", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <LoginAuth onSubmit={action("submit")} />;
  });
