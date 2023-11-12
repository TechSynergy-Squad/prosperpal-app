import { Combobox } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { AiOutlineCheckCircle as CheckIcon } from "react-icons/ai";
import { LuChevronsUpDown } from "react-icons/lu";

const banks = [
  { id: 1, name: "African Bank" },
  { id: 2, name: "Capitec Bank" },
  { id: 3, name: "Discovery Bank" },
  { id: 4, name: "Standard bank" },
  { id: 5, name: "Nedbank" },
  { id: 6, name: "Absa" },
  { id: 7, name: "First National Bank" },
  { id: 8, name: "Access Bank" },
];

export function BanksDropDown({
  setBank,
}: {
  setBank: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [selectedBank, setSelectedBank] = useState(banks[0]);
  const [query, setQuery] = useState("");

  const filteredBanks =
    query === ""
      ? banks
      : banks.filter((bank) => {
          return bank.name.toLowerCase().includes(query.toLowerCase());
        });

  const onSelection = (bank: (typeof banks)[0]) => {
    setBank(bank?.name);
    setSelectedBank(bank);
  };

  return (
    <div className="border rounded-xl drop-shadow-2xl w-72">
      <Combobox value={selectedBank} onChange={onSelection}>
        <div className="relative w-full overflow-hidden rounded-lg  text-left shadow-md focus:outline-none focus-visible:ring-1 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className={"px-4 py-2 w-full "}
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(bank: (typeof banks)[0]) => bank?.name}
          />
          <Combobox.Button className="absolute inset-y-0 bg-primary right-0 flex items-center pr-2">
            <LuChevronsUpDown
              className="h-5 w-5 text-secondary"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Combobox.Options>
          {filteredBanks.map((bank) => (
            <Combobox.Option
              className="ov"
              key={bank.id}
              value={bank}
              as={"div"}
            >
              {({ active, selected }) => (
                <li
                  className={`${
                    active ? "bg-secondary text-white" : "bg-white text-black"
                  } flex gap-2 items-center px-4 py-2`}
                >
                  {selected && <CheckIcon />}
                  {bank.name}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
