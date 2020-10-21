package main

func isLongPressedName(name string, typed string) bool {
	nameIdx := 0
	for typedIdx := 0; typedIdx < len(typed); {
		if nameIdx < len(name) && name[nameIdx] == typed[typedIdx] {
			nameIdx++
			typedIdx++
		} else if typedIdx > 0 && typed[typedIdx] == typed[typedIdx-1] {
			typedIdx++
		} else {
			return false
		}
	}

	return nameIdx == len(name)
}
