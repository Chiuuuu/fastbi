/**
 * 是否匹配关键字
 */
export function isSearchMatch(item, value) {
  return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
}
/**
 * 递归搜索
 */
export function menuSearchLoop(item, value) {
  // 不是文件夹且匹配直接写入数组
  if (item.fileType === 1 && isSearchMatch(item, value)) {
    return item
  } else {
    // 递归遍历文件夹
    if (item.children && item.children.length > 0) {
      let newChildren = []
      item.children.map(child => {
        // 遍历子节点
        const newChild = menuSearchLoop(child, value)
        if (newChild) newChildren.push(newChild)
      })
      // 拷贝新的节点并写入子节点数组
      if (newChildren.length > 0) {
        return Object.assign({}, item, { children: newChildren })
      }
    }
  }
}
