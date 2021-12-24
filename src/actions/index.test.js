import moxios from "moxios";
import { getSecretWord } from "./";
import {storeFactor} from '../../test/testUtils';

describe("getSecret Word", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterAll(() => {
    moxios.uninstall();
  });
  test("secretWord is returned", () => {
    const store = storeFactor()
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });
    // update to test app in redux or context
    return store.dispatch(getSecretWord())
    .then(() => {
      const secretWord = store.getState().secretWord; 
      expect(secretWord).toBe("party");
    });
  });
});
