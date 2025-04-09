export function areArraysEqual<T>(arr1: T[], arr2: T[]): boolean {
  // 首先检查长度是否相同
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 创建一个 Map 来存储 arr2 中元素的出现次数
  const countMap = new Map<T, number>();

  // 统计 arr2 中每个元素的出现次数
  for (const item of arr2) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }

  // 检查 arr1 中的每个元素
  for (const item of arr1) {
    const count = countMap.get(item);
    if (count === undefined) {
      // 如果元素不在 arr2 中，返回 false
      return false;
    } else if (count === 1) {
      // 如果这是最后一次出现，从 Map 中删除该元素
      countMap.delete(item);
    } else {
      // 否则，减少计数
      countMap.set(item, count - 1);
    }
  }

  // 如果所有检查都通过，返回 true
  return true;
}
