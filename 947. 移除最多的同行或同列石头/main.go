package leetcode

func removeStones(stones [][]int) int {
	parent, count := map[int]int{}, 0

	var find func(int) int
	find = func(x int) int {
		if _, ok := parent[x]; !ok {
			parent[x] = x
			count++
		}
		if parent[x] != x {
			parent[x] = find(parent[x])
		}

		return parent[x]
	}

	union := func(x, y int) {
		rootX, rootY := find(x), find(y)
		if rootX == rootY {
			return
		}
		parent[rootX] = rootY
		count--
	}

	for _, stone := range stones {
		union(stone[0], stone[1]+10000)
	}

	return len(stones) - count
}
