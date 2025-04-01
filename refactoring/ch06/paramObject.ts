type Station = {
  name: string;
  readings: TempInfo[];
};

type TempInfo = {
  temp: number;
  time: Date;
};

function readingOutsideRange(station: Station, range: NumberRange): TempInfo[] {
  return station.readings.filter((r) => !range.contains(r.temp));
}

class NumberRange {
  constructor(private readonly _min: number, private readonly _max: number) {}

  get min() {
    return this._min;
  }

  get max() {
    return this._max;
  }

  contains(arg: number): boolean {
    return arg >= this.min && arg <= this.max;
  }
}
