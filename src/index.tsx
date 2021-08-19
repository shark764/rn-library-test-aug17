export * from './components';

export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
  divide(a: number, b: number) {
    return Promise.resolve(a / b);
  },
};
