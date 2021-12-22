import moxios from "moxios";
import { getSecretWord, correctGuess, actionTypes } from "./";

describe("correctGUess", () => {
  test("returns an action with type 'CORRECT_GUESS", () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
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
