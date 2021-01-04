package leetcode

func canPlaceFlowers(flowerbed []int, n int) bool {
	if n <= 0 {
		return true
	}

	flowerbed = append(flowerbed, 0)
	for i := 0; i < len(flowerbed)-1; i += 2 {
		if flowerbed[i] == 0 {
			if flowerbed[i+1] == 0 {
				n--
				if n <= 0 {
					return true
				}
			} else {
				i++
			}
		}
	}

	return false
}
