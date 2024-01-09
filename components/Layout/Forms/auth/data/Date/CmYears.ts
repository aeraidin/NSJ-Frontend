interface YearOption {
  label: string;
  value: string;
}

const CmYears: YearOption[] = [];

for (let i = 1300; i <= 1402; i++) {
  CmYears.push({ label: i.toString(), value: i.toString() });
}

export default CmYears;
