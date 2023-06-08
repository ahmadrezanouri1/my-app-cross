import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.testinnaa.example",
  appName: "my-app-cross",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    androidScheme: "https",
  },
};

export default config;
