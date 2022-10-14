export default function parseDataTransfer(
  e: React.ClipboardEvent<HTMLInputElement>,
  callback: (file: File) => void,
) {
  // const dataTransfer = e.dataTransfer || e.clipboardData;
  const { files } = e.clipboardData;
  if (files && files.length) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file && file.type.indexOf('image') !== -1) {
        callback(file);
        e.preventDefault();
        break;
      }
    }
  }
}
