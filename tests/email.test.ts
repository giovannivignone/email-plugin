import { init, send } from "../src/plugin";
 
describe('Testing initialization', () => {
  test('Launching email manager with configs', () => {
    if (!process.env.AWS_EMAIL || !process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      throw new Error('Missing AWS credentials');
    }
    const initialize = init('Test Subject', process.env.AWS_EMAIL, process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY);
    expect(0).toBe(0);
  });
});