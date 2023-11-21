import { Button, InputNumber, Select } from "antd";
import { useForm, Controller } from "react-hook-form";

const currencyOptions = [
  {
    text: "USD",
    value: "USD",
  },
  {
    text: "ETH",
    value: "ETH",
  },
];

export type FormModel = {
  baseType: string;
  baseAmount: number;
  targetType: string;
  targetAmount: number;
};

export enum FormField {
  BaseType = "baseType",
  BaseAmount = "baseAmount",
  TargetType = "targetType",
  TargetAmount = "targetAmount",
}

const Home = () => {
  const { control, handleSubmit, watch } = useForm<FormModel>();

  const a = watch(FormField.BaseAmount);
  console.log(a);

  const onSubmit = (data: FormModel) => console.log(data);

  return (
    <div className="flex flex-col">
      <h1>Currency Swapper</h1>
      <form className="my-10 mx-auto">
        <div className="flex">
          <div>
            <Controller
              name={FormField.BaseAmount}
              control={control}
              render={({ field }) => <InputNumber {...field} />}
            />
          </div>
          <div>
            <Controller
              name={FormField.BaseType}
              control={control}
              render={({ field }) => (
                <Select {...field} options={currencyOptions} />
              )}
            />
          </div>
        </div>
        <div className="my-5">
          <Button type="primary" onClick={handleSubmit(onSubmit)}>
            Swap
          </Button>
        </div>
        <div className="flex">
          <div>
            <Controller
              name={FormField.TargetAmount}
              control={control}
              render={({ field }) => <InputNumber {...field} />}
            />
          </div>
          <div>
            <Controller
              name={FormField.TargetType}
              control={control}
              render={({ field }) => (
                <Select {...field} options={currencyOptions} />
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
