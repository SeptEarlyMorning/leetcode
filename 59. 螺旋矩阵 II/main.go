package leetcode

func generateMatrix(n int) [][]int {
  arr := make([][]int, n)
  for i := range arr {
    arr[i] = make([]int, n)
  }
  i, j, k := 0, -1, 0

  for k < n * n {
    /* 向右运动 */
    for j < n - 1 && arr[i][j + 1] == 0 {
      k++
      j++
      arr[i][j] = k
    }
    /* 向下运动 */
    for i < n - 1 && arr[i + 1][j] == 0 {
      k++
      i++
      arr[i][j] = k
    }
    /* 向左运动 */
    for j > 0 && arr[i][j - 1] == 0 {
      k++
      j--
      arr[i][j] = k
    }
    /* 向上运动 */
    for i > 0 && arr[i - 1][j] == 0 {
      k++
      i--
      arr[i][j] = k
    }
  }

  return arr
}