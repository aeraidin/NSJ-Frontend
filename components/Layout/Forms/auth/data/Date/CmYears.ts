/** @format */

interface YearOption {
  name: string;
  value: string;
}

const CmYears: YearOption[] = [];

for (let i = 1402; i >= 1300; i--) {
  CmYears.push({ name: i.toString(), value: i.toString() });
}

export default CmYears;
