export default (callback: (fps: number) => void, maxCount?: number) => {
  let fps = 0;
  let last = Date.now();
  let count = 0; // 回调触发次数

  // 兼容性处理
  if (!requestAnimationFrame) {
    callback(0);
    return;
  }

  const loop = function() {
    const offset = Date.now() - last;
    fps += 1;

    if (offset >= 1000) {
      last += offset;
      callback(fps);
      if (maxCount) count += 1;
      fps = 0;
    }

    if (!maxCount || count <= maxCount) {
      requestAnimationFrame(loop);
    }
  };

  loop();
}
