
export function increment(currentCount) {
  return {
    currentCount: currentCount + 1
  };
}

export function decrement(currentCount) {
  return {
    currentCount: currentCount - 1
  };
}
