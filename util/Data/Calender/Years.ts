interface YearOption {
  label: string;
  value: string;
}

const Years: YearOption[] = [];

for (let i = 1300; i <= 1402; i++) {
  Years.push({ label: i.toString(), value: i.toString() });
}

export default Years;
