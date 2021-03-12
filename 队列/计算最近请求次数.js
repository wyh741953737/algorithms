// 写一个RecentCounter类来计算最近的请求，它只有一个方法：ping（t),其中t表示以毫秒为单位的某个时间，返回从3000毫秒前到现在的ping数
// 任何处于[t-3000]时间范围内的ping都会被计算在里面，包括t时刻的ping，保证每次对ping的调用都使用比之前更大的t值

// 输入 inputs = [[], [1], [100], [3001], [3002]], 输出 [null, 1, 2 , 3, 3]

// 解题思路：越早发出的请求越早不在最近请求3000ms内
// 解题步骤：有任务就入队，3000ms前发出的请求出队，队列的长度就是最近请求次数
const  RecentCounter  = function() {
    this.q =  [];
}

RecentCounter.prototype.ping = function(t) {
    this.q.push(t);
    while(this.q[0] < t - 3000) {
        this.q.shift();
    }
    return this.q.length;
} 

const obj = new RecentCounter();
const p = obj.ping(t)