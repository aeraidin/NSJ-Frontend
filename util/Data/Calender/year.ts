
interface YearOption {
    label: string;
    value: string;
  }
  
  const year: YearOption[] = [];


for (let i = 1300; i <= 1499; i++) {
  year.push({ label: i.toString(), value: i.toString() });
}

export default year;

