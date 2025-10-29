import { type ICustomizations } from "@saasbase-io/elements";

import {
  Provider,
  SignedIn,
  SignedOut,
  Authenticate,
} from "@saasbase-io/elements/react";

const customizations: ICustomizations = {
  byType: {},
  config: {
    font: "font-geist",
    breakpoints: {
      sm: "700px",
    },
  },
};

function AuthenticationPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #c7d2fe 100%)",
        padding: "2rem",
      }}
    >
      <Provider>
        <SignedOut>
          <Authenticate customizations={customizations} />
        </SignedOut>
        <SignedIn>
          {/* Right now You shouldn't see this */}
          {/* <div
            style={{
              textAlign: "center",
              fontWeight: 600,
              color: "#1f2937",
            }}
          >
            You are authenticated!
          </div> */}
        </SignedIn>
      </Provider>
    </div>
  );
}

export default AuthenticationPage;
