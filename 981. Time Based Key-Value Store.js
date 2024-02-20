class TimeMap {
  constructor() {
    this.map = {};
  }
  set(key, value, timestamp) {
    this.map[key] = this.map[key] || [];
    this.map[key].push({ value, timestamp });
  }

  get(key, timestamp) {
    let res = '';
    const values = this.map[key] || [];
    let [l, r] = [0, values.length - 1];

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (values[mid].timestamp <= timestamp) {
        res = values[mid].value;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return res;
  }
}


