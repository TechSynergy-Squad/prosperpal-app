import React, { useState, useContext, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ListGraph, Button } from '../atoms/index';
import { ListGraphInputProps } from '../atoms/types';
import { GoalForm } from '../organisms/index';
import { useAppContext } from '../../AppContextStore';
import { Field, Formik } from "formik";
import toast from "react-hot-toast";

export function GoalsListGraph(): JSX.Element {
  let [isOpen, setIsOpen] = useState<boolean>(false)
  //context
  //let { goals, setGoals } = useAppContext();
  let [listGraphInput, setListGraphInput] = useState<ListGraphInputProps[]>([{ title: 'Buy a car', description: 'Audi A3 Sedan 2021', cost:"R687,444",startDate: '2023-11-01', endDate: '2024-06-01', model: 'Audi', yearOfManufacture: '2023', maintenance: 'R6000', insurance: 'R2000', repairs: 'R3000' }]);
  const initialValues = {
    category: "",
    model: "",
    yearOfManufacture: "",
    description: ""
  };

  const [category, setCategory] = useState<string>()
  const [model, setModel] = useState<string>()
  const [yearOfManufacture, setYearOfManufacture] = useState<string>()
  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()

  function closeModal() {
    setIsOpen(false)
  }
  const submit = async () => {
    console.log("what happening");
    
       var promtString =model + " " + description + " from " + yearOfManufacture;
       setListGraphInput([...listGraphInput, { title: 'Buy a car', description: 'BMW 2 Series Gran Coupe 2022',cost:"R623,400", startDate: '2023-11-12', endDate: '2024-11-11', model: 'BMW', yearOfManufacture: '2021', maintenance: 'R5000', insurance: 'R3000', repairs: 'R5000' }])
       console.log("test submit prompt",promtString)
       // userService.signInWithEmail({ email }).then((res) => {
       //   if (Boolean(res)) {
       //     toast.error("Email not found", {
       //       duration: 4000,
       //     });
       //   } else {
       //     toast.success("Email sent, please check your inbox", {
       //       duration: 4000,
       //     });
       //   }
       // });
     };

  const addNewGoal = () => {
    setIsOpen(true)
    
  }

  return (
    <>
      <div className='flex justify-end'>
        <Button onClick={addNewGoal} className="ml-auto">Add New Goal</Button>
      </div>
      <ListGraph inputs={listGraphInput} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add new Goal
                  </Dialog.Title>

                  <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    onSubmit={submit}

                  >
                    {({ values, handleBlur }) => (
                      <form className="text-black flex flex-col items-center justify-center gap-8">
                        <select
                          name="categories"
                          value={category}
                          onChange={(value) => setCategory(value.target.value)}
                          onBlur={handleBlur('category')}
                          style={{ display: "block" }}
                          className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
                        >
                          <option value="" label="Select a Category">
                            Select a Category
                          </option>
                          <option value="car" label="Car">
                            Car
                          </option>
                          <option value="home" label="Home">
                            Home
                          </option>
                        </select>
                        {category === "car" && (
                          <>
                            <select
                              name="model"
                              value={model}
                              onChange={(value) => setModel(value.target.value)}
                              onBlur={handleBlur('model')}
                              style={{ display: "block" }}
                              className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
                            >
                              <option value="" label="Select a Model">
                                Select a Model
                              </option>
                              <option value="bmw" label="BMW">
                                BMW
                              </option>
                              <option value="audi" label="Audi">
                                Audi
                              </option>
                              <option value="toyota" label="Toyota">
                                Audi
                              </option>
                            </select>

                            <select
                              name="yearOfManufacture"
                              value={yearOfManufacture}
                              onChange={(value) => setYearOfManufacture(value.target.value)}
                              // onBlur={handleBlur}
                              style={{ display: "block" }}
                              className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
                            >
                              <option value="" label="Select a year">
                                Select year
                              </option>
                              <option value="2022" label="2022">
                                2022
                              </option>
                              <option value="2021" label="2021">
                                2021
                              </option>
                              <option value="2020" label="2020">
                                2020
                              </option>
                            </select>
                            {model === "audi" && yearOfManufacture === "2022" && (
                              //car bmw 2022
                              <>
                                <select
                                  name="description"
                                  value={description}
                                  onChange={(value) => setDescription(value.target.value)}
                                  // onBlur={handleBlur}
                                  style={{ display: "block" }}
                                  className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
                                >
                                  <option value="" label="Select car description">
                                    Select year{" "}
                                  </option>
                                  <option value="Audi A3 Sedan" label="Audi A3 Sedan">
                                    Audi A3 Sedan
                                  </option>
                                  <option value="BMW 3 Series" label="BMW 3 Series">
                                    Audi S3 Sedan
                                  </option>
                                  <option value="Audi A4 Sedan" label="Audi A4 Sedan">
                                    Audi A4 Sedan
                                  </option>
                                </select>
                              </>

                            )}
                            {model === "bmw" && yearOfManufacture === "2022" && (
                              //car bmw 2022
                              <>
                                <select
                                  name="description"
                                  value={description}
                                  onChange={(value) => setDescription(value.target.value)}
                                  // onBlur={handleBlur}
                                  style={{ display: "block" }}
                                  className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
                                >
                                  <option value="" label="Select car description">
                                    Select year{" "}
                                  </option>
                                  <option value="BMW 2 Series Gran Coupe" label="BMW 2 Series Gran Coupe">
                                    BMW 2 Series Gran Coupe
                                  </option>
                                  <option value="BMW 3 Series" label="BMW 3 Series">
                                    BMW 3 Series
                                  </option>
                                  <option value="BMW 4 Series Gran Coupe" label="BMW 4 Series Gran Coupe">
                                    BMW 4 Series Gran Coupe
                                  </option>
                                </select>
                              </>

                            )}
                          </>
                        )}

                        <Button
                          className="loginBtn w-80 text-3xl"
                          onClick={(e) => {
                            //e.preventDefault();
                            toast.loading("Goal added...");
                            submit();
                          }}
                          shape="rounded"
                        >
                          Submit
                        </Button>
                      </form>
                    )}
                  </Formik>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
