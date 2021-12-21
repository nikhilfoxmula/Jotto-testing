import moxios from "moxios";
import { getSecretWord } from "./";
describe("getSecret Word", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterAll(() => {
    moxios.uninstall();
  });
  test("secretWord is returned", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });
    // update to test app in redux or context
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe("party");
    });
  });
});
