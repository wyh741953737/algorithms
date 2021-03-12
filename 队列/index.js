const  queue = [];
queue.push(1);
queue.push(2);
const item = queue.shift();

// 队列使用场景：先进先出，js中异步任务队列（js单线程，无法处理并发），计算最近请求次数
