import Card from "../UI/Card";

function Balance() {
  return (
    <div className="flex flex-wrap gap-5 mt-8 mr-5">
      <Card>
        <span className="text-gray-900">Total balance</span>
        <span className="text-gray-900 font-bold text-[32px] max-lg:text-[30px] max-md:text-[28px] mt-4">
          $ 4,785.25
        </span>
        <span className="text-headlines text-[14px] font-bold">
          &uarr; 12% vs last month
        </span>
      </Card>
      <Card>
        <span className="text-incomes">Monthly incomes</span>
        <span className="font-bold text-[32px] max-lg:text-[30px] max-md:text-[28px] mt-4">
          $ 1,500.00 <span className="text-incomes text-[16px]">▲</span>
        </span>
      </Card>
      <Card>
        <span className="text-expenses">Monthly expenses</span>
        <span className="font-bold text-[32px] max-lg:text-[30px] max-md:text-[28px] mt-4">
          $ 500.00 <span className="text-expenses text-[16px]">▼</span>
        </span>
      </Card>
    </div>
  );
}

export default Balance;
