export default function handleWheel(e, next, prev) {
	if (e.nativeEvent.wheelDelta < 0) {
		next();
	} else {
		prev && prev();
	}
}
