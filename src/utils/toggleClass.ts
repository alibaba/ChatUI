// IE 不支持 toggle 第二个参数
export default (className: string, flag: boolean, el: HTMLElement = document.body) => {
  el.classList[flag ? 'add' : 'remove'](className);
}
