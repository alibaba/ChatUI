// eslint-disable-next-line no-bitwise
export default (str: string) => str.slice(((str.lastIndexOf('.') - 1) >>> 0) + 2);
