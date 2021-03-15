package leetcode

func spiralOrder(matrix [][]int) []int {
  /* 模拟运动方向 */
  if len(matrix) == 0 || len(matrix[0]) == 0 {
    return []int{}
  }
  n, m := len(matrix), len(matrix[0])
  arr := make([]int, n * m)
  k, i, j, key := 0, 0, -1, 0 // j 从二维数组的左上角matrix[0][0]的左边开始进入，key 用来记录已经转了几层

  for ;k < m * n; key++ {
    for j++; k < m * n && j < m - key; k++ { // 向右运动
      arr[k] = matrix[i][j]
      j++
    }
    j-- // 每次完成一个方向的运动后，下标会多运动一格，修正下标

    for i++; k < m * n && i < n - key; k++ { // 向下运动
      arr[k] = matrix[i][j]
      i++
    }
    i--

    for j--; k < m * n && j >= key; k++ { // 向左运动
      arr[k] = matrix[i][j]
      j--
    }
    j++

    for i-- ;k < m * n && i > key; k++ { // 向上运动
      arr[k] = matrix[i][j]
      i--
    }
    i++
  }

  return arr
}