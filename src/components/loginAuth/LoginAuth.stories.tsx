import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import LoginAuth from "./LoginAuth";

storiesOf("views/LoginAuth", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <LoginAuth onSubmit={action("submit")} />;
  });
