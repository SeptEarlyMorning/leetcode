package candy

func candy(ratings []int) int {
	/* 左右两次遍历 */
	// len := len(ratings)
	// candyArr := make([]int, len)

	// candyArr[0] = 1;
	// for i := 1; i < len; i++ {
	//   if ratings[i] > ratings[i - 1] {
	//     candyArr[i] = candyArr[i - 1] + 1
	//   } else {
	//     candyArr[i] = 1
	//   }
	// }

	// sum := candyArr[len - 1];
	// for i := len - 2; i >= 0; i-- {
	//   if ratings[i] > ratings[i + 1] && candyArr[i] <= candyArr[i + 1] {
	//     candyArr[i] = candyArr[i + 1] + 1
	//   }
	//   sum += candyArr[i]
	// }

	// return sum

	/* 一次遍历 */
	sum := 1

	for i, pre, up, down := 1, 1, 1, 0; i < len(ratings); i++ {
		if ratings[i] >= ratings[i-1] {
			if ratings[i] == ratings[i-1] {
				up = 1
			} else {
				up++
			}
			sum += up
			pre, down = up, 0
		} else {
			down++
			if down == pre {
				down++
			}
			sum += down
			up = 1
		}
	}

	return sum
}
