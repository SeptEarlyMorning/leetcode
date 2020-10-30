package main

func islandPerimeter(grid [][]int) int {
	perimeter, adjacentAreas := 0, []adjacent{{0, 1}, {0, -1}, {1, 0}, {-1, 0}}

	for i, r := range grid {
		for j, v := range r {
			if v == 1 {
				for _, adjacentArea := range adjacentAreas {
					x, y := i+adjacentArea.x, j+adjacentArea.y
					if x < 0 || x >= len(grid) || y < 0 || y >= len(grid[x]) || grid[x][y] == 0 {
						perimeter++
					}
				}
			}
		}
	}

	return perimeter
}

type adjacent struct {
	x, y int
}
