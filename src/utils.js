export const serverRenderingData = ({ component }) =>
  component && component.serverFetch
    ? component.serverFetch()
    : Promise.resolve(null);
