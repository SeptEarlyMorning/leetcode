import leetcode

func isUgly(n int) bool {
  if n < 1 {
    return false
  }

  factors := []int{2, 3, 5}
  for _, factor := range factors {
    for n % factor == 0 {
      n /= factor
    }
  }

  return n == 1
}