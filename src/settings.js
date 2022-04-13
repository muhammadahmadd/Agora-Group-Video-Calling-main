import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "ffb31c67dfbc4480b8ec57305da2c83f";
const token = "006ffb31c67dfbc4480b8ec57305da2c83fIABipYd9B4wfHZnfZJ5Lok/dwPZGGWqfOFd4fw4vX9yELjLRTXgAAAAAEAB3EU0YL81XYgEAAQAvzVdi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Test";
