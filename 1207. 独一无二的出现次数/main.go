package main

func uniqueOccurrences(arr []int) bool {
	countMap := map[int]int{}

	for _, v := range arr {
		countMap[v]++
	}

	countSet := map[int]void{} // 使用结构体 + map 实现 set，go 中结构体不占内存
	for _, v := range countMap {
		countSet[v] = void{}
	}

	return len(countMap) == len(countSet)
}

type void struct{}
