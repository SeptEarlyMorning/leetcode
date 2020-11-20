# 147. 对链表进行插入排序

## 题目

对链表进行插入排序。

![Insertion-sort-example-300px](./img/Insertion-sort-example-300px.gif)

插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。

 

**插入排序算法：**

1. 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
2. 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
3. 重复直到所有输入数据插入完为止。
 

**示例 1：**
```
输入: 4->2->1->3
输出: 1->2->3->4
```
**示例 2：**
```
输入: -1->5->3->4->0
输出: -1->0->3->4->5
```

## 题解

### 思路

1. 定义一个哨兵结点，值为最小值。
2. 接着遍历传入的链表。
3. 在每一次遍历的时候，遍历之前定义的哨兵结点。找到此时节点应该插入的位置，并插入。

### 代码

```golang []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func insertionSortList(head *ListNode) *ListNode {
  sentinelNode := &ListNode{Val: math.MinInt64}

  for (head != nil) {
    p := sentinelNode
    for (p.Next != nil && p.Next.Val < head.Val) {
      p = p.Next
    }
    nextNode := head.Next
    head.Next, p.Next, head = p.Next, head, nextNode
  }

  return sentinelNode.Next
}
```
```javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  const sentinelNode = new ListNode(-Infinity);

  while (head) {
    let p = sentinelNode;
    while (p.next && head.val > p.next.val) {
      p = p.next;
    }
    const nextNode = head.next;
    head.next = p.next;
    p.next = head;
    head = nextNode;
  }

  return sentinelNode.next;
};
```