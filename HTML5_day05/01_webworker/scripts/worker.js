this.addEventListener('message', (e) => {
  //接收主线程发送的消息
  let numberVal = parseInt(e.data);
  //运算过程
  let sum = 0;
  for (let n = 0; n <= numberVal; n++) {
    sum += n;
  }
  //worker线程向主线程发送消息
  this.postMessage(sum);
  //关闭worker线程
  this.close();
});