export interface Box {
  boxId: string; // 箱号
  boxSize: number; // 箱子尺寸大小
  boxWeight: number; // 箱子重量
  receiveDate: string; // 实际接收日期
  arriveDate: string; // 大概到达日期
  billDate: string; // 计费日期
  shipOutDate: string; // 寄出日期
  boxSKU: string;
}
