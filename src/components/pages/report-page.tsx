import { useEffect, useMemo, useState } from "react";
import { GoalPanel, SavingPanel } from "../molecules";
import { Panel } from "..";
import { BanksDropDown, Graph, Header, PieChartGraph } from "../atoms";
import { Switch } from "@headlessui/react";
import { Transaction, useGetTransactionsQuery } from "../../queries";
import toast from "react-hot-toast";
import { groupBy } from "lodash";

export const ReportPage = () => {
  const { data } = useGetTransactionsQuery();

  const totalAmount = useMemo(() => {
    if (!data) return 0;
    return data.reduce((acc: number, transaction: Transaction) => {
      return acc + transaction.creditAmount - transaction.debitAmount;
    }, 0);
  }, [data]);

  const transactionCategories = useMemo<
    { category: string; percentage: number }[]
  >(() => {
    if (!data) return [];
    const categories = [
      ...new Set(
        data.map((transaction: Transaction) => {
          return {
            category: transaction.category,
            percentage:
              ((totalAmount - transaction?.creditAmount) / totalAmount) * 100,
          };
        })
      ),
    ];

    const uniqueTransactions = groupBy(categories, "category");

    const modelledTransactions = Object.keys(uniqueTransactions).map(
      (category) => {
        const percentage = uniqueTransactions[category].reduce(
          (acc: number, curr: any) => {
            return acc + curr.percentage;
          },
          0
        );
        return {
          category,
          percentage,
        };
      }
    );

    return modelledTransactions;
  }, [data]);

  const [selectedBank, setSelectedBank] = useState("");
  const [switchOffed, setSwitchOffed] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const eligible = useMemo(
    () => selectedBank === "African Bank",
    [selectedBank]
  );
  useEffect(() => {
    if (isConnected && selectedBank == "African Bank") {
      toast.success("Bank Connected", {
        duration: 5000,
      });
    } else if (selectedBank === "") {
      toast.error("Please select a bank", {
        duration: 5000,
      });
    } else if (selectedBank && !eligible) {
      toast.error("It seems you don't have this an Account", {
        duration: 5000,
      });
    } else if (
      !isConnected &&
      switchOffed &&
      (selectedBank || selectedBank === "") &&
      eligible
    ) {
      toast.error("Bank Disconnected", {
        duration: 5000,
      });
    }
  }, [isConnected, selectedBank]);
  return (
    <>
      <div className="relative z-50">
        <div className="inset-0 absolute">
          <BanksDropDown setBank={setSelectedBank} />
        </div>
      </div>
      <section className="view-type flex justify-end gap-6 py-4">
        <section className="flex gap-2">
          <p className="text-primary">Connect Bank</p>

          <Switch
            checked={isConnected}
            onChange={() => {
              if (selectedBank && eligible) {
                setIsConnected(!isConnected);
                setSwitchOffed(!switchOffed);
              }
            }}
            onClick={() => {
              if (selectedBank === "") {
                toast.error("Please select a bank", {
                  duration: 5000,
                });
                return;
              }
            }}
            className={`${
              isConnected ? "bg-green-600" : "bg-gray-500"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                isConnected ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </section>
      </section>
      {isConnected ? (
        <>
          <section className="report-page grid grid-cols-5 gap-6  ">
            <section className="col-span-2">
              <SavingPanel
                jobs={
                  isConnected
                    ? [
                        {
                          name: "August 2023",
                          amount: 1273.95,
                          goal: 5000,
                        },
                        {
                          name: "September 2023",
                          amount: 3466.35,
                          goal: 5000,
                        },
                        {
                          name: "October 2023",
                          amount: 1499.45,
                          goal: 5000,
                        },
                        {
                          name: "November 2023",
                          amount: 5000,
                          goal: 5000,
                        },
                      ]
                    : []
                }
              />
            </section>
            <section className="">
              <GoalPanel
                connected={isConnected}
                percentage={100}
                bank={selectedBank}
                className="pl-7"
              />
            </section>
            <section className="col-span-2">
              <Panel>
                <Header>Transaction Categories</Header>
                <PieChartGraph
                  transactions={isConnected ? transactionCategories : []}
                  colors={[
                    "#FFB800",
                    "#FF4D00",
                    "#00B4FF",
                    "#00FF6F",
                    "#FF00E5",
                  ]}
                />
              </Panel>
            </section>
          </section>
          <div className="pt-6">
            <Panel>{isConnected && <Graph />}</Panel>
          </div>
        </>
      ) : (
        <p className="text-sm font-semibold">
          {" "}
          Currently have no data to display, try connecting a bank....
        </p>
      )}
    </>
  );
};
