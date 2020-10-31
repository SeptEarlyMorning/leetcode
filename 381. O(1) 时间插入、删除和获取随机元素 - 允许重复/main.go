package main

import "math/rand"

// RandomizedCollection O(1) 时间插入、删除和获取随机元素 - 允许重复
type RandomizedCollection struct {
	value    []int
	valueMap map[int]map[int]struct{}
}

/** Initialize your data structure here. */

// Constructor 构造函数
func Constructor() RandomizedCollection {
	return RandomizedCollection{
		valueMap: map[int]map[int]struct{}{},
	}
}

// Insert : Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
func (r *RandomizedCollection) Insert(val int) bool {
	_, ok := r.valueMap[val]
	if !ok {
		r.valueMap[val] = map[int]struct{}{}
	}
	r.valueMap[val][len(r.value)] = struct{}{}
	r.value = append(r.value, val)
	return !ok
}

// Remove : Removes a value from the collection. Returns true if the collection contained the specified element.
func (r *RandomizedCollection) Remove(val int) bool {
	idxs, ok := r.valueMap[val]
	if ok {
		idx := 0
		for v := range idxs {
			idx = v
			break
		}
		delete(r.valueMap[val], idx)
		if len(r.valueMap[val]) == 0 {
			delete(r.valueMap, val)
		}
		length := len(r.value)
		swap := r.value[length-1]
		r.value[idx] = swap
		r.value = r.value[:length-1]
		if _, ok := r.valueMap[swap]; ok {
			delete(r.valueMap[swap], length-1)
			r.valueMap[swap][idx] = struct{}{}
		}
	}
	return ok
}

// GetRandom : Get a random element from the collection.
func (r *RandomizedCollection) GetRandom() int {
	return r.value[rand.Intn(len(r.value))]
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */
