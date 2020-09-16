export default function parseDataTransfer(
  e: React.ClipboardEvent<HTMLInputElement>,
  callback: (file: File) => void,
) {
  // const dataTransfer = e.dataTransfer || e.clipboardData;
  const { items } = e.clipboardData;
  if (items && items.length) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile();
        if (file) {
          callback(file);
        }
        e.preventDefault();
        break;
      }
    }
  }
}
