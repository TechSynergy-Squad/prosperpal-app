import { Combobox } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { AiOutlineCheckCircle as CheckIcon } from "react-icons/ai";

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
    <div className="w-72">
      <Combobox value={selectedBank} onChange={onSelection}>
        <Combobox.Input
          className={
            "border-none bg-primary text-white w-60 rounded-lg px-4 py-2 z-50"
          }
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(bank) => bank?.name}
        />
        <Combobox.Options>
          {filteredBanks.map((person) => (
            /* Use the `active` state to conditionally style the active option. */
            /* Use the `selected` state to conditionally style the selected option. */
            <Combobox.Option key={person.id} value={person} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`${
                    active ? "bg-secondary text-white" : "bg-white text-black"
                  } flex gap-2 items-center px-4 py-2`}
                >
                  {selected && <CheckIcon />}
                  {person.name}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
