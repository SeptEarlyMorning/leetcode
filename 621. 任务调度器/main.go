package main

func leastInterval(tasks []byte, n int) int {
  taskCount, maxCount, x := [26]int{}, 0, 0

  for _, task := range tasks {
    taskCount[task - 'A']++
  }

  for _, count := range taskCount {
    maxCount = max(count, maxCount);
  }

  for _, count := range taskCount {
    if maxCount == count {
      x++
    }
  }

  return max(len(tasks), (maxCount - 1) * (n + 1) + x)
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}